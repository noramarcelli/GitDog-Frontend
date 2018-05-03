import Vue from "vue";
import Vuex from "vuex";
import DogService from "../services/DogService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogs: [],
    selectedDog: null,
    selectedDogIdx: 0
  },
  mutations: {
    // setSelectedDog(state, { dog }) {
    //   console.log("store mutation");

    //   if (dog === null) state.selectedDog = dog;
    //   else state.selectedDog = dog;
    //   console.log("state.selectedDog", state.selectedDog);
    // }

    setSelectedDog(state, { dogs }) {
      if (dogs === null) {
        state.selectedDogIdx = 0;
      }
      else {
        state.selectedDogIdx = state.selectedDogIdx++;
      }
      state.selectedDog = dogs[state.selectedDogIdx];

      //  if (dogs === null){
      //    state.selectedDogIdx = 0;

      //  } else{
      //    state.selectedDogIdx = state.selectedDogIdx++;
      //  } 

      // console.log("store mutation");

      // if (dog === null) state.selectedDog = dog;
      // else state.selectedDog = dog;
      // console.log("state.selectedDog", state.selectedDog);
    }
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

    // loadDogs(){

    //     console.log("Loading Bugs", store.state);
    //     return BugService.getBugs(store.state.queryObj).then( bugs => {
    //       store.commit({ type: "setBugs", bugs });
    //     })
    //   },

    // loadNextDog(store, { prevId }) {
    //   return DogService.getNextDog(prevId).then(dog => {
    //     store.commit({ type: "setSelectedDog", dog });
    //   });
    // }

    loadNextDogs(store, { prevId }){
      state.selectedDogIdx = 0;
      console.log('loadNextDogs');
      
      return DogService.getNextDogs(prevId).then(dogs => {
            store.commit({ type: "setSelectedDog", dogs });
            // console.log(' dogs',  dogs);
            
          });
    }
  }
});
