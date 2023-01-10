import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 动态引入三个基础页面
const albumPage = () => import('../page/album/index.vue');
const blogPage = () => import('../page/blog/index.vue');
const homePage = () => import('../page/home/index.vue');
const MarkDownContainer = () => import('../page/blog/components/MarkDownContainer.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/album',
    name: 'album',
    component: albumPage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogPage,
  },
  {
    path: '/home',
    name: 'home',
    component: homePage,
  },
  {
    path: '/',
    name: 'default',
    component: homePage,
  },
  {
    path: '/article/:fileName',
    name: 'blogArticle',
    component: MarkDownContainer,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;