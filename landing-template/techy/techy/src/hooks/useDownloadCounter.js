import { useCallback, useEffect, useState } from 'react'
import {
  incrementDownloadStats,
  loadDownloadStats,
  subscribeDownloadStats,
  totalDisplayCount,
} from '../utils/downloadCounter'

export function useDownloadCounter() {
  const [stats, setStats] = useState(loadDownloadStats);

  useEffect(() => subscribeDownloadStats(setStats), []);

  const triggerDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = `${process.env.PUBLIC_URL || ''}/downloads/eushield-extension.zip`
    link.download = 'eushield-extension.zip'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setStats(incrementDownloadStats())
  }, []);

  return {
    stats,
    totalCount: totalDisplayCount(stats),
    localCount: stats.count,
    triggerDownload,
  }
}
