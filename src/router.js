import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'

import Login from './views/LoginPage.vue'
import Register from './views/RegisterPage.vue'
import Msgs from './views/MsgsPage.vue'
import Chat from './views/ChatPage.vue'
import Profile from './views/ProfilePage.vue'
import Edit from './views/EditPage.vue'
import Prefs from './views/PrefsPage.vue'
import Match from './views/MatchPage.vue'
import DogPreview from './views/DogPreviewPage.vue'

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
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/prefs',
      name: 'prefs',
      component: Prefs
    },
    {
      path: '/msgs',
      name: 'msgs',
      component: Msgs
    },
    {
      path: '/chat/:dogId',
      name: 'chat',
      component: Chat
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },

    {
      path: '/match',
      name: 'match',
      component: Match
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
    }
  ]
})
