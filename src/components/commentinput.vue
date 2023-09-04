<template>
  <!-- Textarea -->
  <div class="flex">
    <form class="w-full mb-6">
      <div class="dark:bg-dark-bg bg-bg dark:border-dark-border border rounded-lg w-full mb-4">
        <div class="px-4 py-2 rounded-t-lg dark:bg-dark-bg-harder bg-bg-harder ">
          <textarea id="comment" rows="4" v-model="replyComment"
            class="h-24 min-h-[4rem] text-white dark:bg-dark-bg-harder bg-bg-harder text-sm px-0 border-0 focus:ring-0 w-full"
            placeholder="Write a comment..."></textarea>
        </div>
        <div class="border-light-border dark:border-dark-bg border-t px-3 py-2 flex justify-between text-center">
          <div class="text-center flex-wrap flex justify-between w-full">
            <div class="sm:pr-4 items-center flex">
              <button type="button"
                class="text-yellow dark:text-dark-yellow flex p-2 rounded cursor-pointer hover:text-white hover:bg-[#4b5563]  Y34SQMYAJVIAdOFKA3gG K1PPCJwslha8GUIvV_Cr YPSoR6AXtPgkmylUmcbT avTmsFU5TwHXQh07Ji35 _xQT_qSXfwWf6ZhwRle4 DpMPWwlSESiYA8EE1xKM eCx_6PNzncAD5yo7Qcic DTyjKhtXBNaebZa5L0l9 xotVay0PVtR3gElm6ql5">
                <font-awesome-icon class="w-5 h-5" icon="fa-solid fa-face-laugh" />
              </button>
            </div>
            <div class="dark:border-dark-bg-soft border-[#4b5563] sm:border-l pl-4">
              <button @click="$emit('send', replyComment)"
                class="rounded-full py-2 px-3 dark:hover:text-dark-bg-mute dark:text-dark-acc-soft dark:bg-dark-bg-mute dark:hover:bg-dark-acc-soft">Post
                Comment</button>
            </div>
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
      replyComment: ''
    }
  }
}
</script>