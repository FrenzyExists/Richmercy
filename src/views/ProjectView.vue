<template>
  <div class="bg-color-bg-soft lg:mx-36 md:mx-14">
    <ByLetter routerName="projectByLetter" :existingArticles="articles" />

    <div class="p-10 justify-center">
      <Searchbar :query.sync="query" @update:query="handleUpdateQuery" />
    </div>
    <FeatureBlocks :articles="filteredArticles" />
    <!-- <vue-utterances repo="khalby786/vue-utterances" theme="gruvbox-dark" issue-term="pathname" /> -->
  </div>
</template>


<script lang="js">
import ByLetter from '@/components/ByLetter.vue';
import FeatureBlocks from '@/components/FeatureBlocks.vue';
import Searchbar from '@/components/Searchbar.vue';
// import VueUtterances from '@/components/Comments.vue'
import { ref, computed } from 'vue'

function getArticleInfo() {
  try {
    let a = []
    const entries = Object.entries(import.meta.globEager("../markdown/project/*.md"));
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
    FeatureBlocks,
    Searchbar
    // VueUtterances
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

    function handleUpdateQuery(newValue) {
      query.value = newValue;
    }

    return {
      query,
      articles,
      filteredArticles,
      handleUpdateQuery
    }
  }
}
</script>