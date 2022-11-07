/** 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [{
        title: '按钮',
        name: 'Button',
        path: '/components/Button',
        component: () => import('../../packages/Button/docs/README.md'),
      },{
        title: '标签',
        name: 'Tag',
        path: '/components/Tag',
        component: () => import('../../packages/Tag/docs/README.md'),
      }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
  routes,
});

export default router;
