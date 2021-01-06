import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios 导入
import axios from '@/api/http'
// 需要将对应的内容挂载到 vue 的原型上, (后续每次使用的时候不必每次import)
Vue.prototype.$http = axios

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
