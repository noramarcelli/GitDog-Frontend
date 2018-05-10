// import UserService from "../../services/UserService.js";
import DogService from "../../services/DogService.js";
import MatchService from "../../services/MatchService.js";

// export const LOGIN = 'login'
// export const LOAD_USER_DOG = 'loadUserDog'

export default {
  state: {
    realTimeMatch: null,
    matchedDog: null,
    matches: [],
    filterBy: {}
  },
  mutations: {
    SOCKET_MATCHED(state, match)  {
      state.realTimeMatch = match;
      console.log("state.realTimeMatch", state.realTimeMatch);
    },
    // SOCKET_NEWMSG({matches}, [{msg, matchId}]) {
    SOCKET_NEWMSG({matches}, {msg, matchId}) {
      console.log('inside SOCKET_NEWMSG')
      let match = matches.find(match => match._id === matchId)
      match.messages.push(msg);
    },
    setMatchedDog(state, { dog }) {
      state.matchedDog = dog;
    },
    setDogMatches(state, { filteredMatches }) {
      state.matches = filteredMatches;
      console.log("state.matches", state.matches);
    },
    setFilterBy(state, { filterBy }){
        state.filterBy = filterBy;
        console.log('filterBy inside matchState mutation', filterBy);
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
          console.log("otherDogId", otherDogId);

          return DogService.getDogById(otherDogId).then(dog => {
            console.log("dog", dog);
            match.dog = dog;
            return match;
          });

          console.log("match.dog", match.dog);
        });

        return Promise.all(joinedMatchesPrms).then(joinedMatches => {
          var filteredMatches = [];
          console.log('store.state.filterBy inside getDogMatches', store.state.filterBy);
          

          if (store.state.filterBy && store.state.filterBy.name) {
            joinedMatches.forEach(joinedMatch => {
              if (joinedMatch.dog.name.toLowerCase().includes(store.state.filterBy.name.toLowerCase())) {
                filteredMatches.push(joinedMatch);
              }
              // return joinedMatch;
            });
          } else {
            filteredMatches = [...joinedMatches];
          }
          console.log('filteredMatches', filteredMatches);
          
          store.commit({ type: "setDogMatches", filteredMatches });
        });
      });
    },

    setFilter(store, { filterBy }){
      store.commit({ type: "setFilterBy", filterBy });
    }
  },

  getters: {
    currMsgs(state) {
      return matchId => {
        let currMatch = state.matches.find(match => matchId === match._id);
        console.log({currMatch, matchId})
        if (!currMatch) return [];
        return currMatch.messages;
      };
    }
  }
};
