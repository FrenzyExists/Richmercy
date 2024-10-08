<template>
  <navbar
    :FilteredRoutes="[
      { name: 'about', path: '/about' },
      { name: 'blog', path: '/blog' },
      { name: 'projects', path: '/projects'}
    ]"
  />
  <div class="font-montserrat-alternate py-8 flex flex-col justify-center relative lg:py-12">
    <div
      class="-mb-5 article dark:bg-dark-bg-mute rounded-none lg:rounded-xl bg-bg-mute relative w-full px-5 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mb-7 md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28"
    >
      <div class="max-w-prose mx-auto lg:text-lg prose prose-toy-story dark:prose-invert">
        <div class="mb-8">
          <a
            v-for="items in tags"
            href="#"
            class="no-underline text-blue dark:text-dark-blue dark:hover:bg-dark-bg hover:bg-bg dark:bg-dark-bg-hard bg-bg-hard font-medium text-sm px-3 py-1 mb-3 mr-3 rounded-md"
            >{{ items }}</a
          >
        </div>
        <div class="text-center text-text-soft dark:text-dark-text-soft">
          <time><span class="font-bold">Published </span> {{ date }}</time>
        </div>
        <h1
          class="after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto dark:after:bg-dark-acc after:bg-acc after:h-1 after:w-64 relative pb-7 text-text dark:text-dark-text italic tracking-wide font-semibold mb-8 text-center"
        >
          {{ title }}
        </h1>
        <div class="flex items-center py-1 mb-3 justify-between">
          <div class="">
            <font-awesome-icon
              class="mr-2 dark:text-dark-green text-green"
              icon="fa-solid fa-clock"
            />
            <span class="dark:text-dark-text-soft text-text-soft">Readtime: {{ readtime }}</span>
          </div>
          <a
            href="#"
            class="dark:text-dark-text-soft text-text-soft no-underline font-medium text-sm flex items-center"
            ><font-awesome-icon
              class="mr-2 dark:text-dark-text-soft text-text-soft"
              icon="fa-solid fa-comment-dots"
            />
            N Comments</a
          >
        </div>

        <div class="flex items-center">
          <aside>
            <a
              href="#"
              class="no-underline text-red-soft dark:text-dark-red-soft bg-bg-mute dark:bg-dark-bg-mute dark:hover:text-dark-acc-soft dark:hover:bg-dark-bg-super-soft-trans border mr-2 items-center dark:border-dark-bg-hard border-bg-super-soft-trans font-medium text-sm px-3 py-2 rounded-lg inline-flex"
              ><font-awesome-icon
                class="mr-2 dark:text-dark-blue text-blue"
                icon="fa-brands fa-twitter"
              />
              tweet</a
            >
            <a
              href="#"
              class="no-underline text-blue-soft dark:text-dark-blue-soft bg-bg-mute dark:bg-dark-bg-mute dark:hover:text-dark-acc-soft dark:hover:bg-dark-bg-super-soft-trans border mr-2 items-center dark:border-dark-bg-hard border-bg-super-soft-trans font-medium text-sm px-3 py-2 rounded-lg inline-flex"
              ><font-awesome-icon
                class="mr-2 dark:text-dark-red text-red"
                icon="fa-solid fa-link"
              />
              share</a
            >
          </aside>
        </div>
        <p class="lead font-semibold">{{ description }}</p>
      </div>
      <div class="mt-8 prose prose-toy-story mx-auto lg:prose-lg dark:prose-invert">
        <router-view v-slot="{ Component }">
          <component :is="Component" ref="current" />
        </router-view>
      </div>
    </div>
    <comments-section :uuid="articleUUID" />
  </div>
  <foot />
</template>

<script lang="js">
import { defineAsyncComponent, ref } from 'vue'

let articleUUID = 0;

export default {
  components: {
    'comments-section': defineAsyncComponent(() => import('@/components/commentsection.vue')),
    'navbar': defineAsyncComponent(() => import('@/components/navbar.vue')),
    'foot': defineAsyncComponent(() => import('@/components/foot.vue')),
  },
  mounted() {
    this.date = this.$refs.current.frontmatter.date
    this.title = this.$refs.current.frontmatter.title
    this.tags = this.$refs.current.frontmatter.tags
    this.description = this.$refs.current.frontmatter.description
    this.readtime = this.$refs.current.frontmatter.readtime
  },
  beforeCreate() {
    this.articleUUID = articleUUID.toString();
    articleUUID += 1;
  },
  data() {
    return {
      articleUUID,
      title: '',
      date: '',
      tags: [],
      readtime: '',
      description: ''
    }
  },
  setup() {
    const current = ref()
    return {
      current
    }
  },
}
</script>
