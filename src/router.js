import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'

import Login from './views/LoginPage.vue'
import Register from './views/RegisterPage.vue'
// import Edit from './views/EditPage.vue'
// import Msg from './views/MsgPage.vue'
// import Pref from './views/PrefPage.vue'
// import Msg from './views/MsgPage.vue'
// import Chat from './views/ChatPage.vue'
import Profile from './views/ProfilePage.vue'
// import Match from './views/MatchPage.vue'
import DogPreview from './views/DogPreviewPage.vue'
// import DogDetails from './views/DogDetailsPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // {
    //   path: '/edit',
    //   name: 'edit',
    //   component: Edit
    // },
    // {
    //   path: '/msg',
    //   name: 'msg',
    //   component: Msg
    // },
    // {
    //   path: '/pref',
    //   name: 'pref',
    //   component: Pref
    // },
    // {
    //   path: '/chat/:dogId',
    //   name: 'chat',
    //   component: Chat
    // },
    {
      path: '/user',
      name: 'profile',
      component: Profile
    },
    // {
    //   path: '/user/:userId/:matchId',
    //   name: 'match',
    //   component: Match
    // },
    {
      path: '/swipe',
      name: 'dogpreview',
      component: DogPreview
    },
    // {
    //   path: '/dog/details/:dogId',
    //   name: 'dogdetails',
    //   component: DogDetails
    // }
  ]
})
