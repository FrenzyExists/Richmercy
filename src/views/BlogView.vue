<template>
  <div class="blogs">
    <ByLetter routerName="blogByLetter" :existingArticles="articles" />

    <div class="p-10 justify-center">
      <div
        class="search-bar relative flex items-center w-full h-12 rounded focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
          <font-awesome-icon icon="fa-solid fa-search" class="block h-6 w-6" />
        </div>

        <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="search" id=""
          placeholder="Search something..." v-model="query" />
      </div>
    </div>
    <FeatureBlocks :articles="filteredArticles" />
  </div>
</template>
  
  
<script lang="js">
import ByLetter from '@/components/ByLetter.vue';
import FeatureBlocks from '@/components/FeatureBlocks.vue';
import { ref, computed } from 'vue'

function getArticleInfo() {
  try {
    let a = []
    const entries = Object.entries(import.meta.globEager("../markdown/blog/*.md"));
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
    ByLetter,
    FeatureBlocks
  },
  setup() {
    const query = ref('')
    const articles = getArticleInfo();

    const filteredArticles = computed(() => {
      return articles.filter(
        ({ title }) => [title]
          .some(val => val.toLowerCase().includes(query.value.toLocaleLowerCase()))
      )
    });

    return {
      query,
      articles,
      filteredArticles
    }
  }
}
</script>
  
<style>
.search-bar {
  box-shadow: 0 0 0 1px rgb(14 41 84 / 10%), 0 2px 4px 1px rgba(14, 41, 84, .18);
  border-bottom: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: none;
  border-left: 1px solid transparent;
}
</style>