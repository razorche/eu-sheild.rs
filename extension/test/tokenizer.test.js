const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

const EUShieldTokenizer = require("../lib/tokenizer.js");
global.EUShieldTokenizer = EUShieldTokenizer;
const EUShieldOutbound = require("../lib/outbound-processor.js");
global.EUShieldOutbound = EUShieldOutbound;

const POLICY = { ...EUShieldTokenizer.DEFAULT_POLICY };

describe("EUShield 0.3.0 tokenizer & outbound", () => {
  it("TEST 1: plain text without PII passes (passthrough)", () => {
    const vault = new Map();
    const r = EUShieldOutbound.processRawText('{"message":"Hello, how are you?"}', vault, POLICY, {
      allowRawFallback: true,
    });
    assert.equal(r.action, "passthrough");
  });

  it("TEST 2: empty attachment metadata does not block", () => {
    const vault = new Map();
    const body = {
      file_ids: [],
      attachments: [],
      images: [],
      message: "Hello",
    };
    const res = EUShieldTokenizer.redactJsonObject(body, vault, POLICY);
    assert.equal(res.hasAttachment, false);
    const r = EUShieldOutbound.processRawText(JSON.stringify(body), vault, POLICY, {
      allowRawFallback: true,
    });
    assert.notEqual(r.action, "block");
  });

  it("TEST 3: valid IBAN tokenized", () => {
    const vault = new Map();
    const text = "Pay HR1210010051863000160 please";
    const { text: out, hadPii } = EUShieldTokenizer.tokenizeText(text, vault, POLICY);
    assert.equal(hadPii, true);
    assert.match(out, /\[IBAN_1\]/);
    assert.equal(vault.get("IBAN_1"), "HR1210010051863000160");
  });

  it("TEST 4: invalid IBAN not tokenized", () => {
    const vault = new Map();
    const text = "Code XX00999999999999999999";
    const { text: out, hadPii } = EUShieldTokenizer.tokenizeText(text, vault, POLICY);
    assert.equal(hadPii, false);
    assert.doesNotMatch(out, /\[IBAN_/);
  });

  it("TEST 5: multiple names in JSON get unique tokens", () => {
    const vault = new Map();
    const body = {
      a: "Adv. Marko Petrovic signed",
      b: "Contact Jelena Nikolic tomorrow",
    };
    const res = EUShieldTokenizer.redactJsonObject(body, vault, POLICY);
    assert.match(JSON.stringify(res.body), /\[NAME_1\]/);
    assert.match(JSON.stringify(res.body), /\[NAME_2\]/);
    assert.notEqual(vault.get("NAME_1"), vault.get("NAME_2"));
  });

  it("TEST 6: repeated identical name reuses token", () => {
    const vault = new Map();
    const body = { x: "Dr. Ana Jovanovic", y: "Dr. Ana Jovanovic" };
    const res = EUShieldTokenizer.redactJsonObject(body, vault, POLICY);
    const s = JSON.stringify(res.body);
  const first = (s.match(/\[NAME_\d+\]/g) || [])[0];
    assert.ok(first);
    assert.equal((s.match(/\[NAME_\d+\]/g) || []).filter((t) => t === first).length, 2);
    assert.equal(vault.size, 1);
  });

  it("TEST 7: emails and phones categorized", () => {
    const vault = new Map();
    const text = "a@example.com +381 61 1234567";
    const { categories } = EUShieldTokenizer.tokenizeText(text, vault, POLICY);
    assert.ok(categories.has("emails"));
    assert.ok(categories.has("phones"));
  });

  it("TEST 8: nested JSON redaction", () => {
    const vault = new Map();
    const body = { nested: { msg: "Email zara@example.com" } };
    const res = EUShieldTokenizer.redactJsonObject(body, vault, POLICY);
    assert.match(JSON.stringify(res.body), /\[EMAIL_1\]/);
  });

  it("TEST 9: JSON null and false preserved", () => {
    const vault = new Map();
    const parsed = EUShieldOutbound.tryParseJson('{"ok":false,"n":null,"z":0}');
    assert.equal(parsed.ok, true);
    const res = EUShieldTokenizer.redactJsonObject(parsed.value, vault, POLICY);
    assert.equal(res.body.ok, false);
    assert.equal(res.body.n, null);
    assert.equal(res.body.z, 0);
  });

  it("TEST 10: text-only FormData inspection", () => {
    if (typeof FormData === "undefined") return;
    const fd = new FormData();
    fd.append("q", "hello");
    const info = EUShieldOutbound.inspectFormData(fd);
    assert.equal(info.hasFile, false);
    assert.equal(info.hasText, true);
  });

  it("TEST 11: FormData with File flagged", () => {
    if (typeof FormData === "undefined" || typeof File === "undefined") return;
    const fd = new FormData();
    fd.append("f", new File(["x"], "a.png", { type: "image/png" }));
    const info = EUShieldOutbound.inspectFormData(fd);
    assert.equal(info.hasFile, true);
  });

  it("TEST 13: non-message URL not classified", () => {
    assert.equal(
      EUShieldOutbound.classifyIntercept("https://chatgpt.com/backend-api/models", "GET"),
      false
    );
    assert.equal(
      EUShieldOutbound.classifyIntercept("https://chatgpt.com/backend-api/conversation", "POST"),
      true
    );
  });

  it("TEST 15: XHR-like JSON string processes", () => {
    const vault = new Map();
    const payload = JSON.stringify({
      message: "synthetic@test.eu IBAN DE89370400440532013000",
    });
    const r = EUShieldOutbound.processRawText(payload, vault, POLICY, { allowRawFallback: true });
    assert.equal(r.action, "replace");
    assert.match(r.body, /\[EMAIL_1\]/);
    assert.match(r.body, /\[IBAN_1\]/);
  });

  it("TEST 16: detokenize restores multiple tokens", () => {
    const vault = new Map();
    EUShieldTokenizer.tokenizeText("[NAME_1] and [NAME_2]", new Map(), POLICY);
    vault.set("NAME_1", "Alpha Beta");
    vault.set("NAME_2", "Gamma Delta");
    const out = EUShieldTokenizer.detokenizeText("Hi [NAME_1] and [NAME_2]", vault);
    assert.equal(out, "Hi Alpha Beta and Gamma Delta");
  });

  it("TEST 17: vault purge clears map", () => {
    const vault = new Map();
    EUShieldTokenizer.tokenizeText("a@b.co", vault, POLICY);
    vault.clear();
    assert.equal(vault.size, 0);
  });

  it("TEST 20: ChatGPT-style fixture shape preserved", () => {
    const vault = new Map();
    const fixture = {
      action: "next",
      messages: [{ author: { role: "user" }, content: { content_type: "text", parts: ["Hi"] } }],
      parent_message_id: "00000000-0000-0000-0000-000000000000",
      model: "gpt-4",
      timezone_offset_min: -60,
      history_and_training_disabled: false,
      conversation_mode: { kind: "primary_assistant" },
      force_paragen: false,
      force_rate_limit: false,
      suggestions: [],
      files: [],
      file_ids: [],
    };
    const res = EUShieldTokenizer.redactJsonObject(fixture, vault, POLICY);
    assert.equal(res.hasAttachment, false);
    assert.equal(res.body.files.length, 0);
    assert.deepEqual(res.body.messages, fixture.messages);
  });
});
