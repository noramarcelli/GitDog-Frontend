<script>
    export default{

    }
</script>

<template>
    <span class="logo">
        <span>TinDog</span>
        <span class="dot"></span>
    </span>
</template>

<style scoped>
.logo {
    background-image: url("../../public/img/logo/bone.png");
    background-repeat: no-repeat;
    text-decoration: none;
    background-size: 160px;
    width: 160px;
    height: 80px;
}

p {
    font-family: "Digitalt";
    font-size: 10px;
    z-index: 5;
}

.dot {
  height: 65px;
  width: 65px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  border-style: dotted;
  border-color: black;
  z-index: -3;
}

</style>