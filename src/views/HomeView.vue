<template>
  <div class="carousel__item bg-color-bg-soft trans">
    <Herobrine/>
  </div>

</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import Herobrine from '../components/Herobrine.vue'
import 'vue3-carousel/dist/carousel.css'


export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Herobrine
    
  },
})
</script>

<style>
.carousel__item {
  max-height: 93.3vh;
  width: 100%;
  height: 99%;
  color: var(--vc-clr-white);
  font-size: 20px;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color:aqua;
}
</style>
