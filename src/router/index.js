import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('../views/info.vue'),
  },
  {
    path: '/batman',
    redirect: '/game/batmanAC'
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import('../views/notFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
