import DogService from "../../services/DogService.js";

export const SAVE_LIKE = 'saveLike'
export const LOAD_NEXT_DOGS = 'loadNextDogs'

export default{
  state: {
    selectedDog: null,
    selectedDogIdx: 0,
    filterBy: {}
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

    setFilterBy(state, { filterBy }){
        console.log('filterBy inside mutation setFilterBy', filterBy);
        state.filterBy = filterBy;
        console.log('state.filterBy', state.filterBy);
        
    }


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
      return DogService.getNextDogs(dogId, userDogId, store.state.filterBy).then(dogs => {
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
      // console.log('userDog', dog);
      console.log('imgUrl in uploadImage in dogStore', imgUrl);
      
      return DogService.uploadImg( imgUrl ).then(res => {
        console.log('res in uploadImg in dogStore', res);
        // dog.imgs[idx] = imgUrl;
          return res;
      });
    },

    saveDog(store, {dogToEdit}){
      console.log('dog inside dogStore', dogToEdit);
      
      return DogService.saveDog(dogToEdit)
      .then(dogToEdit => {
        return dogToEdit;
      })
    },

    setFilter(store, {filterBy}){
        console.log('filterBy inside dogStore', filterBy);
        // state.filterBy = filterBy;
        store.commit({ type: 'setFilterBy', filterBy });
    }

    // uploadImg(store, {imgUrl, imgIdx}){
    //   return DogService.uploadImg( imgUrl, imgIdx ).then(dog => {
    //   });
    // }
  },

  getters: {
  }
};
