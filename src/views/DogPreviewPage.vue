<template>
  <div class="tinder">
    <div class="tinder--cards">
      <div v-if="currDog" class="tinder--card">
        
      <!-- <v-layout
            v-touch="{
              left: () => swipe('left'),
              right: () => swipe('right')
            }"
            column
            align-center
            justify-center
            style="height: 500px"
            class="grey lighten-2"
          >
            <v-subheader>Swipe Direction</v-subheader>
            {{ swipeDirection }} -->
        

        <dog-carousel :dog="currDog"></dog-carousel>
        <span @click="showDetails">
                <i class="fa card-control" :class="{'fa fa-info' : !shouldShow, 'fa fa-arrow-down' : shouldShow }"></i>
        </span>
        <p class="dog"> {{currDog.name}}, {{currDog.age}} </p>
        
        <dog-details class="dog-info" :dog="currDog" v-if="shouldShow" />

        <!-- </v-layout> -->
      </div>
    </div>

    <div class="tinder--buttons">
      <button id="nope" @click="getNextDogs(currDog._id)"><i class="fa fa-remove"></i></button>
      <button id="fav"><i class="fa fa-star"></i></button>
      <button id="love" @click="getNextDogs(currDog._id, currDog.userId)"><i class="fa fa-heart"></i></button>
    </div>
  </div>

  
</template>

<script>
import DogDetails from "../components/DogDetails.vue";
import DogCarousel from "../components/DogCarousel.vue";
import { SAVE_LIKE } from "../store/dogStore.js";
import { LOAD_NEXT_DOGS } from "../store/dogStore.js";
import { LOAD_USER_DOG } from "../store/userStore.js";

export default {
  name: "dog-preview",
  components: {
    DogDetails,
    DogCarousel
  },
  data() {
    return {
      shouldShow: false,
      swipeDirection: 'None'
    };
    
  },

  created() {
    var user = this.loggedInUser;

    if (this.loggedInUser !== null) {
      this.$store.dispatch({type: 'moveCurrentDog'});
      // var dogId = this.loggedInUser.dogId;
      // console.log("dogId", dogId);

      // this.$store.dispatch({ type: LOAD_USER_DOG, dogId }).then(() => {
      //   console.log("this.$store.state.userDog", this.$store.state.userDog);
      // });
      // this.$store.dispatch({
      //   type: LOAD_NEXT_DOGS,
      //   prevId: "",
      //   userDogId: dogId
      // });
    }
  },

  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },
    currDog() {
      return this.$store.getters.currentDog;
    },
    userDog() {
      return this.$store.state.userStore.userDog;
    }
  },
  methods: {
    getNextDogs(dogId, dogUserId) {
      var userDogId = this.$store.getters.userDogId;
      // var userDogId = this.userDog._id;
      // this.$store.dispatch({ type: LOAD_NEXT_DOGS, dogId, userDogId });
      // disptach moveCurrentDog
      this.$store.dispatch({type: 'moveCurrentDog'});      
      if (dogUserId) {
        var userId = this.loggedInUser._id;
        console.log("userId inside getNextDogs", userId);

        this.$socket.emit("likedDog", { dogId, dogUserId, userDogId, userId });
        // this.$store.dispatch({ type: SAVE_LIKE, dogId, userDogId, userId });

        
      }
    },
    showDetails() {
      this.shouldShow = !this.shouldShow;
    },
    swipe(direction) {
        console.log('got swipr direction', direction)
        // this.swipeDirection = direction
        (direction === "left")? this.getNextDogs(this.currDog._id) : this.getNextDogs(this.currDog._id, this.currDog.userId);
     }
  },
  sockets: {
    matched() {
      this.$router.push("/match");
    }
  },

  components: {
    DogDetails,
    DogCarousel
  }
};
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 2px;
  margin: 0;
}
body {
  background: #ccfbfe;
  /* overflow: hidden; */
  font-family: sans-serif;
}
.tinder {
  width: 100vw;
  height: calc(100vh - 100px);
  top: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}
.loaded.tinder {
  opacity: 1;
}
.tinder--status {
  position: absolute;
  top: 50%;
  margin-top: -30px;
  z-index: 2;
  width: 100%;
  text-align: center;
  pointer-events: none;
}
.tinder--status i {
  font-size: 100px;
  opacity: 0;
  transform: scale(0.3);
  transition: all 0.2s ease-in-out;
  position: absolute;
  width: 100px;
  margin-left: -50px;
}
.tinder_love .fa-heart,
.info,
.fav {
  opacity: 0.7;
  transform: scale(1);
}
/* .tinder_nope .fa-remov, .info, .fav {
  opacity: 0.7;
  transform: scale(1);
} */
.tinder--cards {
  text-align: center;
  font-family: "BiggerLove";
}
.tinder--card {
  font-family: "Digitalt";
  display: inline-block;
  width: 100%;
  max-width: 400px;
  background: #ffffff;
  padding-bottom: 5px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  /* cursor: -webkit-grab;
  cursor: -moz-grab; */
  cursor: pointer;
  -webkit-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  -moz-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  line-height: 1.5em;
  position: relative;
}
.moving.tinder--card {
  transition: none;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}
.tinder--card img {
  max-width: 100%;
  pointer-events: none;
}
.tinder--card h3 {
  /* margin-top: 32px; */
  font-size: 32px;
  padding: 0 5px;
  pointer-events: none;
}
.tinder--card p {
  margin-top: 2px;
  /* font-size: 20px; */
  padding: 0 2px;
  pointer-events: none;
  margin-bottom: 10px;
}
.tinder--buttons {
  flex: 0 0 100px;
  text-align: center;
  padding-top: 40px;
}
.tinder--buttons button {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 0;
  background: #ffffff;
  display: inline-block;
  margin: 10px 10px;
  cursor: pointer;
}
.tinder--buttons button:focus {
  outline: 0;
}
.tinder--buttons i {
  font-size: 32px;
  vertical-align: middle;
  cursor: pointer;
}
.fa-heart {
  color: red;
}
.fa-remove {
  color: grey;
}
.info {
  left: 200px;
  position: absolute;
  z-index: 2;
}
i {
  font-size: 3rem;
  color: red;
}
.dog {
  font-family: "CutiePatootie";
  font-weight: bold;
  font-size: 2.5em;
}
.dog-info {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.61);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-control {
  box-sizing: border-box;
  padding: 2px;
  margin: 0;
  color: white;
  background: red;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  z-index: 10;
  position: absolute;
  bottom: 35px;
  right: 20px;
}
</style>
