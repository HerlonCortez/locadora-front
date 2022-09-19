import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import './config/swal'


//require('axios').defaults.headers.common['Authorization'] = 'Bearer cb734157-e2c5-4a4f-a789-aeb10286331f'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')