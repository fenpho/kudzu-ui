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
  {
        title: '按钮',
        name: 'Button',
        path: '/components/Button',
        component: () => import('../packages/components/Button/docs/README.md'),
      },{
        title: '标签',
        name: 'Tag',
        path: '/components/Tag',
        component: () => import('../packages/components/Tag/docs/README.md'),
      }
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

 