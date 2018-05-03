<template>
<section>
    <!-- <div class="tinder"> -->
    <!-- <div class="tinder--cards"> -->
        <div v-if="loggedInUser && dog" class="tinder--card">
         <img :src="'./' + dog.imgs[0]">
         <p > {{dog.name}} , {{dog.age}}</p>
        </div>
    <!-- </div> -->
    <!-- </div> -->

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

<script>
export default {
  name: "profile",
  created() {
    var user = this.loggedInUser;
    console.log("user", user);

    // if (user !== null) {
    //   var dogId = user.dogId;
    //   this.$store.dispatch({ type: "loadDog", dogId });
    // }

    if (this.loggedInUser !== null) {
        var dogId = this.loggedInUser.dogId;
        console.log('dogId', dogId);
        
        this.$store.dispatch({ type: "loadUserDog", dogId })
        .then(() => {
             console.log('this.$store.state.userDog', this.$store.state.userDog);
        })
    }
  },
  computed: {
    loggedInUser() {
      console.log(
        "this.$store.getters.loggedInUserForDisplay",
        this.$store.getters.loggedInUserForDisplay
      );
       return this.$store.getters.loggedInUserForDisplay;
    },

    dog() {
         return this.$store.state.userDog;
      }
    //   console.log('this.$store.state.selectedDog', this.$store.state.selectedDog);
      
    // //   return this.$store.state.selectedDog;
    //    return this.$store.getters.selectedDog;
    }
    // dog() {
    //     console.log('user', user);
    //      var user = this.loggedInUser;
    //      console.log('dogId', dogId);
    //      var dogId = user.dogId;
    //      this.$store.dispatch({ type: "loadDog" });
    //     //  return user.dog;
    // }
  }

  //   getters: {
  //     dogtoShow() {
  //       console.log("state.selectedDog", state.selectedDog);
  //       return this.$store.getters.selectedDog;
  //     }
  //   }
// };
</script>
