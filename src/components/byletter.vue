<template>
  <div
    class="text-xs select-none letter-man after:bg-acc dark:after:bg-dark-acc after:left-[40%] after:right-[40%] after:h-1 after:absolute after:mt-9 font-semibold flex justify-center gap-2 xs:text-md sm:text-lg py-1 pt-5 font-montserrat-alternate italic"
  >
    <RouterLink
      :to="{ name: routerName, params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      :class="
        existingArticles !== undefined &&
        !existingArticles.map((e) => e.title !== undefined ? e.title[0] : null).includes(letter.toLocaleUpperCase())
          ? 'text-bg-mute dark:text-dark-bg-mute pointer-events-none'  
          : 'text-acc dark:text-dark-acc hover:text-acc-soft dark:hover:text-dark-acc-soft'
      "
    >
      {{ letter }}
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const letters = 'abcdefghijklmnopqrstuvwyz'.split('')
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
