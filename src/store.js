import Vue from "vue";
import Vuex from "vuex";
import DogService from "../services/DogService.js";
import UserService from "../services/UserService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedDog: null,
    selectedDogIdx: 0,
    loggedinUser: null,
    userDog : null
  },
  mutations: {
    setSelectedDog(state, { dogs }) {
      if (dogs === null) {
        state.selectedDogIdx = 0;
      }
      else {
        state.selectedDogIdx = state.selectedDogIdx++;
      }
      state.selectedDog = dogs[state.selectedDogIdx];
    },
    setDogsLength(state, {length}){
        state.dogsLength = length;
    },
    setUser(state, {user}) {
      state.loggedinUser = user;
      console.log('state.loggedinUser', state.loggedinUser);
      
    },
    setUserDog(state, { dog }) {
      // if (dogs === null) {
      //   state.selectedDogIdx = 0;
      // }
      // else {
      //   state.userDog = state.selectedDogIdx++;
      // }
      state.userDog = dog;
    },
  },
  actions: {
    loadDog(store, { dogId }) {
      console.log("store action");
      return DogService.getDogById(dogId)
        .then(dog => {
          store.commit({ type: "setSelectedDog", dog });
          console.log("dog in loadDog", dog);

          return dog;
        })
        .catch(err => console.log(err));
    },
    loadNextDogs(store, { prevId }){
      console.log('loadNextDogs');
      
      return DogService.getNextDogs(prevId).then(dogs => {
             store.commit({ type: "setSelectedDog", dogs });
             console.log(' dogs',  dogs);
          });
    },
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

  
});
