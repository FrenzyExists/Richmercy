<template>
  <div class="comments-section">
    <comment-input @comment-posted="handleCommentPosted" @error="handleError" :issueNumber="issueNumber"
      :octo="this.$props.octo" />

    <div v-if="isLoading">
      Loading comments...
    </div>
    <div v-else-if="error">
      Error loading comments: {{ error.message }}
    </div>
    <div v-else class="comments-list">
      <div v-for="comment in comments">
        <comment-item :key="comment.node_id" :commentObj="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import CommentInput from '@/components/commentinput.vue';
import CommentItem from '@/components/commentitem.vue';
import { useComments } from "@/composables/useComments";

export default {
  name: "CommentsSection",
  components: {
    CommentInput,
    CommentItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    octo: {
      required: true,
    },
  },
  setup(props) {
    const { comments, isLoading, error, fetchComments, ensureIssueExists } = useComments();
    const issueNumber = ref(-1);

    const loadComments = async () => {
      try {
        // Ensure the issue exists and fetch its comments
        issueNumber.value = await ensureIssueExists(props.octo, `Blog: ${props.title}`);
        await fetchComments(props.octo, issueNumber.value);
        console.log(comments);

      } catch (err) {
        console.error("Error loading comments:", err);
      }
    };

    onMounted(loadComments);

    watch(
      () => props.title,
      async (newTitle) => {
        try {
          issueNumber.value = await ensureIssueExists(props.octo, `Blog: ${newTitle}`);
          await fetchComments(props.octo, issueNumber.value);
        } catch (err) {
          console.error("Error fetching comments on title change:", err);
        }
      }
    );

    const handleCommentPosted = (newComment) => {
      comments.value.push(newComment);
    };

    const handleError = (error) => {
      console.error("Error:", error);
    };

    return {
      comments,
      isLoading,
      error,
      issueNumber,
      handleCommentPosted,
      handleError,
    };
  },
};
</script>
