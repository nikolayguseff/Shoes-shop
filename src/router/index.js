import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Delivery from '@/views/Delivery.vue'
import Contact from '../views/Contact.vue'
import Signin from '@/views/Signin.vue'
import Cart from '@/views/Cart'
import Profile from '@/views/Profile'
import Product from '@/views/Product'
import Info from '@/views/Info'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery
  },
  {
    path: '/contact',
    name: 'Contact',    
    component: Contact
  },
  {
    path: '/sign-in',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/catalog/:url',
    name: 'Product',
    component: Product
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
