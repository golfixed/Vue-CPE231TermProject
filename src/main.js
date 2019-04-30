// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueGraph from 'vue-graph'
// import VueDropdown from 'vue-dynamic-dropdown'

Vue.config.productionTip = false
Vue.use(VueGraph)
// Vue.component('vue-dropdown', VueDropdown);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
