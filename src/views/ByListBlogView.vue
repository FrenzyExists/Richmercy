<template>
  <navbar
    :FilteredRoutes="[
      { name: 'about', path: '/about' },
      { name: 'blog', path: '/blog' }
    ]"
  />
  <div
    class="flex-final dark:bg-dark-bg-soft bg-bg-soft overflow-hidden lg:mx-36 md:mx-14 pb-10 md:pb-12 pt-16 md:pt-0"
  >
    <div
      class="flex font-bold justify-between text-acc-soft dark:text-dark-acc-soft w-full flex-row px-10 pt-4"
    >
      <h2 class="text-xl">On Letter</h2>
      <h2 class="text-2xl">{{ $route.params.letter }}</h2>
    </div>
    <div class="pb-10 justify-center">
      <by-letter routerName="blogByLetter" :existingArticles="articles" />
    </div>
    <div class="px-10 pb-10 justify-center">
      <searchbar v-model:query="query" @update:query="handleUpdateQuery" />
    </div>
    <article-block :articles="filterArticlesBySearch" />
  </div>
</template>

<script lang="js">
import { ref, computed, defineAsyncComponent } from 'vue';
import { useHead } from '@unhead/vue';
export default {
  components: {
    'by-letter': defineAsyncComponent(() => import('@/components/byletter.vue')),
    'article-block': defineAsyncComponent(() => import('@/components/articleblock.vue')),
    'searchbar': defineAsyncComponent(() => import('@/components/searchbar.vue')),
    'navbar': defineAsyncComponent(() => import('@/components/navbar.vue'))
  },
  beforeCreate() {
    for (const [path, m] of Object.entries(import.meta.globEager("../markdown/blog/*.md"))) {
      this.articles.push({ ...m, 'path': path.replace(/\/markdown|\.md/g, "") })
    }

    this.filteredArticlesByLetter.value = this.articles.filter(
      ({ title }) => [title]
        .some(val => String(val).toLowerCase()[0].includes(this.$route.params.letter.toLocaleLowerCase()))
    );

  },
  setup() {
    useHead({
      title: 'Big Brain Writting But with Letters',
    });
    const query = ref('');
    const articles = ref([])
    const filteredArticlesByLetter = ref([])

    const filterArticlesBySearch = computed(() => {
      return filteredArticlesByLetter.value.value.filter(({ title }) =>
        [title].some(val => String(val).toLowerCase().includes(query.value.toLocaleLowerCase()))
      );
    });

    function handleUpdateQuery(newValue) {
      query.value = newValue;
    }
    return {
      query,
      filterArticlesBySearch,
      articles,
      filteredArticlesByLetter,
      handleUpdateQuery
    }
  }
}
</script>
