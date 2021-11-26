import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'

// 使用router插件
Vue.use(VueRouter)

// 路由对象
export default new VueRouter({
  // 不显示井号
  mode: 'history',
  routes: [
    {
      // 缺省
      path: '',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      // 动态路由（后面作为参数取名为name和id）
      path: '/user/:name/:id',
      // 懒加载
      component: () => import('../components/User')
    },
    {
      path: '/page',
      component: () => import('../components/Page'),
      // 匹配多个子路径
      children: [
        {
          path: 'pageA',
          component: () => import('../components/PageA')
        },
        {
          path: 'pageB',
          component: () => import('../components/PageB')
        }
      ]
    },
    {
      path: '/pass',
      component: () => import('../components/Pass')
    }
  ]
})
