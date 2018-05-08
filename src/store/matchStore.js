// import UserService from "../../services/UserService.js";
import DogService from "../../services/DogService.js";
import MatchService from "../../services/MatchService.js";

// export const LOGIN = 'login'
// export const LOAD_USER_DOG = 'loadUserDog'

export default {
  state: {
    realTimeMatch: null,
    matchedDog: null,
    matches: []
  },
  mutations: {
    SOCKET_MATCHED: (state, match) => {
      state.realTimeMatch = match;
      console.log("state.realTimeMatch", state.realTimeMatch);
    },
    setMatchedDog(state, { dog }) {
      state.matchedDog = dog;
    },
    setDogMatches(state, { matches }) {
      state.matches = matches;
      console.log("state.matches", state.matches);
    }
  },
  actions: {
    socket_matched(store, match) {
      let ownDogId = store.getters.userDog._id;
      let otherDogId =
        match.firstDogId === ownDogId ? match.secondDogId : match.firstDogId;
      return DogService.getDogById(otherDogId).then(dog => {
        store.commit({ type: "setMatchedDog", dog });
        // console.log(' dogs',  dogs);
      });
    },
    getDogMatches(store, { dogId }) {
      console.log("userDogId in getDogMatches", dogId);
      // let matchedDogs = [];

      return MatchService.getDogMatches(dogId).then(matches => {
        console.log("matches", matches);

       matches.map(function(match) {
          let otherDogId =
            match.firstDogId === dogId ? match.secondDogId : match.firstDogId;
          console.log('otherDogId', otherDogId);

          
          
          return DogService.getDogById(otherDogId).then(dog => {
            console.log('dog', dog);
             match.dog = dog;
          });

             console.log('match.dog', match.dog);
        });

        store.commit({ type: 'setDogMatches', matches });
      });
    }
  },

  getters: {}
};
