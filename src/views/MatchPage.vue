<template>
<section class="match-page">
  <h1>It's a match!!!</h1>

  <!-- <img :src="'./' + dog.imgs[0]">
  <img :src="'./' + dog.imgs[1]"> -->
  <img class="match-pic" src="../../public/img/dogs/donna_1.jpeg" >
  <img class="match-pic" src="../../public/img/dogs/charly_1.jpeg" >
  
  <p>You and MATCH-NAME have liked each other</p>

  <button class="button is-danger is-rounded">Send a Massage</button>
  <br>
  <button class="button is-danger is-rounded">Keep Playing</button>
</section>    
</template>

<script>
export default {};
</script>


<style>
.match-page {
  font-weight: bold;
  /* color: black; */
}
h1 {
  font-family: "SweetHipster";
  font-size: 4.5em;
  line-height: normal !important;
  margin: 0px !important;
  padding: 0px !important;
}
p {
  font-family: "BiggerLove";
  font-size: 0.8em;
}

.match-pic {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 3px solid red;
  padding: 5px;
  margin: 0px 20px;
  box-shadow: 0 4px 8px 0 rgba(31, 7, 7, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>
