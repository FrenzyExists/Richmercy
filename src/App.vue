<script setup>
import { RouterView } from 'vue-router'
import { Transition, defineAsyncComponent } from 'vue';
</script>

<template>
  <div class="flex flex-col h-screen main-app">
    <header>
      <Navbar />
    </header>
    <RouterView v-slot="{ Component }" class="flex-final">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
    <Footer v-if="$route.path != '/' && $route.path != '/projects' && $route.path != '/blog'"/>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: defineAsyncComponent(() => import('./components/Navbar.vue')),
    Footer: defineAsyncComponent(() => import('./components/Footer.vue'))
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.flex-final {
  flex: 1 0 auto;
}
</style>
