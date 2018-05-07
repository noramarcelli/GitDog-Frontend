// import UserService from "../../services/UserService.js";
// import DogService from "../../services/DogService.js";

// export const LOGIN = 'login'
// export const LOAD_USER_DOG = 'loadUserDog'

export default {
  state: {
    realTimeMatch: null
  },
  mutations: {
    SOCKET_MATCHED: (state, match ) => {
        state.realTimeMatch = match;
        console.log('state.realTimeMatch', state.realTimeMatch);
    }
  },
  actions: {
    socket_matched(store, match) {
        console.log('We have a match!')
        console.log({match})
        // store.commit({});
    }
  },

  getters: {
   
  }
};
