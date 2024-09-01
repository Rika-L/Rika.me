import { createRouter } from 'vue-router'
import { constantRoute } from '@/router/routes.ts'
import {getHistoryMode} from "@/router/utils.ts";

const router = createRouter({
  history: getHistoryMode('h5'),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
