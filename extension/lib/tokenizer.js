/**
 * EUShield tokenizer — policy-driven PII redaction (browser-local).
 * Shared run state per request prevents token ID collisions across JSON fields.
 */
(function initEUShieldTokenizer(global) {
  const DEFAULT_POLICY = {
    names: true,
    ibans: true,
    emails: true,
    amounts: true,
    phones: true,
    customRegex: true,
    customPattern: "",
  };

  const NAME_STOP = new Set([
    "The", "This", "That", "When", "Where", "What", "How", "Chat", "Open", "Claude",
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December", "Dear", "Hello", "Please",
  ]);

  const EMAIL_RE = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const IBAN_CANDIDATE_RE = /\b[A-Z]{2}\d{2}[A-Z0-9]{11,28}\b/gi;
  const IBAN_SPACED_RE = /\b[A-Z]{2}\d{2}(?:\s?[A-Z0-9]{4}){2,7}(?:\s?[A-Z0-9]{1,4})?\b/gi;
  const PHONE_RE =
    /(?<!\d)(?:\+\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?)\d{3,4}[\s.-]?\d{3,4}(?:[\s.-]?\d{2,6})?(?!\d)/g;
  const EUR_RE =
    /(?:\u20AC\s?)?\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?(?:\s?(?:\u20AC|EUR|eur))?|\bEUR\s?\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?\b/gi;
  const HONORIFIC_NAME_RE =
    /\b(?:Mr|Mrs|Ms|Dr|Prof|Adv)\.?\s+[A-Z][\p{L}'-]+(?:\s+[A-Z][\p{L}'-]+)+\b/gu;
  const CAPITAL_PAIR_RE =
    /\b[A-Z][\p{L}'-]+\s+[A-Z][\p{L}'-]+\b/gu;

  function mod97(iban) {
    const expanded = (iban.slice(4) + iban.slice(0, 4))
      .replace(/[A-Z]/g, (ch) => String(ch.charCodeAt(0) - 55))
      .replace(/\s/g, "");
    let remainder = 0;
    for (let i = 0; i < expanded.length; i += 1) {
      remainder = (remainder * 10 + Number(expanded[i])) % 97;
    }
    return remainder === 1;
  }

  function isValidIban(raw) {
    const iban = raw.replace(/\s+/g, "").toUpperCase();
    if (iban.length < 15 || iban.length > 34) return false;
    if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(iban)) return false;
    return mod97(iban);
  }

  function mergePolicy(policy) {
    return { ...DEFAULT_POLICY, ...(policy || {}) };
  }

  /** Reject patterns likely to cause catastrophic backtracking. */
  function compileCustom(pattern) {
    if (!pattern || !String(pattern).trim()) return null;
    const src = String(pattern).trim().slice(0, 120);
    if (/(\([^)]*\+[^)]*\)){2,}/.test(src)) return null;
    if (/(\+|\*|\?|\{)\s*(\+|\*|\?|\{)/.test(src)) return null;
    try {
      return new RegExp(src, "gi");
    } catch {
      return null;
    }
  }

  function createRunState(vault) {
    const counters = { NAME: 0, IBAN: 0, EMAIL: 0, EUR: 0, PHONE: 0, CUSTOM: 0 };
    const categories = new Set();
    let hadPii = false;

    const nextToken = (type, value) => {
      const existing = [...vault.entries()].find(([, v]) => v === value);
      if (existing) {
        const n = existing[0].split("_")[1];
        return `[${type}_${n}]`;
      }
      counters[type] += 1;
      const key = `${type}_${counters[type]}`;
      vault.set(key, value);
      const catMap = {
        NAME: "names",
        IBAN: "ibans",
        EMAIL: "emails",
        EUR: "amounts",
        PHONE: "phones",
        CUSTOM: "customRegex",
      };
      categories.add(catMap[type]);
      hadPii = true;
      return `[${type}_${key.split("_")[1]}]`;
    };

    return { nextToken, categories, get hadPii() { return hadPii; } };
  }

  function tokenizeTextWithRun(text, vault, policyIn, run) {
    const policy = mergePolicy(policyIn);
    let out = text;

    if (policy.ibans) {
      const replaceIban = (match) =>
        isValidIban(match) ? run.nextToken("IBAN", match.replace(/\s+/g, " ").trim()) : match;
      out = out.replace(IBAN_SPACED_RE, replaceIban);
      out = out.replace(IBAN_CANDIDATE_RE, replaceIban);
    }
    if (policy.emails) {
      out = out.replace(EMAIL_RE, (match) => run.nextToken("EMAIL", match));
    }
    if (policy.phones) {
      out = out.replace(PHONE_RE, (match) => {
        const digits = match.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 15) return match;
        if (!match.includes("+") && digits.length < 11) return match;
        return run.nextToken("PHONE", match.trim());
      });
    }
    if (policy.amounts) {
      out = out.replace(EUR_RE, (match) => {
        if (match.length < 4) return match;
        return run.nextToken("EUR", match.trim());
      });
    }
    if (policy.names) {
      const replaceName = (match) => {
        const first = match.split(/\s+/)[0].replace(/\./g, "");
        if (NAME_STOP.has(first) || NAME_STOP.has(match.split(/\s+/)[0])) return match;
        return run.nextToken("NAME", match.trim());
      };
      out = out.replace(HONORIFIC_NAME_RE, replaceName);
      out = out.replace(CAPITAL_PAIR_RE, (match) => {
        const [a, b] = match.split(/\s+/);
        if (NAME_STOP.has(a) || NAME_STOP.has(b)) return match;
        if (/^(IBAN|EUR|USD|API|CEO|CTO|HR|GDPR)$/i.test(a)) return match;
        return run.nextToken("NAME", match.trim());
      });
    }
    if (policy.customRegex) {
      const customRe = compileCustom(policy.customPattern);
      if (customRe) {
        let safety = 0;
        out = out.replace(customRe, (match) => {
          safety += 1;
          if (safety > 50) return match;
          return run.nextToken("CUSTOM", match);
        });
      }
    }

    return { text: out, categories: run.categories, hadPii: run.hadPii };
  }

  function tokenizeText(text, vault, policyIn) {
    const run = createRunState(vault);
    return tokenizeTextWithRun(text, vault, policyIn, run);
  }

  function isEmptyAttachmentContainer(val) {
    if (val == null || val === false || val === 0) return true;
    if (typeof val === "string" && val.trim() === "") return true;
    if (Array.isArray(val) && val.length === 0) return true;
    if (typeof val === "object" && val !== null && !Array.isArray(val) && Object.keys(val).length === 0) {
      return true;
    }
    return false;
  }

  function isFileReferenceValue(val) {
    if (typeof val === "string" && val.length > 0) {
      if (/^file[-_]/i.test(val)) return true;
      if (/^att[-_]/i.test(val)) return true;
    }
    if (val && typeof val === "object") {
      const id = val.file_id || val.fileId || val.id || val.asset_id || val.attachment_id;
      if (id && String(id).length > 0) return true;
      if (val.mime_type || val.mimeType) {
        if (val.data || val.content || val.bytes || val.size > 0) return true;
      }
    }
    return false;
  }

  /** Structural attachment detection — property names alone are never sufficient. */
  function detectAttachmentValue(val) {
    if (isEmptyAttachmentContainer(val)) return false;
    if (Array.isArray(val)) {
      return val.some((item) => detectAttachmentValue(item));
    }
    if (typeof val === "string") {
      if (val.length > 8000 && /^[A-Za-z0-9+/=\r\n]+$/.test(val.replace(/\s/g, "").slice(0, 400))) {
        return true;
      }
      return isFileReferenceValue(val);
    }
    if (typeof val === "object" && val !== null) {
      return isFileReferenceValue(val);
    }
    return false;
  }

  function walkJson(value, vault, agg, policy, run) {
    if (typeof value === "string") {
      if (value.length < 2) return value;
      const { text, categories, hadPii } = tokenizeTextWithRun(value, vault, policy, run);
      categories.forEach((c) => agg.categories.add(c));
      if (hadPii) agg.touched = true;
      return text;
    }
    if (Array.isArray(value)) {
      return value.map((v) => walkJson(v, vault, agg, policy, run));
    }
    if (value && typeof value === "object") {
      const next = {};
      for (const [k, v] of Object.entries(value)) {
        if (detectAttachmentValue(v)) agg.hasAttachment = true;
        next[k] = walkJson(v, vault, agg, policy, run);
      }
      return next;
    }
    return value;
  }

  function redactJsonObject(obj, vault, policy) {
    const run = createRunState(vault);
    const agg = { categories: new Set(), touched: false, hasAttachment: false };
    const redacted = walkJson(obj, vault, agg, policy, run);
    return {
      body: redacted,
      categories: [...agg.categories],
      touched: agg.touched,
      hasAttachment: agg.hasAttachment,
    };
  }

  function detokenizeText(text, vault) {
    if (!text || !vault) return text;
    const map = vault instanceof Map ? vault : new Map(Object.entries(vault));
    return text.replace(
      /\[(NAME|IBAN|EMAIL|EUR|PHONE|CUSTOM)_(\d+)\]/g,
      (_, type, num) => map.get(`${type}_${num}`) || `[${type}_${num}]`
    );
  }

  function tokenizeDisplay(text, policy) {
    const vault = new Map();
    const { text: redacted } = tokenizeText(text, vault, policy);
    const map = Object.fromEntries(vault);
    return { redacted, map, vault };
  }

  const api = {
    DEFAULT_POLICY,
    tokenizeText,
    redactJsonObject,
    detokenizeText,
    tokenizeDisplay,
    isValidIban,
    mergePolicy,
    detectAttachmentValue,
    compileCustom,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    global.EUShieldTokenizer = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : global);
