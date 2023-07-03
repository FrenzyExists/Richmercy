<template>
  <div class="select-none letter-man font-semibold flex justify-center gap-2 text-lg py-1 pt-5">
    <RouterLink :to="{ name: routerName, params: { letter } }" v-for="letter of letters" :key="letter"
      :class="existingArticles !== undefined && !existingArticles.map(e => e.title[0]).includes(letter) ? 'text-color-bg-soft pointer-events-none' : 'text-color-text-acc'">
      {{ letter }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'.split("");

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
.letter-man a:hover {
  color: var(--color-accent)
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
