<template>
    <section class="msgs-page">
        <!-- <p>This is a Temp Edit Page</p> -->
        <!-- <form @submit.prevent="checkLogin"> -->
        <form>
            <!-- <input type="search" class="input is-danger is-small is-rounded" ref="txtUserName" placeholder="User name" v-model="user.name" autofocus/> -->
            <input type="search" class="input is-danger is-small is-rounded" placeholder="Seach + MATCHES_COUNT" autofocus/>
        </form>

        <span class="matches title">
            <label>New Matches:</label>
            <span v-if="matches" class="matches-imgs" v-for="match in matches" :key="match._id">
                <div class="matches-pics profile-pics" v-if="match.dog" :style="{ backgroundImage: `url(${match.dog.imgs[0]})`}"
                    @click="$router.push('msgs/' + match._id)"></div>
                <!-- <img class="matches-pics" src="../../public/img/dogs/stella_1.jpeg"> -->
                <!-- <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/stella_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg"> -->
            </span>
        </span>

        <span class="msgs title">
            <label>Messages:</label>
        </span>
    </section>
</template>


<script>
export default {
 created() {
         var dogId = this.dog._id;
         console.log('dogId in msgsPage', dogId);
         
         this.$store.dispatch({type: 'getDogMatches', dogId})
    },
computed: {
    dog() {
      return this.$store.state.userStore.userDog;
    },

    matches(){
        console.log('this.$store.state.matchStore.matches', this.$store.state.matchStore.matches);
        return this.$store.state.matchStore.matches;
    }
  },
}
</script>

<style>
label {
    font-family: CutiePatootie;
    font-weight: bold;
    font-size: 1em;
    color: gray;
}
.matches-pics {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid red;
    margin: 10px 5px;
    box-shadow: 0 4px 8px 0 rgba(31, 7, 7, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.edit-page input {
      max-width: 60% !important;
}
a{
      color: black;
      font-size: 3em;
}
</style>
