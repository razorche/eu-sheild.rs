/**
 * MAIN-world EUShield runtime: shared vault, outbound interception, DOM restore.
 * Vault never leaves this closure — bridge receives counts/categories only.
 */
(function EUShieldPageRuntime() {
  const CHANNEL = "EUSHIELD_V1";
  const DEV_LOG = false;

  let shieldEnabled = true;
  let policy = { ...EUShieldTokenizer.DEFAULT_POLICY };
  const sessionVault = new Map();

  let injectorReady = false;
  let lastError = null;

  function logSafe(...args) {
    if (DEV_LOG) console.warn("[EUShield]", ...args);
  }

  function post(type, payload) {
    window.postMessage({ channel: CHANNEL, type, ...payload }, "*");
  }

  function abortShield(reason, detail) {
    post("BLOCKED_REQUEST", { reason, detail: detail ? String(detail).slice(0, 200) : "" });
    const err = new Error(`EUShield fail-closed: ${reason}`);
    err.euShield = { reason, detail };
    lastError = { reason, detail: err.euShield.detail };
    return err;
  }

  window.addEventListener("message", (event) => {
    if (event.source !== window || !event.data || event.data.channel !== CHANNEL) return;
    const t = event.data.type;
    if (t === "SHIELD_STATE") shieldEnabled = Boolean(event.data.enabled);
    if (t === "POLICY_STATE" && event.data.policy) {
      policy = EUShieldTokenizer.mergePolicy(event.data.policy);
    }
    if (t === "PURGE_VAULT") {
      sessionVault.clear();
      vaultRevision += 1;
    }
  });

  function notifyRedaction(categories) {
    post("REDACTION_OK", { categories: categories || [] });
    post("VAULT_STATS", { count: sessionVault.size, revision: vaultRevision });
  }

  let vaultRevision = 0;

  function processBodyText(raw) {
    const result = EUShieldOutbound.processRawText(raw, sessionVault, policy, {
      allowRawFallback: true,
    });
    if (result.action === "block") {
      throw abortShield(result.reason || "TOKENIZE", result.detail);
    }
    if (result.action === "replace") {
      notifyRedaction(result.categories);
      return result.body;
    }
    return null;
  }

  async function readFetchBody(input, init) {
    if (init?.body instanceof FormData) return { kind: "form", raw: init.body };
    if (init?.body instanceof URLSearchParams) return { kind: "text", raw: init.body.toString() };
    if (typeof init?.body === "string") return { kind: "text", raw: init.body };
    if (init?.body instanceof ReadableStream) return { kind: "stream", request: input, init };
    if (init?.body instanceof ArrayBuffer || ArrayBuffer.isView(init?.body)) {
      return { kind: "binary", raw: init.body };
    }
    if (input instanceof Request && input.body != null) {
      const clone = input.clone();
      try {
        const text = await clone.text();
        return { kind: "text", raw: text };
      } catch {
        return { kind: "unknown" };
      }
    }
    return { kind: "none" };
  }

  async function processFormData(formData) {
    const info = EUShieldOutbound.inspectFormData(formData);
    if (info.hasFile) throw abortShield("ATTACHMENT", "File upload in FormData");
    if (!info.hasText) return null;

    const next = new FormData();
    let changed = false;
    for (const [key, val] of formData.entries()) {
      if (typeof val === "string") {
        const processed = processBodyText(val);
        if (processed != null) {
          next.append(key, processed);
          changed = true;
        } else {
          next.append(key, val);
        }
      } else {
        next.append(key, val);
      }
    }
    return changed ? next : null;
  }

  async function maybeProcessOutbound(url, method, bodyInfo) {
    if (!shieldEnabled) return null;
    if (!EUShieldOutbound.matchesTargetHost(url)) return null;
    if (!EUShieldOutbound.classifyIntercept(url, method)) return null;

    if (bodyInfo.kind === "none") return null;
    if (bodyInfo.kind === "stream") return { kind: "stream" };
    if (bodyInfo.kind === "binary") throw abortShield("ATTACHMENT", "Binary body on message endpoint");
    if (bodyInfo.kind === "unknown") throw abortShield("PARSE", "Unreadable request body");
    if (bodyInfo.kind === "form") {
      const fd = await processFormData(bodyInfo.raw);
      return fd ? { kind: "form", body: fd } : null;
    }
    if (bodyInfo.kind === "text") {
      const next = processBodyText(bodyInfo.raw);
      return next != null ? { kind: "text", body: next } : null;
    }
    return null;
  }

  const nativeFetch = window.fetch.bind(window);
  window.fetch = async function patchedFetch(input, init) {
    const req = input instanceof Request ? input : null;
    const url = req ? req.url : String(input);
    const method = (init?.method || req?.method || "GET").toUpperCase();

    if (!shieldEnabled || !EUShieldOutbound.matchesTargetHost(url)) {
      return nativeFetch(input, init);
    }
    if (!EUShieldOutbound.classifyIntercept(url, method)) {
      return nativeFetch(input, init);
    }

    try {
      const mergedInit = { ...init };
      if (req && !init) {
        mergedInit.method = req.method;
        mergedInit.headers = req.headers;
        mergedInit.credentials = req.credentials;
        mergedInit.mode = req.mode;
        mergedInit.cache = req.cache;
        mergedInit.redirect = req.redirect;
        mergedInit.referrer = req.referrer;
        mergedInit.integrity = req.integrity;
        mergedInit.signal = req.signal;
        if (req.method !== "GET" && req.method !== "HEAD") {
          mergedInit.body = req.body;
        }
      }

      const bodyInfo = await readFetchBody(req || url, mergedInit);
      if (bodyInfo.kind === "stream") {
        return nativeFetch(input, init);
      }

      const processed = await maybeProcessOutbound(url, method, bodyInfo);
      if (processed == null) return nativeFetch(input, init);

      if (processed.kind === "form") {
        mergedInit.body = processed.body;
        return nativeFetch(url, mergedInit);
      }
      if (processed.kind === "text") {
        mergedInit.body = processed.body;
        return nativeFetch(url, mergedInit);
      }
      return nativeFetch(input, init);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const xhrOpen = XMLHttpRequest.prototype.open;
  const xhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function open(method, url, ...rest) {
    this.__euMethod = method;
    this.__euUrl = url;
    return xhrOpen.call(this, method, url, ...rest);
  };
  XMLHttpRequest.prototype.send = function send(body) {
    const url = this.__euUrl || "";
    const method = this.__euMethod || "POST";
    if (!shieldEnabled || !EUShieldOutbound.classifyIntercept(url, method)) {
      return xhrSend.call(this, body);
    }
    try {
      if (body instanceof FormData) {
        const info = EUShieldOutbound.inspectFormData(body);
        if (info.hasFile) throw abortShield("ATTACHMENT");
        if (info.hasText) {
          const fd = new FormData();
          let changed = false;
          for (const [k, v] of body.entries()) {
            if (typeof v === "string") {
              const n = processBodyText(v);
              fd.append(k, n != null ? n : v);
              if (n != null) changed = true;
            } else fd.append(k, v);
          }
          if (changed) return xhrSend.call(this, fd);
        }
        return xhrSend.call(this, body);
      }
      if (typeof body === "string") {
        const next = processBodyText(body);
        if (next != null) return xhrSend.call(this, next);
        return xhrSend.call(this, body);
      }
      if (body != null) throw abortShield("ATTACHMENT", "Unsupported XHR body type");
    } catch (err) {
      throw err;
    }
    return xhrSend.call(this, body);
  };

  /* ---------- DOM shield (same vault) ---------- */
  const TOKEN_RE = /\[(NAME|IBAN|EMAIL|EUR|PHONE|CUSTOM)_\d+\]/;
  const processedButtons = new WeakSet();
  const ROOT_SELECTOR =
    "[data-message-author-role='assistant'], .markdown, [class*='message'], [class*='Response']";

  function injectStyles() {
    if (document.getElementById("eushield-copy-clean-style")) return;
    const style = document.createElement("style");
    style.id = "eushield-copy-clean-style";
    style.textContent = `
      .eushield-copy-clean {
        position: absolute; top: 8px; right: 8px; z-index: 9999;
        font-family: Lexend, system-ui, sans-serif; font-size: 11px; font-weight: 600;
        padding: 6px 12px; border: 1px solid #18fef5; border-radius: 3px;
        color: #18fef5; background: rgba(20, 25, 45, 0.92); cursor: pointer;
      }
      .eushield-copy-clean:hover {
        background: linear-gradient(to right, #0196e7, #ff00a4); color: #fff; border-color: transparent;
      }`;
    (document.documentElement || document.head).appendChild(style);
  }

  function walkTextNodes(root, fn) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.parentElement) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return NodeFilter.FILTER_REJECT;
        if (!TOKEN_RE.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(fn);
  }

  function detokenizeRoot(root) {
    if (!shieldEnabled || sessionVault.size === 0 || !root || root.nodeType !== 1) return;
    let hadTokens = false;
    walkTextNodes(root, (node) => {
      const original = node.nodeValue;
      const next = EUShieldTokenizer.detokenizeText(original, sessionVault);
      if (next !== original) {
        hadTokens = true;
        const host = root.closest("[data-message-author-role]") || root;
        if (!host.getAttribute("data-eushield-clean")) {
          host.setAttribute("data-eushield-clean", original);
        }
        node.nodeValue = next;
      }
    });
    if (hadTokens) attachCopyClean(root);
  }

  function attachCopyClean(root) {
    const host = root.closest("[data-message-author-role='assistant']") || root;
    if (processedButtons.has(host) || host.querySelector(".eushield-copy-clean")) return;
    processedButtons.add(host);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "eushield-copy-clean";
    btn.textContent = "Copy Clean [Tokenized]";
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const clean = host.getAttribute("data-eushield-clean") || "";
      try {
        await navigator.clipboard.writeText(clean);
        btn.textContent = "Copied!";
        setTimeout(() => { btn.textContent = "Copy Clean [Tokenized]"; }, 1500);
      } catch {
        btn.textContent = "Copy failed";
      }
    });
    host.style.position = host.style.position || "relative";
    host.appendChild(btn);
  }

  function scanAll() {
    if (!document.body) return;
    document.querySelectorAll(ROOT_SELECTOR).forEach((el) => detokenizeRoot(el));
  }

  let rafScheduled = false;
  const observer = new MutationObserver(() => {
    if (!shieldEnabled || sessionVault.size === 0 || rafScheduled) return;
    rafScheduled = true;
    requestAnimationFrame(() => {
      rafScheduled = false;
      scanAll();
    });
  });

  function startDomShield() {
    if (!document.body) {
      document.addEventListener("DOMContentLoaded", startDomShield, { once: true });
      return;
    }
    injectStyles();
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    scanAll();
  }

  startDomShield();

  injectorReady = true;
  post("INJECTOR_READY", { version: 4, ready: true });
  post("VAULT_STATS", { count: sessionVault.size, revision: vaultRevision });
})();
