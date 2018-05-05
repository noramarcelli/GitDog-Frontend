import DogService from "../services/DogService.js";


export default{
  state: {
    selectedDog: null,
    selectedDogIdx: 0
  },
  mutations: {
    setSelectedDog(state, { dogs }) {
      console.log('inside setSelectedDog');
      if (dogs === null) {
        state.selectedDogIdx = 0;
      }
      else {
        state.selectedDogIdx = state.selectedDogIdx++;
      }
      state.selectedDog = dogs[state.selectedDogIdx];
      console.log('state.selectedDog', state.selectedDog);
    }
  },
  actions: {
    loadNextDogs(store, { prevId, userDogId }){
      console.log('loadNextDogs');
      console.log('prevId', prevId);
      console.log('userDogId', userDogId);
      
      
      return DogService.getNextDogs(prevId, userDogId).then(dogs => {
             store.commit({ type: "setSelectedDog", dogs });
             console.log(' dogs',  dogs);
          });
    }
  },

  getters: {
  }
};
