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
    setDogMatches(state, { joinedMatches }) {
      state.matches = joinedMatches;
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

      MatchService.getDogMatches(dogId).then(matches => {
        console.log("matches", matches);

      let joinedMatchesPrms = matches.map(function(match) {
          let otherDogId =
            match.firstDogId === dogId ? match.secondDogId : match.firstDogId;
          console.log('otherDogId', otherDogId);

          
          
          return DogService.getDogById(otherDogId).then(dog => {
            console.log('dog', dog);
             match.dog = dog;
             return match;
          });

             console.log('match.dog', match.dog);
        });

        return Promise.all(joinedMatchesPrms)
                .then(joinedMatches => {
                  store.commit({ type: 'setDogMatches', joinedMatches });
                })

      });
    }
  },

  getters: {
    
    currMsgs(state) {
      return matchId => {
        let currMatch = state.matches.find(match => matchId === match._id);
        if (!currMatch) return [];
        return currMatch.messages;
      }
    }
  }
};
