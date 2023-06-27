<template>
  <div class="byLetter">Project List
    <h2 class="text-2xl font-bold text-blue-900">{{ $route.params.letter }}</h2>

    <div class="mx-10 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 mt-4">

        <Suspense>
          <template #default><Box v-for="i in 1" markdownLink="../markdown/blog/*.md" /></template>
          <template #fallback>Loading Stuff...</template>
      
    </Suspense>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Box: defineAsyncComponent( () => import('../components/FeatureBox.vue'))
  }
}

</script>