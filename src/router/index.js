import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/AboutUs.vue'
import ServicesView from '../views/OurServices.vue'
import CustomersView from '../views/OurCustomers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersView
    }
  ]
})

export default router 