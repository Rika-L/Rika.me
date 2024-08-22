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
    children:[
      {
        path:'',
        component:() => import('@/views/code/main.vue'),
        name: 'codeIndex',
      },
      {
        path:'/code/1',
        component:() => import('@/views/code/1.patterned-glass.vue'),
      }
    ]
  },
]
