import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('@/views/index.vue'),
    name: 'index',
  },
  {
    path: '/code',
    name: 'code',
    children: [
      {
        path: '',
        component: () => import('@/views/code/main.vue'),
        name: 'codeIndex',
      },
      {
        path: '/code/1',
        component: () => import('@/views/code/1.patterned-glass.vue'),
      },
      {
        path: '/code/2',
        component: () => import('@/views/code/2.round.vue'),
      },
      {
        path: '/code/3',
        component: () => import('@/views/code/3.focus.vue'),
      },
      {
        path: '/code/4',
        component: () => import('@/views/code/demo/Minesweeper.vue'),
      },
    ],
  },
]
