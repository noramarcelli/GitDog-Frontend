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
    },
    SOCKET_CHENAVIV() {
    }
  },
  actions: {
    socket_chenAviv() {
    }
  },
  modules: {
    userStore,
    dogStore,
    matchStore
  }
})
