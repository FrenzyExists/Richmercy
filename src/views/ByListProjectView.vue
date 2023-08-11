<template>
  <div class="overflow-hidden pt-16 md:pt-0 font-montserrat-alternate bg-color-bg-soft lg:mx-36 md:mx-14 md:pb-10">
    <div class="select-none flex justify-between text-color-acc-soft w-full flex-row px-10 pt-4">
      <h2 class="text-xl font-bold">On Letter</h2>
      <h2 class="text-2xl font-bold">{{ $route.params.letter }}</h2>
    </div>
    <div class="pb-10 justify-center">
      <ByLetter routerName="projectByLetter" :existingArticles="articles" />
    </div>
    <FeatureBlocks :articles="filteredArticles" />
  </div>
</template>

<script lang="js">
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    ByLetter: defineAsyncComponent(() => import('@/components/ByLetter.vue')),
    FeatureBlocks: defineAsyncComponent(() => import('@/components/FeatureBlocks.vue'))
  },
  beforeCreate() {
    let articles = []
    for (const [path, m] of Object.entries(import.meta.globEager("../markdown/projects/*.md"))) {
      articles.push({ ...m.frontmatter, 'path': path.replace(/\/markdown|\.md/g, "") })
    }
    this.articles = articles;
  },
  data() {
    const filteredArticles = this.articles.filter(
      ({ title }) => [title]
        .some(val => val.toLowerCase()[0].includes(this.$route.params.letter.toLocaleLowerCase()))
    )
    return { filteredArticles }
  }
}
</script>