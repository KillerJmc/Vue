import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../components/Category')
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('../components/ShoppingCart')
  },
  {
    path: '/my-info',
    name: 'MyInfo',
    component: () => import('../components/MyInfo')
  },
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
})

