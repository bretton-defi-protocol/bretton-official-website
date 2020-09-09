import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/sass/index.scss'
import i18n from '@/util/i18n.js'
import web3 from '@/util/initWeb3.js'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  web3,
  render: h => h(App)
}).$mount('#app')