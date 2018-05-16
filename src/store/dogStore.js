import DogService from "../../services/DogService.js";
import UserService from "../../services/UserService.js";

export const SAVE_LIKE = "saveLike";
export const LOAD_NEXT_DOGS = "loadNextDogs";

export default {
  state: {
    selectedDog: null,
    selectedDogIdx: 0,
    filterBy: {},
    dogs: []
    // times: 0,
    // fromDog: null
  },
  getters: {
    currentDog: ({ dogs, selectedDogIdx }) => dogs[selectedDogIdx],
    // fromDog(state){
    //   return state.fromDog 
    // }
  },
  mutations: {
    // incTimes(state){
    //   state.times++
    // },
    setDogs(state, { dogs }) {
      state.selectedDogIdx = 0;
      state.dogs = dogs;
    },
    moveCurrentDog(state) {
      state.selectedDogIdx++;
    },

    setSelectedDog(state, { dogs }) {
      if (dogs === null) {
        state.selectedDogIdx = 0;
      } else {
        state.selectedDogIdx = state.selectedDogIdx++;
      }
      state.selectedDog = dogs[state.selectedDogIdx];
    },

    setSettingsFilter(state, { filterBy }) {
      state.filterBy.cities = filterBy.cities;
      state.filterBy.weightGroups = filterBy.weightGroups;
      console.log(' state.filterBy ',  state.filterBy);
    }
  },
  actions: {
    // moveCurrentDog({state, getters, commit}) {
    //   if(state.dogs.length === 0) {
    //     return DogService.getNextDogs( undefined, getters.userDogId)
    //     .then(dogs => {
    //       // if(this.state.filterBy && this.state.filterBy.cities && this.state.filterBy.weightGroups){

    //       // }

    //       // if (joinedMatch.dog.name.toLowerCase().includes(store.state.filterBy.name.toLowerCase())) {
    //       //   filteredMatches.push(joinedMatch);
    //       // }
    //       commit({type:'setDogs',dogs})
    //     });      
    //   }
    //   if (state.selectedDogIdx === state.dogs.length - 1 ) {
    //     return DogService.getNextDogs(getters.currentDog._id, getters.userDogId)
    //     .then(dogs => {
    //       // if (dogs.length === 0) console.log(dogs)
    //       // if(dogs === 'no dogs') console.log(dogs)
    //       if(dogs === 'no dogs') {
    //         return DogService.getNextDogs( undefined, getters.userDogId)
    //         .then(dogs => {
    //           commit({type:'setDogs',dogs})
    //         });   
    //       }
    //       else commit({type:'setDogs',dogs})
    //     });
    //   } 
    //   commit('moveCurrentDog')
    //   return Promise.resolve()
    // },

    moveCurrentDog({state, getters, commit}) {
      if(state.dogs.length === 0) {
        return DogService.getNextDogs( undefined, getters.userDogId)
        .then(dogs => {
          commit({type:'setDogs',dogs})
        });      
      }
      if (state.selectedDogIdx === state.dogs.length - 1 ) {
        return DogService.getNextDogs(getters.currentDog._id, getters.userDogId)
        .then(dogs => {
          // if (dogs.length === 0) console.log(dogs)
          // if(dogs === 'no dogs') console.log(dogs)
          if(dogs === 'no dogs') {
            return DogService.getNextDogs( undefined, getters.userDogId)
            .then(dogs => {
              commit({type:'setDogs',dogs})
            });   
          }
          else commit({type:'setDogs',dogs})
        });
      } 
      commit('moveCurrentDog')
      return Promise.resolve()
    },


    [LOAD_NEXT_DOGS](store, { dogId, userDogId }) {
      return DogService.getNextDogs(
        dogId,
        userDogId,
        store.state.filterBy
      ).then(dogs => {
        store.commit({ type: "setSelectedDog", dogs });
      });
    },

    [SAVE_LIKE](store, { dogId, userDogId, userId }) {
      return DogService.addLikeToDog(dogId, userDogId, userId).then(
        updatedUserDog => {}
      );
    },

    findLikes(store, { userDogId }) {
      return DogService.findLikes(userDogId).then(dogs => {});
    },

    uploadImg(store, { imgUrl }) {
      // console.log('userDog', dog);
      // console.log("imgUrl in uploadImage in dogStore", imgUrl);

      return DogService.uploadImg(imgUrl).then(res => {
        // console.log("res in uploadImg in dogStore", res);
        // dog.imgs[idx] = imgUrl;
        return res;
      });
    },

    saveDog(store, { dogToEdit }) {
      // console.log("dog inside dogStore", dogToEdit);
      return DogService.saveDog(dogToEdit).then(dogToEdit => {
        return dogToEdit;
      });
    }
  }
};
