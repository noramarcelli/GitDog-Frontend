<template>
    <section class="Msgs-page">
        <a @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <p>This is a Temp Edit Page</p>
        
        <span class="profile-imgs">
            <div class="block">
                <div class="columns">

                    <div class="column is-8">
                        <!-- PROFILE PICTURE - THE FIRST -->
                        <img v-if="dog.imgs[0]" :src="'./' + dog.imgs[0]">
                        <a v-if="dog.imgs[0]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[0]"><i class="fa fa-plus-circle"></i></a>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[1]" :src="'./' + dog.imgs[1]">
                        <a v-if="dog.imgs[1]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[1]"><i class="fa fa-plus-circle"></i></a>
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                        <img v-if="dog.imgs[2]" :src="'./' + dog.imgs[2]">
                        <a v-if="dog.imgs[2]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[2]"><i class="fa fa-plus-circle"></i></a>
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                    </div>
                    
                </div>
            <div class="columns">
                <div class="column is-4">
                        <img v-if="dog.imgs[3]" :src="'./' + dog.imgs[3]">
                        <a v-if="dog.imgs[3]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[3]"><i class="fa fa-plus-circle"></i></a>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[4]" :src="'./' + dog.imgs[4]">
                        <a v-if="dog.imgs[4]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[4]"><i class="fa fa-plus-circle"></i></a>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[5]" :src="'./' + dog.imgs[5]">
                        <a v-if="dog.imgs[5]"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[5]"><i class="fa fa-plus-circle"></i></a>
                    </div>
            </div>
            </div>
        </span>

    </section>
</template>


<script>
export default {
   created() {
    var user = this.loggedInUser;
    if (this.loggedInUser !== null) {
      var dogId = this.loggedInUser.dogId;

      this.$store.dispatch({ type: "loadUserDog", dogId }).then(() => {
        // console.log("this.$store.state.userDog", this.$store.state.userDog);
      });
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },

    dog() {
      console.log('dog in edit page', this.$store.state.userStore.userDog);
      
      return this.$store.state.userStore.userDog;
    }
  }
};
</script>
