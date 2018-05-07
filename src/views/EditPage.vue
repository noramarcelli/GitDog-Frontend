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
                        <a v-if="dog.imgs[0]" @click="toggleInput(0)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[0]" @click="toggleInput(0)"><i class="fa fa-plus-circle"></i></a>
                        <input v-model="imgUrl" @keyup="addImg(0)"/>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[1]" :src="'./' + dog.imgs[1]">
                        <a v-if="dog.imgs[1]" @click="toggleInput(1)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[1]" @click="toggleInput(1)"><i class="fa fa-plus-circle"></i></a>
                        <input  v-model="imgUrl" @keyup="addImg(1)"/>
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                        <img v-if="dog.imgs[2]" :src="'./' + dog.imgs[2]">
                        <a v-if="dog.imgs[2]" @click="toggleInput(2)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[2]" @click="toggleInput(2)"><i class="fa fa-plus-circle"></i></a>
                        <input v-model="imgUrl" @keyup="addImg(2)"/>
                        <!-- <a><i class="fa fa-plus-circle"></i></a> -->
                    </div>
                </div>
            <div class="columns">
                <div class="column is-4">
                        <img v-if="dog.imgs[3]" :src="'./' + dog.imgs[3]">
                        <a v-if="dog.imgs[3]" @click="toggleInput(3)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[3]" @click="toggleInput(3)"><i class="fa fa-plus-circle"></i></a>
                        <input v-model="imgUrl" @keyup="addImg(3)"/>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[4]" :src="'./' + dog.imgs[4]">
                        <a v-if="dog.imgs[4]" @click="toggleInput(4)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[4]" @click="toggleInput(4)"><i class="fa fa-plus-circle"></i></a>
                        <input v-model="imgUrl" @keyup="addImg(4)"/>
                    </div>
                    <div class="column is-4">
                        <img v-if="dog.imgs[5]" :src="'./' + dog.imgs[5]">
                        <a v-if="dog.imgs[5]" @click="toggleInput(5)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[5]" @click="toggleInput(5)"><i class="fa fa-plus-circle"></i></a>
                        <input v-model="imgUrl" @keyup="addImg(5)"/>
                    </div>
            </div>
            </div>
        </span>

    </section>
</template>


<script>
export default {
  data() {
    return {
        imgUrl: ''
    };
  },
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
      console.log("dog in edit page", this.$store.state.userStore.userDog);

      return this.$store.state.userStore.userDog;
    }
  },
  methods: {
    toggleInput(inputId) {

    },
    // addImg(imgIdx){
    // //     this.$store.dispatch({ type: "uploadImg", imgUrl, imgIdx}).then(() => {
    // //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    // //   });
    //     console.log('imgUrl', imgUrl);
        
    //     // this.$store.dispatch({ type: "uploadImg", imgUrl}).then(() => {
    // //   });
    // }

     addImg(){
    //     this.$store.dispatch({ type: "uploadImg", imgUrl, imgIdx}).then(() => {
    //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    //   });
        console.log('imgUrl', this.imgUrl);
        var imgUrl = this.imgUrl;
        this.$store.dispatch({ type: "uploadImg", imgUrl}).then(() => {
      });
    }
    
  }
};
</script>
