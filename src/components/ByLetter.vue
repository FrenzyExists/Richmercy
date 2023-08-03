<template>
  <div class="select-none letter-man font-semibold flex justify-center gap-2 text-lg py-1 pt-5 font-montserrat-alternate italic">
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

.letter-man::after {
  top: 120px;
    content: "";
    position: absolute;
    left: 40%;
    right: 40%;
    height: 4px;
    background-color: #E57C23;
}

</style>
