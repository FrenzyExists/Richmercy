<template>
  <div class="mx-10 grid grid-cols-[repeat(auto-fill,minmax(21.3rem,1fr))] gap-5 mt-4">
    <div v-for="article in articles"
      class="feature-block overflow-hidden text-left z-[2] rounded-xl font-montserrat-alternate">
      <a :href="article.path" class="relative grid grid-rows-[4rem_2rem_8rem_2rem] bg-color-bg-searchbar no-underline h-full">
        <span
          class="text-color-acc article-title px-3 items-center flex bg-color-bg-tag-container md:hover:text-rose-700 font-heading text-xl font-semibold leading-normal capitaliz transition-property-color duration-100 ease-out">
          {{ article.title !== undefined ? article.title : 'Untitled' }}
        </span>
        <div class="font-heading justify-self-end px-3 flex gap-1 items-center text-xs -rotate-1">
          <span class="text-color-green">{{ article.date !== undefined ? article.date : 'no date'}}</span>
          <font-awesome-icon class="text-color-acc-soft text-lg mx-1" icon="fa-solid fa-chevron-right" />
          <span class="text-color-red">status: {{ article.status !== undefined ? article.status : 'Article' }}</span>
        </div>
        <p class="leading-normal italic px-3 text-color-text-acc mb-4 text-sm pt-[0.35rem]"> {{ article.description !== undefined ? article.description : 'no proper description at the moment' }}</p>
        <div class="flex gap-2 self-end tags bg-color-bg-tag-container after:h-full after:w-full after:absolute after:top-0 after:left-0 opacity-75 pt-5 pb-2 after:-z-50 px-2">
          <!-- tags font-heading font-medium border-non text-sm no-underline gap-2 py-1 px-2 mt-2 uppercase transition-property-filter duration-200 ease-out cursor-pointer -->
          <button v-for="tag in article.tags" :key="tag"
            class="tag-btn block bg-color-bg-tag italic font-bold rounded-full px-[0.85em] py-[0.30em]"
            tabindex="0">
            #{{ tag }}
          </button>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="js">
import { onMounted, onUnmounted, ref, defineProps } from 'vue';

export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const moreTag = ref('...');
    console.log(props.articles);
  }
}
</script>

<style>
.feature-block {
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
}
.tags {
  /* #23e550 - green | #667ce2 - blue | #e26666 - red | #a266e2 - purple | #d5e266 - yellow | */
  clip-path: polygon(0 20%, 125% 0, 100% 100%, 0 100%);
}
.article-title {
  clip-path: polygon(0 0%, 100% 0, 100% 85%, 0 100%);
}
.tag-btn {
  transition: transform 0.2s, background-color 0.25s;
}
.tag-btn:hover {
  transform: scale(1.2);
  background: linear-gradient(to right, #4270E8, #4270E8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>