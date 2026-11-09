const STORAGE_KEY = 'eushield_download_stats_v1';
const CHANNEL_NAME = 'eushield_downloads';
const BASELINE = 0;

const defaultStats = () => ({
  baseline: BASELINE,
  count: 0,
  history: [],
  lastDownloadedAt: null,
});

export function loadDownloadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStats();
    return { ...defaultStats(), ...JSON.parse(raw) };
  } catch {
    return defaultStats();
  }
}

export function saveDownloadStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  try {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    channel.postMessage(stats);
    channel.close();
  } catch {
    /* BroadcastChannel unavailable */
  }
}

export function incrementDownloadStats() {
  const stats = loadDownloadStats();
  stats.count += 1;
  stats.lastDownloadedAt = new Date().toISOString();
  stats.history = [...(stats.history || []), stats.lastDownloadedAt].slice(-50);
  saveDownloadStats(stats);
  return stats;
}

export function totalDisplayCount(stats) {
  return (stats?.baseline || BASELINE) + (stats?.count || 0);
}

export function subscribeDownloadStats(callback) {
  const onStorage = (e) => {
    if (e.key === STORAGE_KEY) callback(loadDownloadStats());
  };
  window.addEventListener('storage', onStorage);
  let channel;
  try {
    channel = new BroadcastChannel(CHANNEL_NAME);
    channel.onmessage = () => callback(loadDownloadStats());
  } catch {
    /* noop */
  }
  return () => {
    window.removeEventListener('storage', onStorage);
    if (channel) channel.close();
  };
}
