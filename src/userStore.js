// import Vue from "vue";
// import Vuex from "vuex";
import UserService from "../services/UserService.js";
import DogService from "../services/DogService.js";

// Vue.use(Vuex);

export default{
  state: {
    loggedinUser: null,
    userDog : null
  },
  mutations: {
    setUser(state, {user}) {
      state.loggedinUser = user;
    //   console.log('state.loggedinUser', state.loggedinUser);
    },
    setUserDog(state, { dog }) {
        state.userDog = dog;
      },
  },
  actions: {
    login(store, {userCredentials}) {
      return UserService.login(userCredentials)
      .then(user =>{
        store.commit({type: 'setUser', user});
      })
    },
     loadUserDog(store, { dogId }) {
      console.log("store action");
      return DogService.getDogById(dogId)
        .then(dog => {
          store.commit({ type: "setUserDog", dog });
          console.log("dog in loadDog", dog);

          return dog;
        })
        .catch(err => console.log(err));
    },
  },

  getters: {
    loggedInUserForDisplay(state) {
      console.log('state.loggedInUser', state.loggedinUser)
      return state.loggedinUser;
    },
     userDog(state){
      return state.userDog
      ? state.userDog
      : {};
    }
  }
};
