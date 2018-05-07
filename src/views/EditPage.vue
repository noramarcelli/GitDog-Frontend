<template>
    <section class="edit-page">
        <a @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <!-- <p>This is a Temp Edit Page</p> -->
        
        <section class="profile-imgs">
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
        </section>

    <section class="edit-details">
        <!-- <input class="message-header" type="text" v-model="setPlaceToEdit.name"/> -->
        <!-- RENDER NAME OF THE DOG -->
        <label class="name">Name:</label>
        <input class="input is-small is-danger" type="text" placeholder="NAME OF THE DOG"/>
        <label class="age">Age:</label>
        <input class="input is-small is-danger" type="text" placeholder="AGE"/>

        <br>
       <div class="specs"> 
        <div class="select is-danger is-small">
            <label>Gender:</label>
                <select>
                    <!-- <option disabled>Gender</option> -->
                    <option>Female</option>
                    <option>Male</option>
                </select>
                <br>
            </div>
            <div class="select is-danger is-small">
                <label>weight &nbsp;&nbsp;</label>
                <select>
                    <option>0-5KG</option>
                    <option>6-15KG</option>
                    <option>16-30KG</option>
                    <option>31-45KG</option>
                    <option>46KG &amp; up</option>
                </select>
            </div>
       </div>
        

        <!-- <textarea class="textarea" maxlength="40" size="60" type="text" v-model="setPlaceToEdit.desc"></textarea> -->
        <!-- RENDER DESC OF THE DOG -->
        <div class="desc">
            <label class="desc about">About:</label>
            <textarea class="textarea is-small is-danger" maxlength="40" size="60" type="text" placeholder="DEC DOG"></textarea>
        </div>    

        <div class="select is-danger is-small">
           <label>City/Region &nbsp;&nbsp;</label>
            <select>
                <optgroup label="HaMerkaz">
                    <option>Tel Aviv</option>
                    <option>Ramat Gan</option>
                    <option>Rishon Letzion</option>
                    <option>Bat Yam</option>
                </optgroup>
                <optgroup label="HaSharon">
                    <option>Natanya</option>
                    <option>Hertzeliya</option>
                    <option>Raanana</option>
                    <option>Kfar Saba</option>
                </optgroup>
                <optgroup label="HaDarom">
                    <option>Ashdod</option>
                    <option>Ashkelon</option>
                    <option>Beer Sheva</option>
                </optgroup>
                <optgroup label="HaTzafon"> 
                    <option>Haifa</option>
                    <option>Ako</option>
                    <option>Hadera</option>
                    <option>Nahariya</option>
                    <option>Krayot</option>
                </optgroup>
            </select>
            <br>
        </div>
        <br>
        
    </section>

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

<style scoped>
.input, select, .edit-page, textarea, .weight-slider, .specs,  .desc {
    font-family: "CutiePatootie";
    padding: 5px;
    margin: 10px;
    font-size: 12px;
}
label {
    font-weight: 1em;
    font-weight: bold;
    display: block;
}
.name, .age, .about {
    left: 5px;
}
</style>

