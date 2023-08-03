<template>
  <div class="bg-color-bg-soft trans">
    <!-- <div class="carousel__item bg-color-bg-soft trans"> -->
    <Herobrine/>
  </div>
</template>

<script>
import Herobrine from '../components/Herobrine.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Basic',
  components: {
    Herobrine
},
})
</script>
