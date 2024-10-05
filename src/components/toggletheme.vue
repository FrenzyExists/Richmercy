<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    @click.prevent="toggleDark()"
    class="text-acc-soft bg-bg-harder hover:text-acc dark:text-dark-acc-soft dark:bg-dark-bg dark:hover:text-dark-acc m-auto cursor-pointer rounded-full p-2"
  >
    <font-awesome-icon v-if="isDark" class="h-6 w-6 m-auto block" icon="fa-solid fa-moon" />
    <font-awesome-icon v-else icon="fa-solid fa-sun" class="h-6 w-6 m-auto block" />
  </button>
</template>

<script setup lang="js">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
