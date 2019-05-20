// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueGraph from 'vue-graph'
import VueGoogleCharts from 'vue-google-charts'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueGoogleCharts)
Vue.use(VueGraph)
Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
