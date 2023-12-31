import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import userRouter from './modules/user'
import HomeView from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...routes,
    ...userRouter
  ]
})

export default router
