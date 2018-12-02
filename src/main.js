// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import axios from 'axios'
import moment from 'moment'

import IndexPage from './pages/index'
import Detail from './pages/detail'
import DetailForecast from  './pages/detail/forecast'
import DetailCount from  './pages/detail/count'
import DetailPublish from  './pages/detail/publish'
import DetailAnalysis from  './pages/detail/analysis'
import OrderList from './pages/orderList'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$moment = moment;//赋值使用
Vue.use(VueRouter)

let router = new VueRouter({
  // 这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path:'/orderList',
      component:OrderList
    },
    {
      path:'/detail',
      component:Detail,
      redirect:'/detail/count',
      children:[
        {
          path:'forecast',
          component:DetailForecast
        },
        {
          path:'count',
          component:DetailCount
        },
        {
          path:'analysis',
          component:DetailAnalysis
        },
        {
          path:'publish',
          component:DetailPublish
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
