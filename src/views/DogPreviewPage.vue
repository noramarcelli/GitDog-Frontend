<template>
  <div class="tinder">
    <div class="tinder--cards">
      <div v-if="currDog" class="tinder--card">
        
        <!-- COMPONENT OF IMAGES COURUSELE  -->
        <dog-carousel :dog="currDog"></dog-carousel>
        <!-- <img :src="'./' + currDog.imgs[0]"/> -->

        <span @click="showDetails">
                <i class="fa" :class="{'fa-info-circle' : !shouldShow, 'fa-arrow-circle-down' : shouldShow }"></i>
        </span>
        <p class="dog"> {{currDog.name}}, {{currDog.age}} </p>
        <dog-details :dog="currDog" v-if="shouldShow" />
      </div>
    </div>


    <div class="tinder--buttons">
      <button id="nope" @click="getNextDogs(currDog._id, false)"><i class="fa fa-remove"></i></button>
      <button id="fav"><i class="fa fa-star"></i></button>
      <button id="love" @click="getNextDogs(currDog._id, true)"><i class="fa fa-heart"></i></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DogDetails from '../components/DogDetails.vue';
import DogCarousel from '../components/DogCarousel.vue'
import {SAVE_LIKE} from '../store/dogStore.js'
import {LOAD_NEXT_DOGS} from '../store/dogStore.js'
import {LOAD_USER_DOG} from '../store/userStore.js'

export default {
  name: 'dog-preview',
  components: {
    DogDetails,
    DogCarousel
  },
  data() {
    return {
      shouldShow: false
    };
  },

  created() {
    var user = this.loggedInUser;

    if (this.loggedInUser !== null) {
      var dogId = this.loggedInUser.dogId;
      console.log('dogId', dogId);

      this.$store.dispatch({ type: LOAD_USER_DOG, dogId }).then(() => {
        console.log('this.$store.state.userDog', this.$store.state.userDog);
      });
      this.$store.dispatch({
        type: LOAD_NEXT_DOGS,
        prevId: '',
        userDogId: dogId
      });
    }
  },

  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },
    currDog() {
      return this.$store.state.dogStore.selectedDog;
    },
    userDog() {
      return this.$store.state.userStore.userDog;
    }
  },
  methods: {
    getNextDogs(dogId, isLiked) {
      var userDogId = this.userDog._id;
      this.$store.dispatch({ type: LOAD_NEXT_DOGS, dogId, userDogId });
      if (isLiked) {
        this.$store.dispatch({ type: SAVE_LIKE, dogId, userDogId });
        // this.$store.dispatch({ type: "findLikes", userDogId });
      }
    },
    showDetails() {
      this.shouldShow = !this.shouldShow;
    }
  },

  components: {
     DogDetails,
     DogCarousel
  }
};
</script>


<style scoped>
/* SWIPING */

/* FOR LOGO NAME */
/* @font-face {
    font-family: "Digitalt";
    src: url(../../../fonts/Digitalt.ttf);
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
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
  flex-grow: 1;
  padding-top: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  font-family: "BiggerLove";
}

.tinder--card {
  font-family: "Digitalt";
  display: inline-block;
  width: 90vw;
  max-width: 400px;
  height: 70vh;
  background: #ffffff;
  padding-bottom: 5px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.3s ease-in-out;
  /* cursor: -webkit-grab;
  cursor: -moz-grab; */
  cursor: pointer;
  -webkit-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  -moz-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  line-height: 1.5em;
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
}

.tinder--buttons {
  flex: 0 0 100px;
  text-align: center;
  padding-top: 10px;
}

.tinder--buttons button {
  border-radius: 50%;
  line-height: 60px;
  width: 60px;
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
}

/* .red {
  background-color: red;
} */
i {
  font-size: 3em;
  color: red;
}
.dog {
   font-family: "CutiePatootie";
   font-weight: bold;
   font-size: 2.5em;
}
</style>


   <!-- <div class="tinder--card">
      <img src="https://placeimg.com/600/300/people">
      <h3>Demo card 1</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="https://placeimg.com/600/300/animals">
      <h3>Demo card 2</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="https://placeimg.com/600/300/nature">
      <h3>Demo card 3</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="https://placeimg.com/600/300/tech">
      <h3>Demo card 4</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div>
    <div class="tinder--card">
      <img src="https://placeimg.com/600/300/arch">
      <h3>Demo card 5</h3>
      <p>This is a demo for Tinder like swipe cards</p>
    </div> -->