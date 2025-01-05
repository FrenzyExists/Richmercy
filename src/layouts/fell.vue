<template>
  <navbar
    :FilteredRoutes="[
      { name: 'about', path: '/about' },
      { name: 'blog', path: '/blog' },
      { name: 'projects', path: '/projects' }
    ]"
  />
  <div class="pt-8 md:pt-10 w-full bg-dark-bg m-auto font-montserrat-alternate">
    <router-view />
  </div>
  <foot />
</template>

<script lang="js">
import { defineAsyncComponent, ref } from 'vue'
export default {
  components: {
    navbar: defineAsyncComponent(() => import('@/components/navbar.vue')),
    foot: defineAsyncComponent(() => import('@/components/foot.vue')),
    
  }
}
</script>
