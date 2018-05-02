'use strict'

import myStore from './store/index.js';
import myRouter from './routes.js'
import UserMsg from './cmps/UserMsg.js'
import NavBar from './cmps/NavBar.js';


// This is needed for getting the session cookie via CORS
window.axios = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  withCredentials: true
});


new Vue({
    template: `
        <section>
                <h1 class="main-title">App App</h1>
                <nav-bar></nav-bar> 
                <user-msg></user-msg>
               <router-view></router-view>
        </section>
    `,
    created() {
        console.log('Vue App was created!!!');
        if (sessionStorage.user) {
            this.$store.commit({type: 'setUser', user: JSON.parse(sessionStorage.user)})
        }
    },
    components: {
        UserMsg,
        NavBar
    },
    router: myRouter,
    store: myStore
}).$mount('#app')