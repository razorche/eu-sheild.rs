const DEFAULT_POLICY = {
  names: true,
  ibans: true,
  emails: true,
  amounts: true,
  phones: true,
  customRegex: true,
  customPattern: "",
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function defaultMetrics() {
  return {
    date: todayKey(),
    redactionsToday: 0,
    blockedToday: 0,
  };
}

async function ensureDefaults() {
  const data = await chrome.storage.local.get([
    "metrics",
    "shieldEnabled",
    "scrubPolicy",
    "leakStats",
  ]);

  let metrics = data.metrics || defaultMetrics();
  if (metrics.date !== todayKey()) {
    metrics = defaultMetrics();
    await chrome.storage.local.set({ metrics });
  }

  if (data.shieldEnabled === undefined) {
    await chrome.storage.local.set({ shieldEnabled: true });
  }
  if (!data.scrubPolicy) {
    await chrome.storage.local.set({ scrubPolicy: DEFAULT_POLICY });
  }

  return metrics;
}

chrome.runtime.onInstalled.addListener(() => {
  ensureDefaults();
});

async function broadcastToChatTabs(message) {
  const tabs = await chrome.tabs.query({
    url: [
      "https://chat.openai.com/*",
      "https://chatgpt.com/*",
      "https://claude.ai/*",
    ],
  });
  for (const tab of tabs) {
    if (tab.id) chrome.tabs.sendMessage(tab.id, message).catch(() => {});
  }
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  (async () => {
    if (msg.type === "GET_STATE") {
      const data = await chrome.storage.local.get(["shieldEnabled", "metrics", "scrubPolicy"]);
      const session = await chrome.storage.session.get([
        "vaultTokenCount",
        "injectorReady",
        "injectorVersion",
      ]);
      let metrics = data.metrics || defaultMetrics();
      if (metrics.date !== todayKey()) {
        metrics = defaultMetrics();
        await chrome.storage.local.set({ metrics });
      }
      sendResponse({
        shieldEnabled: data.shieldEnabled !== false,
        redactionsToday: metrics.redactionsToday,
        blockedToday: metrics.blockedToday,
        policy: data.scrubPolicy || DEFAULT_POLICY,
        vaultSize: session.vaultTokenCount || 0,
        injectorReady: session.injectorReady === true,
        injectorVersion: session.injectorVersion || 0,
      });
      return;
    }
    if (msg.type === "SET_SHIELD") {
      await chrome.storage.local.set({ shieldEnabled: Boolean(msg.enabled) });
      await broadcastToChatTabs({
        type: "SHIELD_STATE_CHANGED",
        enabled: Boolean(msg.enabled),
      });
      sendResponse({ ok: true });
      return;
    }
    if (msg.type === "SET_POLICY") {
      const current = (await chrome.storage.local.get("scrubPolicy")).scrubPolicy || DEFAULT_POLICY;
      const next = { ...current, ...(msg.policy || {}) };
      await chrome.storage.local.set({ scrubPolicy: next });
      await broadcastToChatTabs({ type: "POLICY_CHANGED", policy: next });
      sendResponse({ ok: true, policy: next });
      return;
    }
    if (msg.type === "PURGE_VAULT") {
      await chrome.storage.session.set({ vaultTokenCount: 0 });
      await broadcastToChatTabs({ type: "PURGE_VAULT" });
      sendResponse({ ok: true });
      return;
    }
    if (msg.type === "REDACTION_APPLIED") {
      const metrics = await ensureDefaults();
      metrics.redactionsToday += 1;
      await chrome.storage.local.set({ metrics });
      sendResponse({ ok: true, redactionsToday: metrics.redactionsToday });
      return;
    }
    if (msg.type === "REQUEST_BLOCKED") {
      const metrics = await ensureDefaults();
      metrics.blockedToday += 1;
      await chrome.storage.local.set({ metrics });
      sendResponse({ ok: true, blockedToday: metrics.blockedToday });
      return;
    }
  })();
  return true;
});
