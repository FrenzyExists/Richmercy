<template>
  <div
    class="flex-final dark:bg-dark-bg-soft bg-bg-soft overflow-hidden lg:mx-36 md:mx-14 pb-10 md:pb-12 pt-16 md:pt-0"
  >
    <by-letter routerName="blogByLetter" :existingArticles="articles" />

    <div class="p-10 justify-center">
      <searchbar :query.sync="query" @update:query="handleUpdateQuery" />
    </div>
    <article-block :articles="filteredArticles" />
  </div>
</template>

<script lang="js">
import { ref, computed, defineAsyncComponent } from 'vue';
import { useHead } from '@unhead/vue';

function getArticleInfo() {
  try {
    let a = [];
    const entries = Object.entries(import.meta.globEager('../blog/*.md'));
    for (const [path, m] of entries) {
      let blog = 'blog'+path.replace(/\/markdown|\.md|\./g, '')
      a.push({ ...m, path: blog});
    }
    return a;
  } catch (error) {
    // Handle error here
    console.error(error);
  }
}

export default {
  components: {
    'by-letter': defineAsyncComponent(() => import('@/components/byletter.vue')),
    'article-block': defineAsyncComponent(() => import('@/components/articleblock.vue')),
    'searchbar': defineAsyncComponent(() => import('@/components/Searchbar.vue')),
  },
  setup() {
    useHead({
      title: 'Big Brain Writting',
    })
    const query = ref('');
    const articles = getArticleInfo();

    const filteredArticles = computed(() => {
      return articles.filter(({ title }) =>
        [title].some(val => val.toLowerCase().includes(query.value.toLocaleLowerCase()))
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

<route lang="yaml">
meta:
  layout: blogger
</route>
