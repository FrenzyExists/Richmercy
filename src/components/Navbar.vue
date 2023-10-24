<template>
  <transition name="slide">
    <nav v-show="showNav" class="select-none top-0 fixed z-20 w-full">
      <div
        class="dark:bg-dark-bg-hard bg-bg-hard relative z-20 flex place-items-center place-content-evenly px-2 sm:px-6 lg:px-8 shadow-xl"
      >
        <div class="mx-auto justify-center">
          <div class="relative z-50 flex h-16 items-center">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <div
                @click="isOpen = !isOpen"
                class="cursor-pointer text-color-text hover:text-color-acc inline-flex items-center justify-center rounded-md focus:outline-none text-lg"
              >
                <font-awesome-icon
                  class="dark:text-dark-acc-soft text-acc-soft"
                  icon="fa-solid fa-burger"
                />
              </div>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:flex font-montserrat-alternate">
                <div class="flex flex-shrink-0 items-center">
                  <span class="text-4xl">
                    <font-awesome-icon
                      class="mr-2 dark:text-dark-yellow text-yellow block h-7 w-auto"
                      icon="fa-solid fa-bolt"
                    />
                  </span>
                  <h1
                    class="text-acc dark:text-dark-acc font-extrabold italic tracking-wide text-2xl mr-3 pr-12"
                  >
                    <a href="/">Garcia's</a>
                  </h1>
                </div>
                <div class="flex space-x-9">
                  <RouterLink
                    v-for="item in FilteredRoutes"
                    :key="item.name"
                    :to="item.path"
                    active-class="bg-bg-harder dark:bg-dark-bg-harder dark:!text-dark-acc !text-acc !font-bold"
                    class="dark:text-dark-text text-text hover:text-acc dark:hover:text-dark-acc block px-3 py-2 text-base font-medium rounded-md"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    {{ item.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <darkmode />
      </div>

      <!-- Navbar items for Mobile -->
      <transition name="slide" class="dark:bg-dark-bg-mute bg-bg-mute rounded-b-lg">
        <div v-show="isOpen" class="sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <RouterLink
              v-for="item in $props.FilteredRoutes"
              :key="item.name"
              :to="item.path"
              active-class="bg-bg-soft dark:bg-dark-bg-soft dark:!text-dark-acc !text-acc"
              class="transition-colors dark:text-dark-text text-text hover:text-acc dark:hover:text-dark-acc block px-3 py-2 rounded-md text-base font-medium"
              :class="{ active: $route.matched.some(({ name }) => name === item.path) }"
              :aria-current="item.current ? 'page' : undefined"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>
  </transition>
</template>

<script lang="js">
import { RouterLink } from 'vue-router'
import { defineAsyncComponent } from 'vue';

export default {
  name: "Navbar",
  mounted() {
    window.addEventListener('scroll', this.hideNavbar);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.hideNavbar);
  },
  props: {
    FilteredRoutes: {
      type: Array,
      required: true,
      default: [{ name: 'Home', path: '/' }]
    }
  },
  methods: {
    hideNavbar() {
      const scrollY = document.documentElement.scrollTop;
      if (scrollY > 160) {
        this.$data.showNav = false;
      } else {
        this.$data.showNav = true;
      }
    }
  },
  data() {
    return {
      isOpen: false,
      showNav: true,
    };
  },
  components: {
    darkmode: defineAsyncComponent(() => import('@/components/toggletheme.vue'))
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: 0.6s cubic-bezier(0.68, 0.6, 0.32, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
