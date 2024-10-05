<template>
  <div class="px-4 max-w-2xl w-full m-auto mt-10">
    <div class="flex justify-start mb-6">
      <h2 class="text-white text-2xl font-bold">Discussion ()</h2>
    </div>
    <!-- Retrieve User information -->
    <comment-input @send="(c) => $emit('send', c)" />

    <!-- <reply-comment comment="Testing the component or something" /> -->
    <!-- <reply-comment v-for="c in comments" /> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { Octokit } from "octokit";
// import { internal } from '@hapi/boom';

export default {
  components: {
    'comment-input': defineAsyncComponent(() => import('@/components/commentinput.vue')),
    'reply-comment': defineAsyncComponent(() => import('@/components/reply.vue'))
  },
  props: {

  },
  data() {
    return {
      pageSize: {
        required: false,
        type: Number
      } // for pagination
    }
  },
  methods: {
    async login(token) {
      const auth = new Octokit({
        auth: token
      });
      try {
        auth.users.getAuthenticated();
      } catch (error) {
        console.log('error: ', error);
        // result(internal(error.message), null);
      }
      return auth;
    },
    async authenticateUser() {

    },
    async userSignIn() {

    },
    async userSignUp() {

    },
    async postComment() {

    },
    async loadComments() {

    },
    async loadReplies() {

    }
  },
  setup() {
    const GITHUB_API = 'https://api.github.com/'
  }
}

/** Notes to self for the future
 * 
 * We want the user to be able to log in to their github account and maintain a session, which will be useful
 * for the comments system. But not only that, we can use that for the API.
 * 
 * The API won't handle the comment system as I planned. The reason is because I will need to use the github API
 * to scrap my own projects and show that info in the front page. So its best to maximize the use of that api
 * on what is possible.
 * 
 * That doesn't mean i will scrap the idea of having my own Database with API served along my portfolio site.
 * I think I could take the exact same idea and apply it for my booking API remix and my pokedex API.
 * 
 * The comments will take advantage of the github issues. The idea is that a private repo will contain the comments 
 * of each article which said "issue" is identified by a given uuid that is stored permanently in the app somehow. 
 * I could transfer the exact same feature to my other apps, or even to whatever app i may need to create for the 
 * CAPSTONE.
 * 
 * Once I got a rough demo for my Booking frontend app i can safely remove the DB i have here. I think that would eliminate around
 * 100+ packages or so.
 * 
 * I better hurry up with that tho, since i want to get over that and focus on some embedded systems projects i have in mind.
 * 
 * I know, sometimes i overcomplicate myself, but hey, that's how i learn, its all about experimentation.
 * 
 */
</script>

