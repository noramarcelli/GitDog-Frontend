<template>
<section v-if="loggedInUser" class="match-page">
  <h1>It's a match!!!</h1>


  <div v-if="matchedDog" class="match-container">
    <div class="profile-pics" :style="{ backgroundImage: `url(${userDog.imgs[0]})`}"></div>
    <div class="profile-pics" :style="{ backgroundImage: `url(${matchedDog.imgs[0]})`}"></div>
  </div>
  
  <p v-if="matchedDog">You and {{ matchedDog.name }} have liked each other</p>

  <button v-if="currMatch" @click="$router.push(`/msgs/${currMatch._id}`)" class="button is-danger is-rounded">Send a Message</button>
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
    currMatch() {
      return this.$store.state.matchStore.realTimeMatch;
    },
    matchedDog() {
      return this.$store.state.matchStore.matchedDog;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    }
  },
  created() {
    // console.log("matchPage created");
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
.match-container {
  display: inline-flex;
}
</style>
