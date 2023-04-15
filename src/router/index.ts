import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/UsersView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
      ]
    },
  ]
})

export default router
