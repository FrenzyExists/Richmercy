<template>
  <div class="bg-color-bg-soft overflow-hidden lg:mx-36 md:mx-14 pb-10 md:pb-12 pt-16 md:pt-0">
    <ByLetter routerName="projectByLetter" :existingArticles="articles" />

    <div class="p-10 justify-center">
      <Searchbar :query.sync="query" @update:query="handleUpdateQuery" />
    </div>
    <FeatureBlocks :articles="filteredArticles" />
  </div>
</template>

<script lang="js">
import { ref, computed, defineAsyncComponent } from 'vue'

function getArticleInfo() {
  try {
    let a = []
    const entries = Object.entries(import.meta.globEager("../markdown/projects/*.md"));
    for (const [path, m] of entries) {
      a.push({ ...m.frontmatter, 'path': path.replace(/\/markdown|\.md/g, "") })
    }
    return a;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
}

export default {
  components: {
    ByLetter: defineAsyncComponent(() => import('@/components/ByLetter.vue')),
    FeatureBlocks: defineAsyncComponent(() => import('@/components/FeatureBlocks.vue')),
    Searchbar: defineAsyncComponent(() => import('@/components/Searchbar.vue'))
  },
  setup() {
    const query = ref('')
    const articles = getArticleInfo();

    const filteredArticles = computed(() => {
      return articles.filter(
        ({ title }) => [title]
          .some(val => val.toLowerCase().includes(query.value.toLocaleLowerCase()))
      );
    });

    function handleUpdateQuery(newValue) {
      query.value = newValue;
    } return {
      query,
      articles,
      filteredArticles,
      handleUpdateQuery
    };
  }
};
</script>