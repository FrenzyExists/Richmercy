<template>
  <div class="absolute top-3 flex w-full">
    <toggle/>
  </div>
  <div
  class="dark:bg-dark-bg-hard bg-bg-hard w-full h-full grid place-items-center overflow-hidden xs:mt-0 mt-12 ">
    <h1 class="font-montserrat-alternate select-none flex flex-col text-center">
    <h1 class="animate-based-spin p-0 text-9xl font-extrabold dark:text-dark-acc text-acc">404</h1>
    <h1 class="font-medium text-lg py-2 text-acc-soft dark:text-dark-acc-soft pt-16">An error as occured.</h1>
    <h1 class="pb-4 text-2xl font-extrabold text-text dark:text-dark-text"><span>(╯°□°）╯︵ ┻━┻</span></h1>
    <div class="text-lg contents">
      <button v-on:click="$router.back()" 
      class="dark:hover:ring-dark-bg-soft hover:ring-bg-soft hover:ring-4 rounded-full drop-shadow-md my-4 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]"
      >Back</button>
      <button v-on:click="$router.push({path: '/'})" 
      class="dark:hover:ring-dark-bg-soft hover:ring-bg-soft hover:ring-4 rounded-full drop-shadow-md my-4 sm:my-0 font-bold text-lg hover:transition duration-300 hover:ease-in-out hover:bg-acc-soft hover:text-bg-soft text-acc-soft dark:hover:text-dark-bg-soft dark:bg-dark-bg-soft dark:text-dark-acc-soft dark:hover:bg-dark-acc-soft bg-bg-soft p-4 min-w-[10rem]"
      >Back to Home</button>
    </div>
  </h1>
  </div>
</template>

<script  lang="js">
import {defineAsyncComponent} from 'vue'
export default {
  components: {
    'toggle': defineAsyncComponent(() => import('@/components/toggletheme.vue')),
  }
}
</script>

<script setup lang="js">
import { useHead } from '@unhead/vue';
useHead({
  title: 'The Backrooms',
});
</script>