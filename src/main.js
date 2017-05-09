import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'

import Layout from './layout'

import './assets/less/main.less'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
