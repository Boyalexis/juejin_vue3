import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home.vue')
  },
  {
    path: '/pins',
    name: 'pins',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Pins.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/News.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/books.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/events.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Login.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
