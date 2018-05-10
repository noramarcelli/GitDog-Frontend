<template>
    <section v-if="loggedInUser" class="edit-page">
        <a class="done" @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <!-- <p>This is a Temp Edit Page</p> -->
        
        <section class="profile-imgs">
            <!-- <span class="empty-pic square"></span> -->
                <div class="dogs-container">
                    <div v-for="idx in 6" class="dog" :style="{ backgroundImage: (dogToEdit.imgs[idx-1])? `url(${dogToEdit.imgs[idx-1]})` : 'url(./img/bgrd/paw.jpg)' }">
                        <a v-if="dogToEdit.imgs[idx-1]" @click="emptyImg(idx - 1)"><i class="fa fa-minus-circle"></i></a>
                        <a v-else><i @click="saveImg(idx - 1)" class="fa fa-plus-circle"></i></a>
                        <input v-if="!dogToEdit.imgs[idx - 1]" v-model="dogToEdit.imgs[idx - 1]"/>
                    </div>
                </div>
        </section>
    
    <section class="edit-details">
        <div class="main-details">
            <form>
                <label class="name">Name:</label>
                <input class="input is-small is-danger" type="text" placeholder="NAME OF THE DOG" v-model="dogToEdit.name"/>
                <label class="age">Age:</label>
                <input class="input is-small is-danger" type="text" placeholder="AGE" v-model="dogToEdit.age"/>
                <label class="breed">Breed:</label>
                <input class="input is-small is-danger" type="text" placeholder="BREED" v-model="dogToEdit.breed"/>
            </form>
        </div>

        <form>
            <section class="specs select is-danger is-small"> 
                <label>Gender:</label>
                <select v-model="dogToEdit.gender">
                    <option>Female</option>
                    <option>Male</option>
                </select>
            </section>

            <section class="select is-danger is-small">
                <label>weight: &nbsp;&nbsp;</label>
                <select v-model="dogToEdit.weight">
                    <option>0-5KG</option>
                    <option>6-15KG</option>
                    <option>16-30KG</option>
                    <option>31-45KG</option>
                    <option>46KG &amp; up</option>
                </select>
            </section>
        
            <section class="select is-danger is-small">
                <label>City/Region: &nbsp;&nbsp;</label>
                <select v-model="dogToEdit.city">
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
    </form >
<br>
    <div class="desc">
        <!-- <form class="desc"> -->
            <label class="desc about block">About:</label>
            <textarea class="textarea is-small is-danger" maxlength="40" size="60" type="text" placeholder="DEC DOG" v-model="dogToEdit.description"></textarea>
        <!-- </form>   -->
    </div> 
    <button type="button" class="button is-small is-danger is-rounded block" @click="saveDog">Save Dog</button>        
</section>

    </section>
</template>


<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },

    dogToEdit() {
      let dog = this.$store.getters.userDog;
      let dogToEdit = { ...dog, imgs: [...dog.imgs] };
      delete dogToEdit.pendingLikesIds;
      delete dogToEdit.matches;
      return dogToEdit;
    }
  },
  methods: {
    saveImg(idx) {
      var imgName = "img" + idx;
      var imgUrl = this.dogToEdit.imgs[idx];
    //   console.log('imgUrl in saveImg in EditPage', imgUrl );
         this.$store.dispatch({ type: "uploadImg", imgUrl}).then((url) => {
            //  console.log('image url:', url)
             this.dogToEdit.imgs.splice(idx, 1, url.url);
        });
    },

    emptyImg(idx){
         var imgUrl = "";
         this.dogToEdit.imgs.splice(idx, 1, "");
    },

    saveDog() {
      let dogToEdit = this.dogToEdit;
    //   console.log("dog inside save dog", dogToEdit);
      this.$store.dispatch({ type: "saveDog", dogToEdit }).then(() => {});
    }
  }
};
</script>

<style scoped>
.input,
select,
.edit-page,
textarea,
.weight-slider,
.specs,
.desc {
  font-family: "CutiePatootie";
  padding: 5px;
  margin: 10px;
  font-size: 16px;
}
form, span {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
}
label {
    font-size: 16px;
    font-weight: bold;
    /* display: block; */
}
/* .name,
.age,
.about,
.breed {
  left: 5px;
} */
.done {
  font-size: 50px;
  color: black;
}
.square {
  border-color: 2px solid red;
  height: 250px;
  width: 250px;
  display: block;
  background-image: url("../../public/img/bgrd/paw.jpg");
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
    position: relative;
}

.dog a {
    color: #ff3860;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
}
.dogs-container .dog:first-child {
    grid-column: span 2;
    grid-row: span 2;
}
.block {
    display: block;
}
.profile-imgs{
    width: 80%;
    margin: 0 auto;
}
.desc{
   text-align: left;
}
button {
   float: right;
}

.main-details{
    margin: 0 0 0 30px;
}
</style>

