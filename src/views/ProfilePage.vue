<template>
<section>
<div v-if="loggedInUser">
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

<script>
export default {
  name: "profile",
   computed: {
    loggedInUser(){
         return this.$store.getters.loggedInUserForDisplay;
    },
    dog() {
        console.log('user', user);
         var user = this.loggedInUser;
         console.log('dogId', dogId);
         var dogId = user.dogId;
         this.$store.dispatch({ type: "loadDog" });
        //  return user.dog;
    }
  },

  getters: {
      dogForDisplay(state) {
        console.log('state.selectedDog', state.selectedDog)
        return state.selectedDog;
      }
    }

//   created() {
//     this.$store.dispatch({ type: "loadNextDogs" });
//   },
//   computed: {
//     dog() {
//       console.log('this.$store.state.selectedDog', this.$store.state.selectedDog);
//       return this.$store.state.selectedDog;
//     }
//   },

//   methods: {
//     getNextDogs(prevId){
//       console.log('getNextDogs');
//       console.log('prevId', prevId);
//       this.$store.dispatch({ type: "loadNextDogs", prevId });
//     }
//   }
};
</script>
