<template>
  <div class="px-4 max-w-2xl m-auto mt-10">
    <div class="flex justify-start mb-6">
      <h2 class="text-white text-2xl font-bold">Discussion ()</h2>
    </div>
    <comment-input @send="(c) => $emit('send', c)" />

    <reply-comment comment="Testing the component or something" />
    <reply-comment v-for="c in comments" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    'comment-input': defineAsyncComponent(() => import('@/components/commentinput.vue')),
    'reply-comment': defineAsyncComponent(() => import('@/components/reply.vue')),
  },
  props: {
    comments: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      pageSize: 25 // for pagination
    }
  },
  methods: {
    submitComment() {
    }
  },
  setup() {
    const GITHUB_API = 'https://api.github.com/';
  }

}

</script>