<template>
<div class="carousel carousel-animated carousel-animate-slide">
    <div class='carousel-container'>
        <div class='carousel-item is-active'>
            <carousel v-if="dog" :perPageCustom="[[480, 1], [768, 1]]">
                <slide class='carousel-item' v-for="(img, idx) in dog.imgs" :key="idx">
                    <img :src="'./' + dog.imgs[idx]"/>
                </slide>
            </carousel>
        </div>
    </div>
</div>
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
carousel, .VueCarousel-pagination {
    padding: 0px;
    margin: 0px;
}

</style>