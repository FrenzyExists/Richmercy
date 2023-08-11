<template>
  <div
    class="select-none letter-man after:bg-color-acc after:left-[40%] after:right-[40%] after:h-1 after:absolute after:mt-9 font-semibold flex justify-center gap-2 text-lg py-1 pt-5 font-montserrat-alternate italic">
    <RouterLink :to="{ name: routerName, params: { letter } }" v-for="letter of letters" :key="letter"
      :class="existingArticles !== undefined && !existingArticles.map(e => e.title[0]).includes(letter.toLocaleUpperCase()) ? 'text-color-bg-banner pointer-events-none' : 'text-color-text-acc hover:text-color-acc-soft'">
      {{ letter }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const letters = 'abcdefghijklmnopqrstuvwyz'.split("");

defineProps({
  routerName: {
    type: String,
    required: true
  },
  existingArticles: {
    type: Array,
    required: false
  }
})
</script>

<style>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
