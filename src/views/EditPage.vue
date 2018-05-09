<template>
    <section class="edit-page">
        <a class="done" @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <!-- <p>This is a Temp Edit Page</p> -->
        
        <section class="profile-imgs">
            <!-- <span class="empty-pic square"></span> -->
                <div class="dogs-container">
                    <div v-for="idx in 6" class="dog" :style="{ backgroundImage: (dog.imgs[idx-1])? `url(${dog.imgs[idx-1]})` : 'url(./img/bgrd/paw.jpg)' }">
                        <a v-if="dog.imgs[idx]" @click="toggleInput(idx)"><i class="fa fa-minus-circle"></i></a>
                        <a v-if="!dog.imgs[idx]" @click="toggleInput(idx)"><i class="fa fa-plus-circle"></i></a>
                        <input v-if="!dog.imgs[idx]" @keyup="addImg(idx)"/>
                    </div>
                </div>
        </section>
    
    <section class="edit-details">
        <!-- <input class="message-header" type="text" v-model="setPlaceToEdit.name"/> -->
        <!-- RENDER NAME OF THE DOG -->
        <form>
            <label class="name">Name:</label>
            <input class="input is-small is-danger" type="text" placeholder="NAME OF THE DOG" v-model="dog.name"/>
            <label class="age">Age:</label>
            <input class="input is-small is-danger" type="text" placeholder="AGE" v-model="dog.age"/>
            <label class="breed">Breed:</label>
            <input class="input is-small is-danger" type="text" placeholder="BREED" v-model="dog.breed"/>
        </form>

        <form>
            <section class="specs select is-danger is-small"> 
                <label>Gender:</label>
                <select>
                    <option>Female</option>
                    <option>Male</option>
                </select>
            </section>

            <section class="select is-danger is-small">
                <label>weight &nbsp;&nbsp;</label>
                <select>
                    <option>0-5KG</option>
                    <option>6-15KG</option>
                    <option>16-30KG</option>
                    <option>31-45KG</option>
                    <option>46KG &amp; up</option>
                </select>
            </section>
        
            <section class="select is-danger is-small">
                <label>City/Region &nbsp;&nbsp;</label>
                <select>
                    <option class="optionGroup">HaMerkaz</option>
                    <option class="optionChild">Tel Aviv</option>
                    <option class="optionChild">Ramat Gan</option>
                    <option class="optionChild">Rishon Letzion</option>
                    <option class="optionChild">Bat Yam</option>
                    <option class="optionGroup">HaSharon</option>
                    <option class="optionChild">Natanya</option>
                    <option class="optionChild">Hertzeliya</option>
                    <option class="optionChild">Raanana</option>
                    <option class="optionChild">Kfar Saba</option>
                    <option class="optionGroup">HaDarom</option>
                    <option class="optionChild">Ashdod</option>
                    <option class="optionChild">Ashkelon</option>
                    <option class="optionChild">Beer Sheva</option>
                    <option class="optionGroup">HaTzafon</option>
                    <option class="optionChild">Haifa</option>
                    <option class="optionChild">Ako</option>
                    <option class="optionChild">Hadera</option>
                    <option class="optionChild">Nahariya</option>
                    <option class="optionChild">Krayot</option>
                </select>
            </section>
    </form>

    <span>
        <form class="desc">
            <label class="desc about block">About:</label>
            <textarea class="textarea is-small is-danger" maxlength="40" size="60" type="text" placeholder="DEC DOG" v-model="dog.description"></textarea>
        </form>  
    </span> 
    <button type="button" class="button is-small is-danger is-rounded block" @click="saveDog">Save Dog</button>
        
    </section>

    </section>
</template>


<script>
export default {
  data() {
    return {
        // imgUrl: ''
        // dogToEdit: {name: '', age: '', breed: '', city: '', weight: 0,  breed: '', description: '', gender: '', imgs: []}
    };
  },
  created() {
    // var user = this.loggedInUser;
    // if (this.loggedInUser !== null) {
    //   var dogId = this.loggedInUser.dogId;

    // //   this.$store.dispatch({ type: "loadUserDog", dogId }).then(() => {
    // //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    // //   });
    // }

    console.log('this.dog', this.dog);
    
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },

    dog() {
    //   console.log("dog in edit page", this.$store.getters.userDog);
    //   if(this.$store.state.userStore.userDog) this.dogToEdit = this.$store.state.userStore.userDog;
    //   return this.$store.state.userStore.userDog;
      let dog = this.$store.getters.userDog;
      let dogToEdit = { ...dog }
      delete dogToEdit.pendingLikesIds;
      delete dogToEdit.matches;
      return dogToEdit;
    },

    showEmpty() {
        // return this.$route.name !== 'edit';

    }
  },
  methods: {
    toggleInput(inputId) {

    },
       addImg(idx){


    //     this.$store.dispatch({ type: "uploadImg", imgUrl, imgIdx}).then(() => {
    //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    //   });
    //     console.log('imgUrl', this.imgUrl);
    //     var imgUrl = this.imgUrl;
    //     this.$store.dispatch({ type: "uploadImg", imgUrl}).then(() => {
    //   });
    },
    // addImg(imgIdx){
    // //     this.$store.dispatch({ type: "uploadImg", imgUrl, imgIdx}).then(() => {
    // //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    // //   });
    //     console.log('imgUrl', imgUrl);
        
    //     // this.$store.dispatch({ type: "uploadImg", imgUrl}).then(() => {
    // //   });
    // }

    //  addImg(){
    // //     this.$store.dispatch({ type: "uploadImg", imgUrl, imgIdx}).then(() => {
    // //     // console.log("this.$store.state.userDog", this.$store.state.userDog);
    // //   });
    //     console.log('imgUrl', this.imgUrl);
    //     var imgUrl = this.imgUrl;
    //     this.$store.dispatch({ type: "uploadImg", imgUrl}).then(() => {
    //   });
    // },

    saveDog() {
        // console.log('dog inside save dog', this.dog);
         let dogToEdit = this.dog;
         console.log('dog inside save dog', dogToEdit);
        
      this.$store
        .dispatch({ type: "saveDog", dogToEdit })
        .then(() => {
        
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
    font-size: 16px;
}
form {
    display: flex;
    align-items: center;
}
label {
    font-size: 16px;
    font-weight: bold;
    /* display: block; */
}
.name, .age, .about, .breed {
    left: 5px;
}
.done{
    font-size: 50px;
    color: black;
}
.square {
  border-color: 2px solid red; 
  height: 250px;
  width: 250px;
  display: block;
  background-image: url('../../public/img/bgrd/paw.jpg');
  background-repeat: no-repeat;
  background-size: cover;  
  /* background-color: #555; */
}
.optionGroup {
    font-weight: bold !important;
    font-style: italic;
}
    
.optionChild {
    padding-left: 15px;
}

.dogs-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, calc( (100vw - 70px) / 3));
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    background: #d3d3d3b5;
    padding: 5px;
}
/* USE THIS FOR CIRCLE + BG STYLE LIKE IN .dogs-container */
.dogs-container .dog {
    background-size: cover;
    background-position: center center;

}

.dogs-container .dog:first-child {
    grid-column: span 2;
    grid-row: span 2;
}

</style>

