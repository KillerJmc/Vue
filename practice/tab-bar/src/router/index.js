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
    component: () => import('../views/home/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('../views/shoppingcart/ShoppingCart')
  },
  {
    path: '/my-info',
    name: 'MyInfo',
    component: () => import('../views/myinfo/MyInfo')
  },
]

Vue.use(VueRouter)

export default new VueRouter({
  // history模式需要额外的配置（如nginx重定向回index.html），否则会404
  // mode: 'history',
  routes
})

