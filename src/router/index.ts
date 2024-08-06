import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/routes.ts'


let router = createRouter({
  //路由模式
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  /*具体来说，
    scrollBehavior 函数会在路由切换时被调用，
    它决定了页面滚动的位置。
    在这个例子中，
    scrollBehavior 函数简单地返回了一个对象 { left: 0, top: 0 }，
    表示每次路由切换时页面都会滚动到顶部的位置，左边滚动到0位置。
  */
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
export default router
