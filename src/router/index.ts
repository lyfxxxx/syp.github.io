import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 动态引入组件
const HelloWorld = () => import('../components/HelloWorld.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/helloworld',
    name: 'helloWorld',
    component: HelloWorld,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;