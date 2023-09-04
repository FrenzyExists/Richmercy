<template>
    <div class="">
        <!-- <navbar :FilteredRoutes="[{name: 'home', path: '/'}, {name: 'projects', path: '/all-projects'}, {name: 'blog', path: '/blog'}]"/> -->
        <router-view  />
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
  
  