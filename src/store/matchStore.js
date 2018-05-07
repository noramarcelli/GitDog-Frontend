// import UserService from "../../services/UserService.js";
import DogService from "../../services/DogService.js";

// export const LOGIN = 'login'
// export const LOAD_USER_DOG = 'loadUserDog'

export default {
  state: {
    realTimeMatch: null,
    matchedDog: null
  },
  mutations: {
    SOCKET_MATCHED: (state, match ) => {
        state.realTimeMatch = match;
        console.log('state.realTimeMatch', state.realTimeMatch);
    },
    setMatchedDog(state, {dog}) {
      state.matchedDog = dog;
    }
  },
  actions: {
    socket_matched(store, match) {
      let ownDogId = store.getters.userDog._id;
      let otherDogId = (match.firstDogId === ownDogId)? match.secondDogId : match.firstDogId;
      return DogService.getDogById(otherDogId)
      .then(dog => {
        store.commit({ type: 'setMatchedDog', dog });
        // console.log(' dogs',  dogs);
     });
    }
  },

  getters: {
   
  }
};
