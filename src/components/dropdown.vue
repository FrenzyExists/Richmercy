<template>
    <div class="relative">
      <button 
        @click="toggleDropdown"
        class="bg-dark-bg hover:bg-dark-bg-super-hard text-dark-text inline-flex items-center rounded-lg p-2 text-center text-sm">
        <slot name="button">
          <font-awesome-icon icon="fa-solid fa-ellipsis" size="xl" />
        </slot>
      </button>
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-dark-bg-harder border-dark-border border rounded-lg shadow-lg z-50">
        <ul class="py-1 text-sm text-dark-text">
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="handleItemClick(item)"
            class="cursor-pointer px-4 py-2 hover:bg-dark-bg-super-hard">
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "Dropdown",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    handleItemClick(item) {
      this.$emit("select", item);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.cursor-pointer {
  cursor: pointer;
}
.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
