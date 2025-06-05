import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'

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
      path: '/cart',
      name: 'shopCart',
      component: ShoppingCartView
    },
  ],
})

export default router
