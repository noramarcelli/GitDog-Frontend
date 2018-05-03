
<template>
 <div class="tinder">
  <div class="tinder--cards">
    <!-- <div> {{dogsLengthToShow}} </div> -->
    <div v-if="dog" class="tinder--card">
      <img :src="'./' + dog.imgs[0]">
       <button><i class="fa fa-info"></i></button>
      <p > {{dog.name}} {{dog.age}}</p>
      <!-- <h3>Demo card 1</h3>
      <p>This is a demo for Tinder like swipe cards</p> -->
    </div>

      <!-- <h3>demo card</h3> -->
      <!-- <div class="tinder--status">
        <i class="fa fa-remove"></i>
        <i class="fa fa-heart"></i>
      </div>  
     -->
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
  </div>

    <div class="">
      <button id="nope" @click="getNextDogs(dog._id)"><i class="fa fa-remove"></i></button>
      <button id="fav"><i class="fa fa-star"></i></button>
      <button id="love" @click="getNextDogs(dog._id)"><i class="fa fa-heart"></i></button>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //   name: 'home',
  //   components: {
  //     HelloWorld
  //   }
  //  props: ['dog']
  created() {
    // const dogId = this.$route.params.dogId;
    //this.$store.dispatch({ type: "loadDogs" });
    // this.$store.dispatch({ type: "loadDogsLength" });
    this.$store.dispatch({ type: "loadNextDogs" });
  },
  // destroyed() {
  //   this.$store.commit({ type: "setSelectedDog", dog: null });
  //   // this.router.push(`/bug/`);
  // },
  computed: {
    dog() {
      // console.log(
      //   "this.$store.state.selectedDog",
      //   this.$store.state.selectedDog
      // );
      // console.log('this', this);
      console.log('this.$store.state.selectedDog', this.$store.state.selectedDog);
      
      return this.$store.state.selectedDog;
      //  var idx = this.$store.state.selectedDogIdx;
      //  return this.$store.state.selectedDogIdx;
    }
  },

  methods: {
    // backToList() {
    //   this.$router.push(`/bug/`);
    // }

    // getNextDog(prevId){
    //   this.$store.dispatch({ type: "loadNextDog", prevId });
    // }

    getNextDogs(prevId){
      console.log('getNextDogs');
      console.log('prevId', prevId);
      
      // this.$store.dispatch({ type: "loadDogsLength" });
      this.$store.dispatch({ type: "loadNextDogs", prevId });
    }
  },

  //  computed: {
  //   dogsLengthToShow() {
  //     return this.$store.getters.dogsLength;
  //   }
  // },
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

.tinder_love .fa-heart {
  opacity: 0.7;
  transform: scale(1);
}

.tinder_nope .fa-remove {
  opacity: 0.7;
  transform: scale(1);
}

.tinder--cards {
  flex-grow: 1;
  padding-top: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
}

.tinder--card {
  font-family: "Digitalt";
  display: inline-block;
  width: 90vw;
  max-width: 400px;
  height: 70vh;
  background: #ffffff;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.3s ease-in-out;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
  -webkit-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  -moz-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
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
  margin-top: 32px;
  font-size: 32px;
  padding: 0 16px;
  pointer-events: none;
}

.tinder--card p {
  margin-top: 24px;
  font-size: 20px;
  padding: 0 16px;
  pointer-events: none;
}

. {
  flex: 0 0 100px;
  text-align: center;
  padding-top: 20px;
}

.button {
  border-radius: 50%;
  line-height: 60px;
  width: 60px;
  border: 0;
  background: #ffffff;
  display: inline-block;
  margin: 0 8px;
}

.button:focus {
  outline: 0;
}

.i {
  font-size: 32px;
  vertical-align: middle;
}

.fa-heart {
  color: #fface4;
}

.fa-remove {
  color: #cdd6dd;
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