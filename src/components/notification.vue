<template>
    <transition name="fade">
      <div
        v-if="isVisible"
        :class="[
          'fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg transition-opacity',
          typeClass,
        ]"
        role="alert"
      >
        <div class="flex items-center">
          <font-awesome-icon :icon="icon" class="mr-3" />
          <span class="font-medium">{{ message }}</span>
        </div>
        <button
          @click="dismiss"
          class="absolute top-1 right-1 p-2 text-sm text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <font-awesome-icon icon="fa-solid fa-times" />
        </button>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: "NotificationComponent",
    props: {
      message: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "info", // Options: success, warning, error, info
      },
      duration: {
        type: Number,
        default: 3000, // Auto-dismiss after 3 seconds
      },
    },
    data() {
      return {
        isVisible: true,
      };
    },
    computed: {
      typeClass() {
        switch (this.type) {
          case "success":
            return "bg-dark-green text-green-800 border-green-400";
          case "warning":
            return "bg-dark-yellow text-yellow-800 border-yellow-400";
          case "error":
            return "bg-dark-red text-red-800 border-red-400";
          default:
            return "bg-dark-blue text-blue-800 border-blue-400"; // Info as default
        }
      },
      icon() {
        switch (this.type) {
          case "success":
            return "fa-solid fa-circle-check";
          case "warning":
            return "fa-solid fa-triangle-exclamation";
          case "error":
            return "fa-solid fa-circle-xmark";
          default:
            return "fa-solid fa-circle-info";
        }
      },
    },
    mounted() {
      if (this.duration > 0) {
        setTimeout(this.dismiss, this.duration);
      }
    },
    methods: {
      dismiss() {
        this.isVisible = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  