<template>
<section>
  <div class="tinder">
      <div v-if="loggedInUser && dog">
        <!-- <img class="profile-pics" :src="'./' + dog.imgs[0]"> -->
        <div class="profile-pics" :style="{ backgroundImage: `url(${dog.imgs[0]})`}"></div>
        <p class="profile-data"> {{dog.name}} , {{dog.age}}</p>
      </div>
  </div>

  <div class="control">  
    <span v-if="loggedInUser">
      <router-link to="/prefs" name="PrefsPage" title="Setting" class="profile-btns"><i class="fa fa-cogs"></i></router-link>  |
      <!-- <br> -->
      <label> Settings</label>
    </span>
    <span v-if="loggedInUser">
      <router-link  to="/edit" name="EditPage" title="Edit" class="profile-btns"><i class="fa fa-pencil"></i></router-link>
      <!-- <br> -->
      <label> Edit</label>
    </span>
  </div>
 
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
  padding: 0;
  color: gray;
}

.profile-pics{
  margin-right: 5%;
}

.profile-data{
   margin-right: 5%;
}

@media (max-width: 932px) {
 .profile-pics{
  margin-right: 8%;
 }

.profile-data{
   margin-right: 8%;
 }
}

@media (max-width: 556px) {
 .profile-pics{
  margin-right: 8%;
 }

.profile-data{
   margin-right: 8%;
 }
}

</style>



<script>
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
