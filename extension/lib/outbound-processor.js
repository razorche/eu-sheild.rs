/**
 * Pure outbound body processing for tests and page-runtime.
 */
(function initOutboundProcessor(global) {
  const EU = () => global.EUShieldTokenizer;

  function tryParseJson(raw) {
    if (typeof raw !== "string") return { ok: false, value: null };
    const trimmed = raw.trim().replace(/^\uFEFF/, "");
    if (!trimmed) return { ok: false, value: null };
    try {
      return { ok: true, value: JSON.parse(trimmed), format: "json" };
    } catch {
      return { ok: false, value: null };
    }
  }

  function processParsedJson(json, vault, policy) {
    const result = EU().redactJsonObject(json, vault, policy);
  return result;
  }

  /**
   * @returns {{ action: 'passthrough'|'replace'|'block', body?: string, reason?: string, categories?: string[] }}
   */
  function processRawText(raw, vault, policy, options = {}) {
    const parsed = tryParseJson(raw);
    if (parsed.ok) {
      const result = processParsedJson(parsed.value, vault, policy);
      if (result.hasAttachment) {
        return { action: "block", reason: "ATTACHMENT", detail: "Upload or file payload detected" };
      }
      if (!result.touched) {
        return { action: "passthrough" };
      }
      return {
        action: "replace",
        body: JSON.stringify(result.body),
        categories: result.categories,
      };
    }

    if (options.allowRawFallback) {
      const probeVault = new Map();
      const probe = EU().tokenizeText(raw, probeVault, policy);
      if (!probe.hadPii) {
        return { action: "passthrough" };
      }
      const result = EU().tokenizeText(raw, vault, policy);
      if (!result.hadPii || result.text === raw) {
        return { action: "block", reason: "TOKENIZE", detail: "Raw redaction failed" };
      }
      return { action: "replace", body: result.text, categories: [...result.categories] };
    }

    return { action: "passthrough" };
  }

  function classifyIntercept(urlString, method) {
    const m = String(method || "GET").toUpperCase();
    if (!["POST", "PUT", "PATCH"].includes(m)) return false;

    let pathname = "";
    let host = "";
    try {
      const u = new URL(urlString, "https://chatgpt.com");
      pathname = u.pathname.toLowerCase();
      host = u.hostname.replace(/^www\./, "");
    } catch {
      return false;
    }

    const onChatGpt = host === "chatgpt.com" || host === "chat.openai.com";
    const onClaude = host === "claude.ai" || host.endsWith(".claude.ai");

    if (!onChatGpt && !onClaude) return false;

    if (onChatGpt) {
      if (pathname.includes("/backend-api/conversation")) return true;
      if (pathname.includes("/backend-api/f/conversation")) return true;
      if (pathname.includes("/backend-alt/conversation")) return true;
      if (pathname.includes("/v1/chat/completions")) return true;
      if (pathname.includes("/api/conversation")) return true;
      return false;
    }

    if (onClaude) {
      if (pathname.includes("/api/organizations/") && pathname.includes("/chat")) return true;
      if (pathname.includes("/api/append_message")) return true;
      if (pathname.includes("/api/retry_message")) return true;
      if (pathname.includes("/v1/complete")) return true;
      if (pathname.includes("/v1/messages")) return true;
      return false;
    }

    return false;
  }

  function matchesTargetHost(urlString) {
    try {
      const host = new URL(urlString, "https://example.com").hostname.replace(/^www\./, "");
      return host === "chatgpt.com" || host === "chat.openai.com" || host === "claude.ai" || host.endsWith(".claude.ai");
    } catch {
      return false;
    }
  }

  function inspectFormData(formData) {
    let hasFile = false;
    let hasText = false;
    const textParts = [];
    if (!(formData instanceof FormData)) {
      return { hasFile: true, hasText: false, textParts: [] };
    }
    for (const [key, val] of formData.entries()) {
      if (val instanceof File || val instanceof Blob) {
        hasFile = true;
      } else if (typeof val === "string") {
        hasText = true;
        textParts.push({ key, val });
      }
    }
    return { hasFile, hasText, textParts };
  }

  const api = {
    tryParseJson,
    processRawText,
    classifyIntercept,
    matchesTargetHost,
    inspectFormData,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    global.EUShieldOutbound = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : global);
