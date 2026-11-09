(function EUShieldBridge() {
  const CHANNEL = "EUSHIELD_V1";

  /**
   * Trust boundary note:
   * MAIN-world scripts share the page JS realm. postMessage is NOT a secret channel;
   * page scripts can observe our channel. We never sync PII vault maps over postMessage.
   * Policy toggles originate only from chrome.storage via this isolated bridge.
   */
  const ALLOWED_FROM_PAGE = new Set([
    "INJECTOR_READY",
    "FAIL_CLOSED",
    "BLOCKED_REQUEST",
    "REDACTION_OK",
    "VAULT_STATS",
  ]);

  function injectMainScripts() {
    const files = [
      "lib/tokenizer.js",
      "lib/outbound-processor.js",
      "content/page-runtime.js",
    ];
    const root = document.documentElement || document.head;
    if (!root) {
      document.addEventListener("DOMContentLoaded", injectMainScripts, { once: true });
      return;
    }
    for (const file of files) {
      const script = document.createElement("script");
      script.src = chrome.runtime.getURL(file);
      script.async = false;
      root.appendChild(script);
    }
  }

  injectMainScripts();

  const modalCss = document.createElement("link");
  modalCss.rel = "stylesheet";
  modalCss.href = chrome.runtime.getURL("styles/modal.css");
  (document.documentElement || document.head)?.appendChild(modalCss);

  let modalRoot = null;

  function ensureModal() {
    if (modalRoot) return modalRoot;
    modalRoot = document.createElement("div");
    modalRoot.id = "eushield-modal-host";
    modalRoot.setAttribute("aria-live", "assertive");
    document.documentElement.appendChild(modalRoot);
    return modalRoot;
  }

  const FAIL_COPY = {
    PARSE:
      "EUShield blocked this send because the request body could not be read safely.",
    TOKENIZE:
      "EUShield blocked this send because sensitive data could not be tokenized safely. No data left your machine.",
    ATTACHMENT:
      "EUShield currently protects text-only prompts. Remove files/images to continue safely.",
    PROTOCOL:
      "EUShield blocked this send due to an unrecognized AI transport.",
  };

  function showFailModal(reason, detail) {
    const host = ensureModal();
    const version = chrome.runtime.getManifest().version;
    host.innerHTML = `
      <div class="eu-modal-backdrop" role="dialog" aria-modal="true">
        <div class="eu-modal-card">
          <div class="eu-modal-glow"></div>
          <div class="eu-modal-icon" aria-hidden="true"></div>
          <p class="eu-modal-eyebrow">FAIL-CLOSED PROTECTION</p>
          <h2 class="eu-modal-title">Send blocked</h2>
          <p class="eu-modal-body">${FAIL_COPY[reason] || FAIL_COPY.PROTOCOL}</p>
          ${detail ? `<p class="eu-modal-detail">${String(detail).slice(0, 300)}</p>` : ""}
          <p class="eu-modal-meta">EUShield v${version} | ${reason}</p>
          <button type="button" class="eu-modal-btn" id="eushield-modal-dismiss">Understood</button>
        </div>
      </div>`;
    host.querySelector("#eushield-modal-dismiss")?.addEventListener("click", () => {
      host.innerHTML = "";
    });
  }

  function postToPage(type, payload) {
    window.postMessage({ channel: CHANNEL, type, ...payload }, "*");
  }

  function syncFromStorage() {
    chrome.storage.local.get(["shieldEnabled", "scrubPolicy"], (data) => {
      postToPage("SHIELD_STATE", { enabled: data.shieldEnabled !== false });
      postToPage("POLICY_STATE", { policy: data.scrubPolicy });
    });
  }

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "SHIELD_STATE_CHANGED") {
      postToPage("SHIELD_STATE", { enabled: msg.enabled });
    }
    if (msg.type === "POLICY_CHANGED") {
      postToPage("POLICY_STATE", { policy: msg.policy });
    }
    if (msg.type === "PURGE_VAULT") {
      postToPage("PURGE_VAULT", {});
      chrome.storage.session.set({ vaultTokenCount: 0 });
    }
    if (msg.type === "GET_TAB_STATUS") {
      chrome.storage.session.get(["injectorReady", "vaultTokenCount"], (data) => {
        postToPage("PING_INJECTOR", {});
      });
    }
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local") {
      if (changes.shieldEnabled) {
        postToPage("SHIELD_STATE", { enabled: changes.shieldEnabled.newValue !== false });
      }
      if (changes.scrubPolicy) {
        postToPage("POLICY_STATE", { policy: changes.scrubPolicy.newValue });
      }
    }
  });

  window.addEventListener("message", (event) => {
    if (event.source !== window || !event.data || event.data.channel !== CHANNEL) return;
    const { type, reason, detail, categories, count, ready } = event.data;

    if (!ALLOWED_FROM_PAGE.has(type)) return;

    if (type === "FAIL_CLOSED" || type === "BLOCKED_REQUEST") {
      showFailModal(reason || "PROTOCOL", detail);
      chrome.runtime.sendMessage({
        type: "REQUEST_BLOCKED",
        reason: reason || "PROTOCOL",
      });
      return;
    }

    if (type === "REDACTION_OK") {
      chrome.runtime.sendMessage({
        type: "REDACTION_APPLIED",
        categories: categories || [],
      });
      return;
    }

    if (type === "VAULT_STATS" && typeof count === "number") {
      chrome.storage.session.set({ vaultTokenCount: count });
      return;
    }

    if (type === "INJECTOR_READY") {
      chrome.storage.session.set({
        injectorReady: ready !== false,
        injectorVersion: event.data.version || 0,
      });
      syncFromStorage();
    }
  });

  syncFromStorage();
})();
