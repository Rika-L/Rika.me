import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('@/views/index.vue'),
    name: 'index',
  },
]
