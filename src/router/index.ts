import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  }, {
    path: '/article-info',
    name: 'ArticleInfo',
    component: () => import('../views/article-info/index.vue')
  }, {
    path: '/more',
    name: 'More',
    component: () => import('../views/more/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
