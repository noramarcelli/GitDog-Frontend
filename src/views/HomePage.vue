<template>
<section class="home">
  <p>Swipe to your Love's Tail...</p>
  <router-link to="/login">Log In</router-link> |
  <router-link to="/register">Register</router-link>
  <!-- <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to the temp profile page"/>
  </div> -->
  <footer></footer>
  </section>    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
.home {
    font-family: "Digitalt";
    /* font-weight: bold; */
    font-size: 25px;
    padding: 2px;
    letter-spacing: 1px;
    color: black;
}
p {
  font-size: 4em; 
  font-family: "SweetHipster";
  font-weight: bold;
}
.home footer {
  background-image: url("../../public/img/bgrd/dog-treats.png");
  background-repeat: no-repeat;
  height: 320px;
  background-size: 860px;
  width: 860px;
  height: 320px;
}
</style>
