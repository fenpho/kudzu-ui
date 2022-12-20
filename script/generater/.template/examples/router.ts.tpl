/** 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */
 import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
 import Index from "./views/Index"
 
 const routes = [
  {
    title: '首页',
    name: 'Index',
    path: '/',
    component: Index,
  },
  {{ routes }}
 ]

 const routerConfig = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  },
}

const router = createRouter(routerConfig as RouterOptions)
 
export default router

 