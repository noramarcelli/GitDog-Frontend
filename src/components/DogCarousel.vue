<template>
<!-- <div class="carousel carousel-animated carousel-animate-slide">
    <div class='carousel-container'>
        <div class='carousel-item is-active'> -->
            <carousel v-if="dog" :perPageCustom="[[480, 1], [768, 1]]" :navigationEnabled="true">
                <slide class='carousel-item' v-for="(img, idx) in dog.imgs" :key="idx" :style="{ backgroundImage : `url(${dog.imgs[idx]})`}">
                    <span >
                        <!-- <i class="fa fa-caret-left"></i> -->
                        <!-- <img :src="'./' + dog.imgs[idx]"/> -->
                        <!-- <i class="fa fa-caret-right"></i>  -->
                    </span>
                </slide>
            </carousel>
            <!-- CLASS ARROW RIGHT: <i class="fas fa-caret-right"></i> -->
            <!-- CLASS ARROW LEFT: <i class="fas fa-caret-left"></i> -->
        <!-- </div>
    </div>
</div> -->
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