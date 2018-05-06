import DogService from "../services/DogService.js";

export const SAVE_LIKE = 'saveLike'
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
      return DogService.getNextDogs(prevId, userDogId).then(dogs => {
             store.commit({ type: "setSelectedDog", dogs });
             console.log(' dogs',  dogs);
          });
    },

    [SAVE_LIKE](store, { prevId, userDogId }){
      return DogService.addLikeToDog(prevId, userDogId ).then(updatedUserDog => {


        // return DogService.().then(updatedUserDog => {

        // });

        // store.commit({ type: "setSelectedDog", dogs });
        // console.log(' dogs',  dogs);
     });
    },

    findLikes(store, { userDogId }){
        
    }
  },

  getters: {
  }
};
