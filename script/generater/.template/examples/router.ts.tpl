/** 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */
 import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
 import Index from './views/Index'
 import GetStart from './docs/get-start.md'
 import Button from '../packages/components/Button/docs/README.md' // 单独列出，处理github pages的点击无法跳转问题
 
 const routes = [
  {
    title: '首页',
    name: 'Index',
    path: '/',
    component: Index,
    redirect: '/get-start'
  },
  {
    title: '起步',
    name: 'GetStart',
    path: '/get-start',
    component: GetStart,
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/components/button',
    component: Button,
  }
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

 