import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductType from '../views/ProductType.vue'
import ProductType2 from '../views/ProductType2.vue'
import ProductType3 from '../views/ProductType3.vue'
import ProductType4 from '../views/ProductType4.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'ProductType',
    component: ProductType
  },
  {
    path: '/ProductType2',
    name: 'ProductType2',
    component: ProductType2
  },
  {
    path: '/ProductType3',
    name: 'ProductType3',
    component: ProductType3
  },
  {
    path: '/ProductType4',
    name: 'ProductType4',
    component: ProductType4
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
