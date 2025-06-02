import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: HomeView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
    },
    {
      path: '/product',
      name: 'product_page',
      component: () => import('../views/ProductView.vue')
    }
  ],
})

export default router
