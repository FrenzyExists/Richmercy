<template>
  <div class="letter-man font-semibold flex justify-center gap-2 text-lg py-1 pt-5">
    <RouterLink :to="{ name: routerName, params: { letter } }" v-for="letter of    letters   " :key=" letter ">
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
    }
})
</script>

<style>
.letter-man {
  color: var(--color-text-accent)
}
.letter-man a:hover {
  color: var(--color-accent)
}
</style>
