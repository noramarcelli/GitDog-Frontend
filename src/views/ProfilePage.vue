<template>
<section>
  <div class="tinder">
      <div v-if="loggedInUser && dog">
        <img class="profile-pics" :src="'./' + dog.imgs[0]">
        <p> {{dog.name}} , {{dog.age}}</p>
      </div>
  </div>
  <div class="control">  
    <router-link to="/prefs" name="PrefsPage" class="profile-btns"><i class="fa fa-cogs"></i></router-link>
    <br>
    <label>Settings</label>
    <router-link to="/edit" name="EditPage" class="profile-btns"><i class="fa fa-pencil"></i></router-link>
    <br>
    <label>Edit</label>
  </div>
 <!-- <div class="tinder"> -->
  <!-- <div class="tinder--cards"> -->
    <!-- <div v-if="dog" class="tinder--card">-->
    <!-- <div v-if="dog">
      <img :src="'./' + dog.imgs[0]">
       <button class="info"><i class="fa fa-info"></i></button>
      <p > {{dog.name}} {{dog.age}}</p>
    </div>  -->
    <!-- </div> -->
</section>
</template>

<style scoped>
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
p, label {
  font-family: "CutiePatootie";
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 2px;
  color: black;
}
label {
  font-family: "CutiePatootie";
  font-weight: bold;
  font-size: 2.5em;
  letter-spacing: 2px;
  color: gray;
}
.profile-btns {
  font-size: 4em;
  color: gray;
  padding: 30px;
  margin: 30px;
  cursor: pointer;
  /* position: absolute; */
}
.control {
  
}
</style>



<script>
  import PrefsPage from './PrefsPage.vue';
  import EditPage from './EditPage.vue';

  export default {
    name: "profile",
    created() {
      var user = this.loggedInUser;
      if (this.loggedInUser !== null) {
          var dogId = this.loggedInUser.dogId;
          
          this.$store.dispatch({ type: "loadUserDog", dogId })
          .then(() => {
              console.log('this.$store.state.userDog', this.$store.state.userDog);
          })
      }
    },
    computed: {
      loggedInUser() {
        return this.$store.getters.loggedInUserForDisplay;
      },

      dog() {
          return this.$store.state.userStore.userDog;
        }
      }
  }
</script>
