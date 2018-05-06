import Vue from "vue";
import Vuex from "vuex";
import userStore from './userStore.js'
import dogStore from './dogStore.js'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    userStore,
    dogStore
  }
})
