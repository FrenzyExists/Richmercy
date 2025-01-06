<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-dark-bg dark:bg-dark-bg rounded-lg w-full max-w-lg p-6">
        <div class="flex justify-between items-center border-b pb-3 border-b-dark-bg-mute">
          <h3 class="text-dark-text text-lg font-bold">{{ title }}</h3>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-800 dark:hover:text-white">
            &times;
          </button>
        </div>
        <div class="mt-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: { type: Boolean, required: true },
      title: { type: String, default: 'Modal' },
      onCancel: { type: Boolean, default: false },
      onConfirm: { type: Boolean, default: false },
    },
    emits: ['close', 'confirm'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
      confirmAction() {
        this.$emit('confirm');
      },
    },
  };
  </script>
  
  <style scoped>
  .dark .bg-dark-bg {
    background-color: #1e293b;
  }
  </style>
  