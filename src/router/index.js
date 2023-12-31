import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/BlankView.vue')
    },
    {
      path: '/dashboard',
      name: 'dash',
      component: () => import('../views/dashboardView.vue')
    },
    {
      path: '/clients',
      name: 'clientes',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: '/received',
      name: 'FacRecibidas',
      component: () => import('../views/ReceivedView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
