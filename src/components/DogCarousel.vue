<template>
<!-- <div > -->
    <carousel class="carousel" v-if="dog" :perPageCustom="[[480, 1], [768, 1]]">
        <slide v-for="(img, idx) in dog.imgs" :key="idx">
            <img :src="'./' + dog.imgs[idx]"/>
        </slide>
    </carousel>
<!-- </div> -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  props: ["dog"],
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
carousel {
    padding: 0px;
    margin: 0px;
}
</style>