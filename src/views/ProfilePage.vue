<template>
<section>
    <div class="tinder">
    <div class="tinder--cards">
        <div v-if="loggedInUser && dog" class="tinder--card">
         <img :src="'./' + dog.imgs[0]">
         <p > {{dog.name}} , {{dog.age}}</p>
        </div>
    </div>
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
/* SWIPING */

/* FOR LOGO NAME */
/* @font-face {
    font-family: "Digitalt";
    src: url(../../../fonts/Digitalt.ttf);
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #ccfbfe;
  /* overflow: hidden; */
  font-family: sans-serif;
}

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

.loaded.tinder {
  opacity: 1;
}

.tinder--status {
  position: absolute;
  top: 50%;
  margin-top: -30px;
  z-index: 2;
  width: 100%;
  text-align: center;
  pointer-events: none;
}

.tinder--status i {
  font-size: 100px;
  opacity: 0;
  transform: scale(0.3);
  transition: all 0.2s ease-in-out;
  position: absolute;
  width: 100px;
  margin-left: -50px;
}

.tinder_love .fa-heart, .info, .fav {
  opacity: 0.7;
  transform: scale(1);
}

.tinder_nope .fa-remov, .info, .fav {
  opacity: 0.7;
  transform: scale(1);
}

.tinder--cards {
  flex-grow: 1;
  padding-top: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  font-family: "BiggerLove";
}

.tinder--card {
  font-family: "Digitalt";
  display: inline-block;
  width: 90vw;
  max-width: 400px;
  height: 70vh;
  background: #ffffff;
  padding-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  will-change: transform;
  transition: all 0.3s ease-in-out;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
  -webkit-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  -moz-box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
  box-shadow: 4px -7px 32px 0px rgba(15, 15, 15, 1);
}

.moving.tinder--card {
  transition: none;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

.tinder--card img {
  max-width: 100%;
  pointer-events: none;
}

.tinder--card h3 {
  margin-top: 32px;
  font-size: 32px;
  padding: 0 16px;
  pointer-events: none;
}

.tinder--card p {
  margin-top: 24px;
  font-size: 20px;
  padding: 0 16px;
  pointer-events: none;
}

.tinder--buttons {
  flex: 0 0 100px;
  text-align: center;
  padding-top: 20px;
}

.tinder--buttons button {
  border-radius: 50%;
  line-height: 60px;
  width: 60px;
  border: 0;
  background: #ffffff;
  display: inline-block;
  margin: 0 8px;
}

.tinder--buttons button:focus {
  outline: 0;
}

.tinder--buttons i {
  font-size: 32px;
  vertical-align: middle;
}

.fa-heart {
  color: red;
}

.fa-remove {
  color: grey;
}
.info {
  left: 200px;
}
</style>

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
