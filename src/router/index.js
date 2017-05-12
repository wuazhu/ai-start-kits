import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// nav pages
import Index from '../pages/Index'
import Uis from '../pages/Uis'
import Jspage from '../pages/jspage'
import More from '../pages/more'
// uipages
import Button from '../pages/ui/button'
import Form from '../pages/ui/form'
import List from '../pages/ui/list'
import Search from '../pages/ui/search'
import Radio from '../pages/ui/radio'
import Badge from '../pages/ui/badge'
import Card from '../pages/ui/card'
import Accordions from '../pages/ui/accordion'
import Progress from '../pages/ui/progress'
import Tabbar from '../pages/ui/tabbar'
import Counter from '../pages/ui/counter'
import Feedback from '../pages/ui/feedback'
import Stepbar from '../pages/ui/stepbar'
import Timeline from '../pages/ui/timeline'
// jspages
import Dialog from '../pages/js/dialog'
import Actionsheet from '../pages/js/actionsheet'
import Chart from '../pages/js/chart'
import IndexList from '../pages/js/indexList'
import Loading from '../pages/js/loading'
import Picker from '../pages/js/picker'
import Popover from '../pages/js/popover'
import Slider from '../pages/js/slider'
import Toast from '../pages/js/toast'

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
      name: 'MORE',
      path: '/more',
      component: More
    },
    // pages
    {
      name: 'BUTTON',
      path: '/uis/button',
      component: Button
    },
    {
      name: 'FORM',
      path: '/uis/form',
      component: Form
    },
    {
      name: 'LIST',
      path: '/uis/list',
      component: List
    },
    {
      name: 'SEARCH',
      path: '/uis/search',
      component: Search
    },
    {
      name: 'RADIO',
      path: '/uis/radio',
      component: Radio
    },
    {
      name: 'BADGE',
      path: '/uis/badge',
      component: Badge
    },
    {
      name: 'CARD',
      path: '/uis/card',
      component: Card
    },
    {
      name: 'ACCORDION',
      path: '/uis/accordion',
      component: Accordions
    },
    {
      name: 'PROGRESS',
      path: '/uis/progress',
      component: Progress
    },
    {
      name: 'TABBAR',
      path: '/uis/tabbar',
      component: Tabbar
    },
    {
      name: 'COUNTER',
      path: '/uis/counter',
      component: Counter
    },
    {
      name: 'FEEDBACK',
      path: '/uis/feedback',
      component: Feedback
    },
    {
      name: 'STEPBAR',
      path: '/uis/stepbar',
      component: Stepbar
    },
    {
      name: 'TIMELINE',
      path: '/uis/timeline',
      component: Timeline
    },
    // jspages
    {
      name: 'DIALOG',
      path: '/js/dialog',
      component: Dialog
    },
    {
      name: 'TOAST',
      path: '/js/toast',
      component: Toast
    },
    {
      name: 'INDEXLIST',
      path: '/js/indexlist',
      component: IndexList
    },
    {
      name: 'PICKER',
      path: '/js/picker',
      component: Picker
    },
    {
      name: 'SLIDER',
      path: '/js/slider',
      component: Slider
    },
    {
      name: 'POPOVER',
      path: '/js/popover',
      component: Popover
    },
    {
      name: 'ACTIONSHEET',
      path: '/js/actionsheet',
      component: Actionsheet
    },
    {
      name: 'LOADING',
      path: '/js/loading',
      component: Loading
    },
    {
      name: 'CHART',
      path: '/js/chart',
      component: Chart
    }
  ]
})
