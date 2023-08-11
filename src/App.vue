<script setup>
import { RouterView } from 'vue-router'
import { Transition, defineAsyncComponent } from 'vue';
</script>

<template>
  <div class="flex flex-col h-screen main-app md:pt-16 ">
    <header>
      <Navbar />
    </header>
    <RouterView v-slot="{ Component }" class="flex-final">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
    <!-- $route.path != '/' && $route.path != '/projects/' -->
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: defineAsyncComponent(() => import('./components/Navbar.vue')),
    Footer: defineAsyncComponent(() => import('./components/Footer.vue'))
  },
  computed: {
    showFooter() {
      const routePath = this.$route.path;
      const re = new RegExp("^/(projects|blog)(/)?([a-z])?$");
      return routePath !== '/' && !re.test(routePath);
    }
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
