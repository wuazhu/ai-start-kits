import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//页面路由
import Index from '../pages/Index'
import Uis from '../pages/Uis'
import Charts  from '../pages/Charts'
import List from '../pages/List'
import Form from '../pages/Form'
import Button from '../pages/buttons'
import Cards from '../pages/cards'
import Jspage from '../pages/jspage'
import Accordions from '../pages/Accordions'

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'INDEX',
      path: '/',
      component: Index
    },
    {
      name: 'UIS',
      path: '/uis',
      component: Uis
    },
    {
      name: 'JS',
      path: '/js',
      component: Jspage
    },
    {
      name: 'CHARTS',
      path: '/uis/charts',
      component: Charts
    },
    {
      name: 'LIST',
      path: '/uis/list',
      component: List
    },
    {
      name: 'FORM',
      path: '/uis/form',
      component: Form
    },
    {
      name: 'CARDS',
      path: '/uis/cards',
      component: Cards
    },
    {
      name: 'ACCORDIONS',
      path: '/uis/accordions',
      component: Accordions
    },
    {
      name: 'BUTTON',
      path: '/uis/buttons',
      component: Button
    },

  ]
})
