import Vue from "vue";
import Vuex from "vuex";
import userStore from './userStore.js'
import dogStore from './dogStore.js'
import matchStore from './matchStore.js'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {
    SOCKET_CONNECT() {
      console.log('connected to socket (from mutation)')
    },
    SOCKET_CHENAVIV() {
      console.log('chen in mutations')
    }
  },
  actions: {
    socket_chenAviv() {
      console.log('Chen Aviv!!!!')
    }
  },
  modules: {
    userStore,
    dogStore,
    matchStore
  }
})
