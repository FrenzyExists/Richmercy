<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen main-app md:pt-16">
    <header></header>
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="$route.path"></component>
    </RouterView>
  </div>
</template>
