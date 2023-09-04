<template>
    <article class="dark:bg-dark-bg-harder bg-bg-harder dark:border-dark-border border-light-border p-3 md:p-4 lg:p-6 text-base border rounded-lg mb-6">
      <div class="flex">
        <div class="mr-4">
          <div class="dark:bg-dark-bg bg-bg font-medium rounded-lg justify-center items-center flex-col w-9 flex">
            <button type="button"
              class="dark:bg-dark-bg dark:text-dark-text text-text bg-bg dark:hover:text-dark-acc-soft hover:text-acc-soft dark:hover:bg-dark-bg-super-hard hover:bg-bg-super-soft-trans py-1 rounded-t-lg w-full cursor-pointer">
              +
            </button>
            <span class="text-text dark:text-dark-text lg:text-sm lg:px-0 px-1 text-xs">
              {{ score }}
            </span>
            <button type="button"
              class="dark:bg-dark-bg dark:text-dark-text text-text bg-bg dark:hover:text-dark-acc-soft hover:text-acc-soft dark:hover:bg-dark-bg-super-hard hover:bg-bg-super-soft-trans py-1 rounded-b-lg w-full cursor-pointer ">
              -
            </button>
          </div>
        </div>
        <div class="w-full">
          <footer class="justify-between flex w-full items-center mb-2">
            <div class="items-center flex">
              <p class="flex flex-col md:flex-row text-sm items-start text-text dark:text-dark-text">
                <span>{{ author === undefined ? 'Anonymous' : author }}</span>
                <time class="md:ml-2 text-soft dark:text-dark-text-soft text-sm" >{{ dateTime.toLocaleDateString()  }} - {{ dateTime.toLocaleTimeString() }}</time>
              </p>
            </div>
            <button
              class="dark:bg-dark-bg dark:hover:bg-dark-bg-super-hard dark:text-dark-text text-text bg-bg hover:bg-bg-super-hard inline-flex items-center rounded-lg p-2 text-center text-sm">
              <font-awesome-icon icon="fa-solid fa-ellipsis" size="xl" />
            </button>
          </footer>
          <p class="text-text dark:text-dark-text">{{ comment }}</p>
        </div>
      </div>
    </article>
</template>


<script>
export default {
  name: 'reply',
  props: {
    score: {
      type: Number,
      default: 0,
      required: false
    },
    author: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    dateTime: {
      type: Date,
      required: false,
      default: new Date()
    }
  }
}
</script>