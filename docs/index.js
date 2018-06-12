import Vue from 'vue'
import Idola from '../src'
import App from './App'
import router from './router'

import './styles/main'
import '../src/themes'

Vue.use(Idola)

new Vue({
  router,
  ...App
}).$mount('#app')
