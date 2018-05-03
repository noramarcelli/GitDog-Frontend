
<template>
  <div id="app">

    <div id="nav">
<<<<<<< HEAD
      <router-link to="/" name="profile"><i class="fa fa-user"></i></router-link> |
         <!-- <router-link to="/dog/5ae99e78647dea7fcfceab3d">Preview</router-link> -->
      <router-link class="logo" to="/swipe"><Logo></Logo></router-link> |
      <router-link to="/about" name="messages"><i class="fa fa-comments"></i></router-link>
=======
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/swipe">Find your match</router-link>|
      <router-link to="/login">Log in</router-link>|
      <router-link to="/register">Resgister</router-link> 
>>>>>>> fe2468f834d5dec075433fdb983f8f3da4e851d0
    </div>
    <router-view/>

    <footer></footer>
  </div>
</template>


<script>
  import Logo from './components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>


<style lang="scss">
body {
    // background-color: red;  
    // background-image: url("../../public/img/bgrd/shattered-island.gif");
}
#app {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  font-family: "BiggerLove";
  font-size: 2em;
  cursor: pointer;
  padding: 30px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    color: black;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
