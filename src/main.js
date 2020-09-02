import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import vueAxios from 'vue-axios'
import axios from 'axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(elementUi)
Vue.use(vueAxios, axios)
// Vue.axios.interceptors.request.use(function (req) {
//   return req
// })
// Vue.axios.interceptors.response.use(function (res) {
//   return res
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
