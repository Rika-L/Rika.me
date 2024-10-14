import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('@/views/index.vue'),
    name: 'index',
  },
  {
    path: '/collections',
    component: () => import('@/views/collection.vue'),
    name: 'collections',
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
        component: () => import('@/views/code/4.minesweeper/Minesweeper.vue'),
      },
      {
        path: '/code/5',
        component: () => import('@/views/code/5.filter.vue'),
      },
      {
        path: '/code/6',
        component: () => import('@/views/code/6.audio.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/views/about.vue'),
    name: 'about',
  },
]
