import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/animate.css'
import './assets/css/style.css'
import axios from 'axios'


Vue.prototype.$http = axios
Vue.prototype.$host = "http://trip2.test/api/v1"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
