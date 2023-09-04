<template>
  <div class="flex-final dark:bg-dark-bg-soft bg-bg-soft overflow-hidden lg:mx-36 md:mx-14 pb-10 md:pb-12 pt-16 md:pt-0">
    <div class="flex font-bold justify-between text-acc-soft dark:text-dark-acc-soft w-full flex-row px-10 pt-4">
      <h2 class="text-xl">On Letter</h2>
      <h2 class="text-2xl">{{ $route.params.letter }}</h2>
    </div>
    <div class="pb-10 justify-center">
      <ByLetter routerName="blogByLetter" :existingArticles="articles" />
    </div>
    <FeatureBlocks :articles="filteredArticles" />
  </div>
</template>
  
<script lang="js">
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    ByLetter: defineAsyncComponent(() => import('@/components/byletter.vue')),
    FeatureBlocks: defineAsyncComponent(() => import('@/components/articleblock.vue'))
  },
  beforeCreate() {
    let articles = []
    for (const [path, m] of Object.entries(import.meta.globEager("../markdown/blog/*.md"))) {
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