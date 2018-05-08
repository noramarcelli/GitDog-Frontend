import DogService from "../../services/DogService.js";

export const SAVE_LIKE = 'saveLike'
export const LOAD_NEXT_DOGS = 'loadNextDogs'

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
    },

    // addDog(state, { dog }) {
    //   state.dogs = [dog, ...state.dogs];
    // },
    // updateDog(state, { dog }) {
    //   const dogIdx = state.dogs.findIndex(currDog => currDog.id === dog.id)
    //   state.dogs.splice(bugIdx, 1, dog)
    // },

  },
  actions: {
    [LOAD_NEXT_DOGS](store, { dogId, userDogId }){
      return DogService.getNextDogs(dogId, userDogId).then(dogs => {
             store.commit({ type: 'setSelectedDog', dogs });
             console.log(' dogs',  dogs);
          });
    },

    [SAVE_LIKE](store, { dogId, userDogId, userId }){
      return DogService.addLikeToDog(dogId, userDogId, userId ).then(updatedUserDog => {
     });
    },

    findLikes(store, { userDogId }){
      return DogService.findLikes( userDogId ).then(dogs => {
      });
    },

    uploadImg(store, {imgUrl}){
      return DogService.uploadImg( imgUrl).then(dog => {
      });
    },

    saveDog(store, {dogToEdit}){
      console.log('dog inside dogStore', dogToEdit);
      
      return DogService.saveDog(dogToEdit)
      .then(dogToEdit => {
        return dogToEdit;
      })
    }

    // uploadImg(store, {imgUrl, imgIdx}){
    //   return DogService.uploadImg( imgUrl, imgIdx ).then(dog => {
    //   });
    // }
  },

  getters: {
  }
};
