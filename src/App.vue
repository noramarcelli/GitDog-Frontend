<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
         <!-- <router-link to="/dog/5ae99e78647dea7fcfceab3d">Preview</router-link> -->
         <router-link to="/swipe">Find your match</router-link>
    </div>
    <router-view/>

    <footer></footer>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
