<template>
    <section class="msgs-page">
        <form @submit.prevent>
            <input type="search" v-model="filterBy.name" @keyup.enter="setFilterAndSetMatches" class="search input is-danger is-small is-rounded" :placeholder="matchesCount" autofocus/>
             <br>
        </form>

        <div class="new-matches">
            <label>New Matches:</label>
            <div>
              <span v-if="matches" class="matches-imgs" v-for="match in matches" :key="match._id">
                  <div class="matches-pics profile-pics" v-if="match.dog" :style="{ backgroundImage: `url(${match.dog.imgs[0]})`}"
                      @click="$router.push('msgs/' + match._id)"></div>
              </span>
            </div>
        </div>

        <div class="msgs title">
            <label>New Messages:</label>
            <div class="msg-box">
             <span v-if="matches" v-for="match in matches" :key="match._id">
                <div class="message" v-if="match.dog">
                    <div class="sender-pic" :style="{ backgroundImage: `url(${match.dog.imgs[0]})`}"></div>
                    <span class="txts">
                      <div class="sender">{{match.dog.name}},{{match.dog.age}}</div>
                      <span v-if="match.messages[match.messages.length - 1]" class="msg-txt">{{match.messages[match.messages.length - 1].txt}}</span>
                    </span>
                </div>
            </span>
                    </div>
        </div>

    </section>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  // };
  created() {
    var dogId = this.dog._id;
    this.$store.dispatch({ type: "getDogMatches", dogId });
  },
  data() {
    return {
      filterBy: { name: "" }
    };
  },
  computed: {
    dog() {
      return this.$store.state.userStore.userDog;
    },

    matches() {
      console.log(
        "this.$store.state.matchStore.matches",
        this.$store.state.matchStore.matches
      );
      return this.$store.state.matchStore.matches;
    },
    loggedInUser() {
      return this.$store.getters.loggedInUserForDisplay;
    },

    matchesCount() {
      return "Search " + this.matches.length + " Matches";
    }
  },
  methods: {
    setFilterAndSetMatches() {
      //   console.log('inside setFilter');
      this.$store.dispatch({
        type: "setFilter",
        filterBy: { ...this.filterBy }
      });
      this.$store.dispatch({ type: "getDogMatches", dogId: this.dog._id });
    }
  }
};
</script>

<style>
.msgs-page, form, .msg-box, label {
  padding: 0 10px;
}
label {
  font-family: CutiePatootie;
  font-weight: bold;
  font-size: 1.5rem;
  color: gray;
  display: inline-block;
  text-align: left;
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
a {
  color: black;
  font-size: 3rem;
}

.message {
  background: rgba (153, 153, 153, 0.27);
  font-family: CutiePatootie;
  text-align: left;
  padding: 0 10px;
  margin: 4px 0;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.txts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  padding: 5px;
}
.sender {
  font-weight: bold;
  font-size: 18px;
}
.sender-pic {
  height: 40px;
  width: 40px;
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  border: 1px solid red;
  margin: 5px;
  box-shadow: 0 4px 8px 0 rgba(31, 7, 7, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.new-matches {
  display: flex;
  flex-direction: column;
}
form {
  margin: 0;
  font-size: 1em !important;
}
.search {
  font-family: CutiePatootie !important;
  font-size: 14px;
}
.msgs-title {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

label {
  display: flex;
}
</style>
