<template>
  <div class="flex">
    <!-- Modal Component -->
    <Modal :isOpen="state?.showModal" title="GitHub Authorization" @close="state.showModal = false">
      <div class="space-y-4">
        <p class="text-dark-text">Copy the GitHub verification code below:</p>
        <span class="w-fit flex bg-dark-bg-super-hard text-dark-text pl-4 rounded-l-lg rounded-r-lg m-auto">
          <p class="m-auto pr-4">{{ state?.userCode }}</p>
          <button class="hover:bg-dark-bg-soft hover:text-dark-text-soft bg-dark-bg-mute p-4 flex rounded-r-lg"
            @click="copyCodeToClipboard">
            <font-awesome-icon icon="fa-solid fa-link" />
          </button>
        </span>
        <p class="text-center text-sm text-dark-text-soft mt-2">
          Verification URL: <span class="text-blue-400 underline cursor-pointer" @click="openVerificationUrl">{{
            state?.verificationURI }}</span>
        </p>
        <p class="text-center text-sm text-dark-text-soft">Expires at: {{
          (() => {
            // console.log('time', state.expiresIn);

            const timeLeft = getTimeLeft(state.expiresIn);
            // console.log(timeLeft);

            return `${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds`
          })()
        }}</p>
      </div>
    </Modal>

    <!-- Comment Form -->
    <form @submit.prevent="handleSubmit" class="w-full mb-6">
      <div class="bg-dark-bg bg-bg border-dark-border border rounded-lg w-full mb-4">
        <!-- Tabs -->
        <div class="px-4 py-2 rounded-t-lg bg-dark-bg-harder">
          <div>
            <ul class="flex">
              <li class="-mb-px mr-2 ml-5 mt-3">
                <a :class="{
                  'bg-dark-bg': selectedTab === 'write',
                  'bg-dark-bg-harder inline-block rounded-t text-dark-text-soft translate-y-1 py-2 px-4 font-semibold': true
                }" @click.prevent="selectedTab = 'write'">
                  Write
                </a>
              </li>
              <li class="mr-1 mt-3">
                <a :class="{
                  'bg-dark-bg': selectedTab === 'preview',
                  'bg-dark-bg-harder inline-block rounded-t text-dark-text-soft translate-y-1 py-2 px-4 font-semibold': true
                }" @click.prevent="selectedTab = 'preview'">
                  Preview
                </a>
              </li>
            </ul>
          </div>
          <!-- Tab Content -->
          <div v-show="selectedTab === 'write'">
            <markdown-editor v-model="replyComment"
              class="min-h-30 h-full text-white bg-dark-bg-harder bg-bg-harder text-sm px-0 border-0 focus:ring-0 w-full"
              placeholder="Write a comment..." />
          </div>
          <div v-show="selectedTab === 'preview'" class="markdown-preview p-4 min-h-[15.5rem]">
            <markdown-preview :content="replyComment" />
          </div>
        </div>

        <!-- Footer Buttons -->
        <div class="text-center py-2 px-4 flex justify-between w-full">
          <button type="button" @click="toggleEmojis"
            class="emoji-trigger flex items-center rounded-full bg-dark-bg-mute text-dark-acc-soft h-fit p-4">
            <font-awesome-icon class="w-auto h-6" icon="face-smile" />
          </button>
          <button v-if="isAuthenticated" :disabled="!replyComment.trim() || isLoading" @click="handleSubmit"
            class="rounded-full py-2 px-3 hover:text-dark-bg-mute text-dark-acc-soft bg-dark-bg-mute hover:bg-dark-acc-soft disabled:opacity-50">
            {{ isLoading ? 'Posting...' : 'Post Comment' }}
          </button>
          <button v-else @click="handleGithubLogin"
            class="flex items-center rounded-full py-2 px-3 hover:text-dark-bg-mute text-dark-acc-soft bg-dark-bg-mute hover:bg-dark-acc-soft">
            <span class="mr-2">Sign in with GitHub</span>
            <font-awesome-icon class="w-auto h-6" icon="fa-brands fa-github" />
          </button>
        </div>

        <!-- Emoji Picker -->
        <div v-show="showEmojis" class="relative m-4">
          <Picker :data="emojiIndex" set="twitter" @select="addEmoji" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useGithubAuth } from '@/composables/usegithubauth';
