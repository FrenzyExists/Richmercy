<template>
    <div>
      <div class="flex justify-between w-full flex-row px-10 pt-4">
        <h2 class="text-xl font-bold text-color-acc-soft">On Letter</h2>
        <h2 class="text-2xl font-bold text-color-acc-soft">{{ $route.params.letter }}</h2>
      </div>
      
      <ByLetter routerName="projectByLetter" :existingArticles="articles" />
  
      <FeatureBlocks :articles="filteredArticles" />
    </div>
  </template>
  
  
  <script lang="js">
  import ByLetter from '@/components/ByLetter.vue';
  import FeatureBlocks from '@/components/FeatureBlocks.vue';
  
  export default {
    components: {
      ByLetter,
      FeatureBlocks
    },
    beforeCreate() {
      let articles = []
      for (const [path, m] of Object.entries(import.meta.globEager("../markdown/blog/*.md"))) {
        articles.push({...m.frontmatter, 'path': path.replace(/\/markdown|\.md/g, "")})
      }
      this.articles = articles;
    },
    data() {
      const filteredArticles = this.articles.filter(
        ({ title }) => [title]
        .some(val => val.toLowerCase()[0].includes(this.$route.params.letter.toLocaleLowerCase()))
      )
      return {filteredArticles}
    }
  }
  
  </script>