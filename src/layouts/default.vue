<template>
  <div class="pb-24 pt-12">
    <navbar />

    <article
      class="shadow-strong article m-auto py-4 px-8 w-fit border dark:border-dark-border dark:bg-dark-bg-super-soft rounded-xl after:absolute">
      <!-- prose prose-toy-story dark:prose-invert
    dark:bg-dark-bg-super-soft rounded-xl m-auto font-montserrat-alternate font-light after:absolute -->
      <aside>
        
      </aside>
      <main class="prose prose-toy-story dark:prose-invert m-auto font-montserrat-alternate font-light">
        <div>
          <div class="mb-8">
            <a v-for="items in tags" href="#"
              class="no-underline hover:bg-[#93c5fd] text-[#1e40af] dark:text-blue dark:bg-dark-bg-mute bg-[#bfdbfe] font-medium text-sm px-3 py-1 mb-3 mr-3 rounded-md">{{
                items }}</a>
          </div>
          <h1 class="mb-8">{{ title }}</h1>
          <div class="flex items-center py-1 mb-3 justify-between">
            <div class="">
              <font-awesome-icon class="mr-2 dark:text-dark-green text-green" icon="fa-solid fa-clock" />
              <time class="dark:text-dark-text-soft text-dark-text-soft" pubdate="" datetime="2022-03-08" title="August 3rd, 2022">{{
                date }}</time>
            </div>
            <a href="#" class="dark:text-dark-text-soft text-text-soft no-underline font-medium text-sm flex items-center"><font-awesome-icon class="mr-2 dark:text-dark-text-soft text-text-soft" icon="fa-solid fa-comment-dots" /> N Comments</a>
          </div>

          <div class="flex items-center">
            <aside>
              <a href="#"
                class="no-underline text-text dark:text-dark-text-soft bg-bg-mute dark:bg-dark-bg-mute dark:hover:text-dark-acc-soft dark:hover:bg-dark-bg-super-soft-trans border mr-2 items-center border-bg-super-soft-trans font-medium text-sm px-3 py-2 rounded-lg inline-flex"><font-awesome-icon
                  class="mr-2 dark:text-dark-blue text-blue" icon="fa-brands fa-twitter" /> tweet</a>
              <a href="#"
                class="no-underline text-text dark:text-dark-text-soft bg-bg-mute dark:bg-dark-bg-mute dark:hover:text-dark-acc-soft dark:hover:bg-dark-bg-super-soft-trans border mr-2 items-center border-bg-super-soft-trans font-medium text-sm px-3 py-2 rounded-lg inline-flex"><font-awesome-icon
                  class="mr-2 dark:text-dark-red text-red" icon="fa-solid fa-link" /> share</a>
            </aside>
          </div>
          <p class="lead">{{ description }}</p>
        </div>
        <router-view v-slot="{ Component }">
          <component :is="Component" ref="current" />
        </router-view>
      </main>
      <comment/>
    </article>

    <comments-section  />


  </div>
</template>


<script lang="js">
import { defineAsyncComponent, ref } from 'vue'

export default {
  components: {
    'comments-section': defineAsyncComponent(() => import('@/components/commentsection.vue'))
  },
  mounted() {

    this.date = this.$refs.current.frontmatter.date
    this.title = this.$refs.current.frontmatter.title
    this.tags = this.$refs.current.frontmatter.tags
    this.description = this.$refs.current.frontmatter.description
  },
  data() {
    return {
      title: '',
      date: '',
      tags: []
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

