<template>
<section class="match-page">
  <h1>It's a match!!!</h1>

  <!-- <img :src="'./' + dog.imgs[0]">
  <img :src="'./' + dog.imgs[1]"> -->
  <img v-if="userDog.imgs[0]" class="profile-pics" :src="userDog.imgs[0]" >
  <img v-if="matchedDog.imgs[0]" class="profile-pics" :src="matchedDog.imgs[0]" >
  <!-- <img class="profile-pics" src="../../public/img/dogs/donna_1.jpeg" >
  <img class="profile-pics" src="../../public/img/dogs/charly_1.jpeg" > -->
  
  <p>You and MATCH-NAME have liked each other</p>

  <button @click="$router.push('/msgs')" class="button is-danger is-rounded">Send a Massage</button>
  <br>
  <button @click="$router.push('./swipe')" class="button is-danger is-rounded">Keep Playing</button>
</section>    
</template>

<script>

export default {
  computed: {
    userDog() {
      return this.$store.getters.userDog;
    },

    matchedDog(){
      return this.$store.state.matchStore.matchedDog;
    }
  },
  created(){
    console.log('matchPage created');
  }
};
</script>


<style>
.match-page {
  font-weight: bold;
  /* color: black; */
}
h1 {
  font-family: "SweetHipster";
  font-size: 4.5em;
  line-height: normal !important;
  margin: 0px !important;
  padding: 0px !important;
}
p {
  font-family: "BiggerLove";
  font-size: 0.8em;
}
</style>