import { useComments } from '@/composables/usecomments';
import MarkdownEditor from '@/components/markdowneditor.vue';
import MarkdownPreview from '@/components/markdownpreview.vue';
import Modal from '@/components/modal.vue';
import 'emoji-mart-vue-fast/css/emoji-mart.css';
import { Picker, EmojiIndex } from 'emoji-mart-vue-fast/src';
import data from 'emoji-mart-vue-fast/data/all.json';
import { ref, onMounted } from 'vue';

const emojiIndex = new EmojiIndex(data);

export default {
  name: 'CommentInput',
  components: {
    Picker,
    MarkdownEditor,
    MarkdownPreview,
    Modal,
  },
  props: {
    issueNumber: { type: Number, required: true },
    octo: { required: true }, // octocat object to retrieve comments
  },
  setup() {
    const { getCode, state, initialize, getTimeLeft, retrieveToken } = useGithubAuth();
    const { postComment } = useComments();
    const octoUser = ref(null);

    // Initialize octoUser on component mount
    onMounted(async () => {
      try {
        octoUser.value = await initialize();
      } catch (error) {
        console.error('Error initializing octoUser:', error);
      }
    });

    return { getCode, state, postComment, getTimeLeft, retrieveToken, octoUser };
  },
  data() {
    return {
      replyComment: '',
      selectedTab: 'write',
      emojiIndex: emojiIndex,
      showEmojis: false,
      isLoading: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.state.isAuthenticated;
    },
  },
  methods: {
    toggleEmojis() {
      this.showEmojis = !this.showEmojis;
    },
    addEmoji(emoji) {
      this.replyComment += emoji.native;
    },
    async handleSubmit() {
      if (!this.replyComment.trim() || this.isLoading) return;

      this.isLoading = true;
      try {
        if (!this.octoUser) throw new Error('User is not authenticated.');
        const newComment = await this.postComment(this.octoUser, this.issueNumber, this.replyComment);
        if (newComment) {
          this.replyComment = '';
          this.$emit('comment-posted', newComment);
        }
      } catch (error) {
        console.error('Error posting comment:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async handleGithubLogin() {
      if (!this.replyComment.trim() || this.isLoading) return;
      await this.getCode();
      // console.log(this.state);
    },
    async copyCodeToClipboard() {
      navigator.clipboard.writeText(this.state.userCode);
      alert('Code copied to clipboard!');
      this.openVerificationUrl();
      await this.retrieveToken();
    },
    openVerificationUrl() {
      window.open(this.state.verificationURI, '_blank');
    },
  },
};
</script>


<style>
.row {
  display: flex;
}

.row>* {
  margin: auto;
}

.emoji-mart-static {
  width: 100% !important;
}

.emoji-mart {
  background: #1e385f;
  color: #d8e2eb;
  border: 1px solid #0b264d;
}

.emoji-mart-category-label h3 {
  background-color: #1e385f;
}

.emoji-mart-anchor-bar {
  background-color: rgb(229 124 35) !important;
}

/* emoji-mart-anchor emoji-mart-anchor-selected */
.emoji-mart-anchor-selected {
  color: rgb(229 124 35) !important;
}

.emoji-mart-anchors {
  color: #d8e2eb;
}

.emoji-mart-anchor {
  justify-content: center;
  align-items: center;
  display: flex;
}

.emoji-mart-anchor:hover,
.emoji-mart-anchor-selected {
  color: #d3a629;
}

.emoji-mart-search input {
  background: #1e385f;
  border: 1px solid #0b264d;
}

.emoji-mart-skin-swatches {
  border: 1px solid #0b264d;
  background-color: #0b264d;
}

.emoji-mart-bar {
  border: 0 solid #0b264d;
}

.emoji-mart-category .emoji-mart-emoji:hover:before,
.emoji-mart-emoji-selected:before {
  background-color: #0b264d;
}
</style>