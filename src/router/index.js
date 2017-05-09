import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//页面路由
import Index from '../pages/Index'
import Uis from '../pages/Uis'
import Charts  from '../pages/Charts'
import List from '../pages/List'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/uis',
      component: Uis
    },
    {
      path: '/charts',
      component: Charts
    },
    {
      path: '/list',
      component: List
    },
  ]
})
