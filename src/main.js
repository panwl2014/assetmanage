import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'
import vueAxios from 'vue-axios'
import axios from 'axios'

// 请求拦截
Vue.use(vueAxios, axios)
Vue.axios.interceptors.request.use(function (req) {
  return req
})
Vue.axios.interceptors.response.use(function (res) {
  return res
})


Vue.config.productionTip = false

// axios.post('/login/login', 'loginname=system&pwd=b123456').then((response) => {
//   console.log(response.data)
// }).catch((responese) => {
//   console.log(responese)
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
