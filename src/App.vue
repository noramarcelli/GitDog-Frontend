
<template>
  <div id="app" :class="[$route.name]">

    <div v-if="showNav" id="nav">
      <router-link class="profile" to="/profile" name="profile"><i class="fa fa-user"></i></router-link> |
      <router-link to="/swipe"><span ><img class="logo" src="../public/img/logo/logo.png" /></span></router-link> |
      <router-link class="msgs" to="/msgs" name="messages"><i class="fa fa-comments"></i></router-link>
      
    </div>
    <router-view/>

    <footer></footer>
  </div>
</template>


<script>
export default {
  computed: {
    showNav() {
      return this.$route.name !== "edit";
    },
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    }
  }
};
</script>


<style lang="scss">
#app {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.profile,
.msgs {
  // font-family: "BiggerLove";
  color: black;
  // font-size: 3rem;
  cursor: pointer;
  // padding: 20px;
  a {
    font-weight: bold;
    // color: #2c3e50;
    color: black;
    &.router-link-exact-active {
      color: red;
    }
  }
}

.logo {
  height: 60px;
  width: auto;
  cursor: pointer;
  padding-top: 5px;
}
.home footer {
  background-image: url("../public/img/bgrd/dog-treats.png");
  background-size: cover;
  background-position: center;
  height: 500px;
}
</style>
