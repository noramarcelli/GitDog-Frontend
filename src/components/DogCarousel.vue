<template>
    <carousel v-if="dog" :perPageCustom="[[480, 1], [768, 1], [300, 1], [0, 1]]" :navigationEnabled="true">
        <slide class='carousel-item' v-for="(img, idx) in dog.imgs" :key="idx" :style="{ backgroundImage : `url(${dog.imgs[idx]})`}"></slide>
    </carousel>
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

<style>
carousel, .VueCarousel-pagination {
    padding: 0px;
    margin: 0px;
}
.VueCarousel-navigation-next {
    right: 45px !important;
    color: lightgray !important;
    font-size: 40px;
}
.VueCarousel-navigation-prev {
    left: 45px !important;
    color: lightgray !important;
    font-size: 40px;
}
.VueCarousel-pagination {
    position: absolute;
    bottom: 10px;
}
/* .VueCarousel-dot-button {
    bottom: 20px !important;
} */

.VueCarousel-navigation--disabled {
    opacity: 0 !important; 
}
.carousel-item{
    height: 270px;
    background-size: cover;
    background-position: center;  
}
</style>