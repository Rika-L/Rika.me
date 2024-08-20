import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('@/views/index.vue'),
    name: 'index',
  },
  {
    path: '/blog',
    component: () => import('@/views/blog/index.vue'),
    name: 'blog',
    children: [
      {
        path: '',
        component: () => import('@/views/blog/main.vue'),
        name: 'blogIndex',
      },
      {
        path: '/blog/1',
        component: () => import('@/pages/blog/VueCustomDirectives.md'),
      },
    ],
  },
]
