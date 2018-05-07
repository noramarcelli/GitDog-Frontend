<template>
    <section class="edit-page">
        <a @click="$router.push('/profile')" title="Done"><i class="fa fa-check-circle"></i></a>
        <!-- <p>This is a Temp Edit Page</p> -->
        <!-- <form @submit.prevent="checkLogin"> -->
        <form>
            <!-- <input type="search" class="input is-danger is-small is-rounded" ref="txtUserName" placeholder="User name" v-model="user.name" autofocus/> -->
            <input type="search" class="input is-danger is-small is-rounded" placeholder="Seach + MATCHES_COUNT" autofocus/>
             <br>
        </form>

        <span class="matches title">
            <br>
            <label>New Matches:</label>
            <br>
            <span class="matches-imgs">
                <img class="matches-pics" src="../../public/img/dogs/stella_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/stella_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/luna_1.jpeg">
                <img class="matches-pics" src="../../public/img/dogs/snow_3.jpeg">
            </span>
            <br>
        </span>

        <span class="msgs title">
            <label>Messages:</label>
            <br>
        </span>
    </section>
</template>


<script>
export default {
  
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
  a {
      color: black;
      font-size: 3em;
  }
</style>
