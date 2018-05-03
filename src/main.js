import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bulma from 'bulma' 
import './registerServiceWorker'

import swipe from '../css/swipe.css';
import app from '../css/app.css';
import 'bulma/css/bulma.css'
// import FontAwsome from 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
// import FontAwsome from "https://use.fontawesome.com/releases/v5.0.10/css/all.css";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
