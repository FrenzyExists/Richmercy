<template>
  <navbar
    :FilteredRoutes="[
      { name: 'about', path: '/about' },
      { name: 'blog', path: '/blog' },
      { name: 'tags', path: '/tags' },
      { name: 'projects', path: '/projects'}
    ]"
  />
  <div>
    <router-view />
  </div>
</template>

<script lang="js">
import { defineAsyncComponent, ref } from 'vue'
export default {
    components: {
        navbar: defineAsyncComponent(() => import('@/components/navbar.vue'))
    }
}
</script>
