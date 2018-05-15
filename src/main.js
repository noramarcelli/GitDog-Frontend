import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import store from './store/store.js'
import Bulma from 'bulma' 
import './registerServiceWorker'
import VueCarousel from 'vue-carousel';
import socketio from 'socket.io-client'
import VueSocketio from 'vue-socket.io';
import Vuetify from 'vuetify';
import swal from 'sweetalert';
import VueSweetAlert from 'vue-sweetalert'

import 'vuetify/dist/vuetify.min.css'

const BASE_URL = (process.env.NODE_ENV === 'development')? '//localhost:3000' : '';

Vue.use(Vuetify)

Vue.use(VueSocketio, BASE_URL + '/', store);
Vue.use(VueSweetAlert);


// import swipe from '../css/swipe.css';
import app from '../css/app.css';
import 'bulma/css/bulma.css'
// import FontAwsome from 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
// import FontAwsome from "https://use.fontawesome.com/releases/v5.0.10/css/all.css";
Vue.use(VueCarousel);
// Vue.use(VTouch, {name: 'move'});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // sockets: {
  //   connect() {
  //     console.log('connected to socket')
  //   }
  // },
  render: h => h(App)
}).$mount('#app')
