import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/fonts/NotoSansKR/stylesheet.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Detail from './layouts/Detail.vue'
import Default from './layouts/Default.vue'
import Style from './assets/styles/app.scss'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.component('default_layout', Default)
Vue.component('detail_layout', Detail)

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#4bb4e7',
    secondary: '#03a9f4',
    accent: '#0277bd',
    error: '#f00',
    dark: '#363636'
  }
})
Vue.use(VueAwesomeSwiper)
Vue.use(Style)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
