import type { RouterHistory } from 'vue-router'
import { createWebHashHistory, createWebHistory } from 'vue-router'

function getHistoryMode(historyMode: 'hash' | 'h5'): RouterHistory {
  if (historyMode === 'hash') {
    return createWebHashHistory()
  }
  else {
    return createWebHistory()
  }
}

export { getHistoryMode }
