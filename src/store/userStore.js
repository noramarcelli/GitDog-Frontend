import UserService from "../../services/UserService.js";
import DogService from "../../services/DogService.js";

export const LOGIN = 'login'
export const LOAD_USER_DOG = 'loadUserDog'

export default{
  state: {
    loggedinUser: null,
    userDog : null
  },
  mutations: {
    setUser(state, {user}) {
      state.loggedinUser = user;
    //   console.log('state.loggedinUser', state.loggedinUser);
    },
    setUserDog(state, { dog }) {
        state.userDog = dog;
      },
  },
  actions: {
    [LOGIN](store, {userCredentials}) {
      return UserService.login(userCredentials)
      .then(user =>{
        store.commit({type: 'setUser', user});
      })
    },
    [LOAD_USER_DOG](store, { dogId }) {
      console.log('store action');
      return DogService.getDogById(dogId)
        .then(dog => {
          store.commit({ type: 'setUserDog', dog });
          console.log('dog in loadDog', dog);

          return dog;
        })
        .catch(err => console.log(err));
    },
  },

  getters: {
    loggedInUserForDisplay(state) {
      console.log('state.loggedInUser', state.loggedinUser)
      return state.loggedinUser;
    },
     userDog(state){
      return state.userDog
      ? state.userDog
      : {};
    }
  }
};
