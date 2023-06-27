<template>
  <div class="mx-10 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-5 mt-4">

    <div v-for="article in articles"
      class="feature-block overflow-hidden text-left z-[2] shadow-sharp">
      <a :href="article.path" class="grid grid-rows-[4rem_2rem_8rem_2rem] text-zinc-600 no-underline p-4 h-full">
        <span
          class="md:hover:text-rose-700 font-heading text-xl font-semibold leading-normal capitalize text-zinc-800 transition-property-color duration-100 ease-out">
          {{ article.title }}
        </span>
        <div class="font-heading flex gap-1 items-center justify-self-start text-sm text-zinc-700">
          <span class="date__label">{{ article.date }} | Status: {{ article.status }}</span>
        </div>
        <p class="font-serif leading-normal text-zinc-700 mb-4 text-lg"> {{ article.description }}</p>
        <div class="flex gap-2 self-end">
          <button v-for="tag in article.tags" :key="tag"
            class="tags font-heading font-medium border-non text-sm no-underline gap-2 py-1 px-2 mt-2 uppercase transition-property-filter duration-200 ease-out cursor-pointer"
            tabindex="0">
            # {{ tag }}
          </button>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: [{ tags: [], date: 'Eternety', description: 'Liminal', title: 'Empty' }]
    }
  }
}
</script>

<style>
.feature-block {
  background-color: var(--color-background-soft);
  box-shadow: -8px 9px 0px 0px rgba(0, 0, 0, 0.3);
}
.feature-block a span {
  color: var(--color-accent);
}
.feature-block a div span {
  color: var(--color-accent-soft);
}
.feature-block a p {
  color: var(--color-text);
}
.tags {
  background-color: var(--color-shadow-soft);
  color: var(--color-text-accent);
  /* #23e550 - green | #667ce2 - blue | #e26666 - red | #a266e2 - purple | #d5e266 - yellow | */
}
</style>