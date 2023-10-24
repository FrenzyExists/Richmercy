<template>
  <!-- Textarea -->
  <div class="flex">
    <form class="w-full mb-6">
      <!-- Allow user to input some text and format if he's signed in -->
      <div
        v-if="$props.isUserSignedIn"
        class="dark:bg-dark-bg bg-bg dark:border-dark-border border rounded-lg w-full mb-4"
      >
        <div class="px-4 py-2 rounded-t-lg dark:bg-dark-bg-harder bg-bg-harder">
          <textarea
            id="comment"
            rows="4"
            v-model="replyComment"
            class="h-24 min-h-[4rem] text-white dark:bg-dark-bg-harder bg-bg-harder text-sm px-0 border-0 focus:ring-0 w-full"
            placeholder="Write a comment..."
          ></textarea>
        </div>
        <div
          class="border-light-border dark:border-dark-bg border-t px-3 py-2 flex justify-between text-center"
        >
          <div class="text-center flex-wrap flex justify-between w-full">
            <div class="sm:pr-4 items-center flex">
              <button
                type="button"
                class="text-yellow dark:text-dark-yellow flex p-2 rounded cursor-pointer hover:text-white hover:bg-[#4b5563] Y34SQMYAJVIAdOFKA3gG K1PPCJwslha8GUIvV_Cr YPSoR6AXtPgkmylUmcbT avTmsFU5TwHXQh07Ji35 _xQT_qSXfwWf6ZhwRle4 DpMPWwlSESiYA8EE1xKM eCx_6PNzncAD5yo7Qcic DTyjKhtXBNaebZa5L0l9 xotVay0PVtR3gElm6ql5"
              >
                <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-face-laugh" />
              </button>
            </div>
            <div class="dark:border-dark-bg-soft border-[#4b5563] sm:border-l pl-4">
              <button
                @click="$emit('send', replyComment)"
                class="rounded-full py-2 px-3 dark:hover:text-dark-bg-mute dark:text-dark-acc-soft dark:bg-dark-bg-mute dark:hover:bg-dark-acc-soft"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="dark:bg-dark-bg-harder bg-bg dark:border-dark-border border rounded-lg w-full mb-4"
      >
        <!-- T A B S -->
        <div>
          <ul class="flex">
            <li class="-mb-px mr-2 ml-5 mt-3">
              <a
                :class="{
                  'dark:bg-dark-bg': selectedTab === 'signIn',
                  'bg-dark-bg-harder inline-block rounded-t dark:text-dark-text-soft translate-y-1 py-2 px-4 font-semibold': true
                }"
                @click="selectedTab = 'signIn'"
                >Sign in!</a
              >
            </li>
            <li class="mr-1 mt-3">
              <a
                :class="{
                  'dark:bg-dark-bg': selectedTab === 'signUp',
                  'bg-dark-bg-harder inline-block rounded-t dark:text-dark-text-soft translate-y-1 py-2 px-4 font-semibold': true
                }"
                @click="selectedTab = 'signUp'"
                >Sign Up!</a
              >
            </li>
          </ul>
        </div>
        <div v-show="selectedTab === 'signIn'">
          <div
            class="dark:bg-dark-bg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative rounded-b-md"
          >
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-text dark:text-dark-text"
                >Username</label
              >
              <input
                type="text"
                id="username"
                name="username"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-text dark:text-dark-text"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
          </div>
        </div>
        <div v-show="selectedTab === 'signUp'">
          <div
            class="dark:bg-dark-bg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative rounded-b-md"
          >
            <p class="leading-relaxed mb-5 dark:text-dark-text-soft">
              This is just to know who is who, stay anonimous, stay free
            </p>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-text dark:text-dark-text"
                >Username</label
              >
              <input
                type="text"
                id="username"
                name="username"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-text dark:text-dark-text"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-text dark:text-dark-text"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="text-white dark:bg-dark-acc-soft dark:hover:bg-dark-acc bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comment-input',
  data() {
    return {
      replyComment: '',
      selectedTab: 'signIn'
    }
  },
  props: {
    isUserSignedIn: {
      type: Boolean,
      default: false
    }
  }
}
</script>
