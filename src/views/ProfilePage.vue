<template>
<section>
  <div class="tinder">
      <div v-if="loggedInUser && dog">
        <img class="profile-pics" :src="'./' + dog.imgs[0]">
        <p> {{dog.name}} , {{dog.age}}</p>
      </div>
  </div>

  <div class="control">  
    <span>
      <router-link to="/prefs" name="PrefsPage" title="Setting" class="profile-btns"><i class="fa fa-cogs"></i></router-link>  |
      <!-- <br> -->
      <label> Settings</label>
    </span>
    <span>
      <router-link to="/edit" name="EditPage" title="Edit" class="profile-btns"><i class="fa fa-pencil"></i></router-link>
      <!-- <br> -->
      <label> Edit</label>
    </span>
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
  /* height: calc(100vh - 100px); */
  top: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
}
p{
  font-family: "CutiePatootie";
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 2px;
  color: black;
}
label {
  font-family: "CutiePatootie";
  font-weight: bold;
  font-size: 1.5em;
  letter-spacing: 2px;
  color: gray;
  margin: 0;
  padding: 0;
}
.profile-btns {
  font-size: 4em;
  color: gray;
  padding: 0 20px;
  margin: 0;
  cursor: pointer;
}
.control, label {
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  margin:0;
  padding: o;
  color: gray;
}
</style>



<script>
import PrefsPage from "./PrefsPage.vue";
import EditPage from "./EditPage.vue";

export default {
  name: "profile",
  created() {
    var user = this.loggedInUser;
    if (this.loggedInUser !== null) {
      var dogId = this.loggedInUser.dogId;

      this.$store.dispatch({ type: "loadUserDog", dogId }).then(() => {
        console.log("this.$store.state.userDog", this.$store.state.userDog);
      });
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
};
</script>
