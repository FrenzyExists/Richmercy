<template>
    <article class="bg-dark-bg-harder border-dark-border p-3 md:p-4 lg:p-6 text-base border rounded-lg mb-6">
        <div class="flex">
            <div class="mr-4">
                <div class="bg-dark-bg font-medium rounded-lg justify-center items-center flex-col w-9 flex">
                    <button type="button"
                        class="bg-dark-bg text-dark-text hover:text-dark-acc-soft hover:bg-dark-bg-super-hard hover:bg-bg-super-soft-trans py-1 rounded-t-lg w-full cursor-pointer">
                        +
                    </button>
                    <span class="text-dark-text lg:text-sm lg:px-0 px-1 text-xs">
                        {{ commentObj.reactions['+1'] - commentObj.reactions['-1'] }}
                    </span>
                    <button type="button"
                        class="bg-dark-bg text-dark-text hover:text-dark-acc-soft hover:bg-dark-bg-super-hard hover:bg-bg-super-soft-trans py-1 rounded-b-lg w-full cursor-pointer">
                        -
                    </button>
                </div>
            </div>
            <div class="w-full">
                <footer class="justify-between flex w-full items-center mb-2">
                    <div class="items-center flex">
                        <p class="flex flex-col md:flex-row text-sm items-start text-dark-text">
                            <img class="max-w-10 rounded-lg mr-4" :src="commentObj.user.avatar_url" />
                            <span>
                                <p>{{ commentObj.user.login }}</p>
                                <time :datetime="commentObj.created_at">
                                    {{ formattedDate }}
                                </time>
                            </span>
                        </p>
                    </div>
                    <Dropdown v-if="isCommentAuthor" :items="dropdownItems" @select="handleDropdownAction">
                        <template #button>
                            <font-awesome-icon icon="fa-solid fa-ellipsis" size="xl" />
                        </template>
                    </Dropdown>
                </footer>
                <p class="text-dark-text">
                    {{ commentObj.body }}
                </p>
            </div>
        </div>
    </article>
</template>


<script>
import { useComments } from "@/composables/usecomments";
import Dropdown from "@/components/dropdown.vue";
import { useGithubAuth } from "@/composables/usegithubauth";

export default {
    components: { Dropdown },

    props: {
        commentObj: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dropdownItems: [
                { label: "Edit", action: "edit" },
                { label: "Delete", action: "delete" },
            ],
        };
    },
    methods: {
        handleDropdownAction(item) {
            switch (item.action) {
                case "edit":
                    console.log("Edit action triggered for:", this.commentObj);
                    break;
                case "delete":
                    console.log("Delete action triggered for:", this.commentObj);
                    break;
                default:
                    console.log("Unknown action:", item);
            }
        },
    },
    computed: {
        formattedDate() {
            const { formatDate } = useComments(); // Extract formatDate dynamically
            return formatDate(this.commentObj.created_at);
        },
        isCommentAuthor() {
            // const { user } = useGithubAuth();
            // console.log(user.value, 'user');
            // console.log(this.commentObj.user.login);
            
            // return user?.value?.login === this.commentObj.user.login;
            return true
        },
    },
};
</script>



<!--   
  <script lang="js">
  import { useComments } from "@/composables/usecomments";
  import Dropdown from "@/components/Dropdown";


  export default {
    name: "CommentItem",
    components: { Dropdown },
    props: {
      commentObj: {
        type: Object,
        required: true,
      },
    },

    
    
    computed: {
      formattedDate() {
        const { formatDate } = useComments();
        return formatDate(this.commentObj.created_at);
      },
    },
  };
  </script>
   -->