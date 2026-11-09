const toggle = document.getElementById("shield-toggle");
const panel = document.getElementById("shield-panel");
const label = document.getElementById("shield-label");
const hint = document.getElementById("shield-hint");
const injectorStatus = document.getElementById("injector-status");
const counterEl = document.getElementById("flip-counter");
const blockedEl = document.getElementById("blocked-count");
const categoryRoot = document.getElementById("category-toggles");
const customPattern = document.getElementById("custom-pattern");
const vaultSizeEl = document.getElementById("vault-size");
const testInput = document.getElementById("test-input");
const testOutput = document.getElementById("test-output");

let policy = { ...EUShieldTokenizer.DEFAULT_POLICY };

function pad4(n) {
  return String(Math.max(0, Math.min(9999, n))).padStart(4, "0");
}

function renderCounter(value) {
  const s = pad4(value);
  const digits = counterEl.querySelectorAll(".eu-digit span");
  [...digits].forEach((span, i) => {
    if (span.textContent !== s[i]) span.textContent = s[i];
  });
}

function applyShieldUI(enabled, injectorReady) {
  toggle.checked = enabled;
  panel.classList.toggle("is-off", !enabled);
  const active = enabled && injectorReady;
  label.textContent = active
    ? "SHIELD ACTIVE"
    : enabled
      ? "SHIELD ON (injector pending)"
      : "UNPROTECTED";
  hint.textContent = active
    ? "Message endpoints are intercepted"
    : enabled
      ? "Open or refresh ChatGPT/Claude tab"
      : "Outbound prompts are not redacted";
  injectorStatus.textContent = injectorReady
    ? `Injector v${window.__euInjectorVer || "?"} ready`
    : "Injector: not ready on this tab";
  injectorStatus.classList.toggle("eu-injector-ok", injectorReady);
}

function applyCategoryUI() {
  categoryRoot.querySelectorAll(".eu-pill").forEach((pill) => {
    const key = pill.dataset.key;
    const on = policy[key] !== false;
    pill.classList.toggle("eu-pill-active", on);
  });
  customPattern.value = policy.customPattern || "";
}

function refreshState() {
  chrome.runtime.sendMessage({ type: "GET_STATE" }, (res) => {
    if (chrome.runtime.lastError || !res) return;
    window.__euInjectorVer = res.injectorVersion;
    applyShieldUI(res.shieldEnabled, res.injectorReady);
    renderCounter(res.redactionsToday || 0);
    blockedEl.textContent = String(res.blockedToday || 0);
    policy = { ...EUShieldTokenizer.DEFAULT_POLICY, ...(res.policy || {}) };
    applyCategoryUI();
    vaultSizeEl.textContent = String(res.vaultSize || 0);
  });
}

toggle.addEventListener("change", () => {
  chrome.runtime.sendMessage({ type: "SET_SHIELD", enabled: toggle.checked }, refreshState);
});

categoryRoot.addEventListener("click", (e) => {
  const pill = e.target.closest(".eu-pill");
  if (!pill) return;
  const key = pill.dataset.key;
  const next = { ...policy, [key]: policy[key] === false };
  chrome.runtime.sendMessage({ type: "SET_POLICY", policy: next }, refreshState);
});

document.getElementById("save-regex").addEventListener("click", () => {
  const pattern = customPattern.value.trim();
  const compiled = EUShieldTokenizer.compileCustom(pattern);
  if (pattern && !compiled) {
    testOutput.textContent = "Invalid or unsafe RegEx pattern.";
    return;
  }
  const next = {
    ...policy,
    customPattern: pattern,
    customRegex: Boolean(pattern),
  };
  chrome.runtime.sendMessage({ type: "SET_POLICY", policy: next }, refreshState);
});

document.getElementById("purge-vault").addEventListener("click", () => {
  chrome.runtime.sendMessage({ type: "PURGE_VAULT" }, refreshState);
});

document.getElementById("run-test").addEventListener("click", () => {
  const { redacted, vault } = EUShieldTokenizer.tokenizeDisplay(testInput.value, policy);
  testOutput.textContent = `${redacted}\n\n--- tokens: ${vault.size} entries (values hidden in popup log) ---`;
});

refreshState();
setInterval(refreshState, 3000);
