
<template>
 <div class="tinder">
  <div class="tinder--status">
    <i class="fa fa-remove"></i>
    <i class="fa fa-heart"></i>
  </div>

  <div class="tinder--cards">
    <div v-if="dog" class="tinder--card">
      <img :src="'./' + dog.imgs[0]">
      <p > {{dog.name}} {{dog.age}}</p>
      <!-- <h3>Demo card 1</h3>
      <p>This is a demo for Tinder like swipe cards</p> -->
    </div>


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

  <div class="tinder--buttons">
    <button id="nope" @click="getNextDogs(dog._id)">not<i class="fa fa-remove"></i></button>
    <button id="love" @click="getNextDogs(dog._id)">yes!<i class="fa fa-heart"></i></button>
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
      console.log('this', this);
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
      
      this.$store.dispatch({ type: "loadNextDogs", prevId });
    }
  }
};
</script>