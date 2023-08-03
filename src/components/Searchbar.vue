<template>
  <div class="search-bar relative flex items-center w-full h-12 rounded bg-color-bg-searchbar overflow-hidden">
    <div class="grid place-items-center h-full w-12 text-color-bg-banner">
      <font-awesome-icon icon="fa-solid fa-search" class="block h-6 w-6" />
    </div>
    <input
      class="font-montserrat-alternate caret-color-acc peer h-full w-full bg-color-bg-searchbar outline-none text-sm text-gray-700 pr-2"
      type="search"
      id=""
      placeholder="Search something..."
      v-model="query"
      @input="emitUpdateQuery"
    />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const query = ref('');

    function emitUpdateQuery() {
      // console.log(`Emitting update:query event with value ${query.value}`);
      emit('update:query', query.value);
    }
    return { query, emitUpdateQuery };
  }
};
</script>

<style>
.search-bar {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}
</style>
