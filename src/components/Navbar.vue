<template >
  <transition name="slide">
    <nav v-show="showNav" class="select-none top-0 fixed z-20 w-full ">
      <div class="bg-color-bg-nav relative z-20 flex px-2 sm:px-6 lg:px-8 shadow-xl">
        <div class="mx-auto justify-center">
          <div class="relative z-50 flex h-16 items-center">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <div @click="isOpen = !isOpen"
                class="cursor-pointer text-color-text hover:text-color-acc inline-flex items-center justify-center rounded-md p-2 focus:outline-none text-lg">
                <font-awesome-icon icon="fa-solid fa-burger" />
              </div>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:flex font-montserrat-alternate">
                <div class="flex flex-shrink-0 items-center">
                  <span class="text-yellow text-4xl mr-3">
                    <font-awesome-icon icon="fa-solid fa-bolt" class="text-color-acc block h-7 w-auto" />
                  </span>
                  <h1 class="text-color-red font-semibold tracking-wide text-2xl mr-3 pr-12">
                    Garcia's</h1>
                </div>
                <div class="flex space-x-9">
                  <RouterLink v-for="item in FilteredRoutes" :key="item.name" :to="item.path"
                    class='hover:text-color-acc-soft transition-colors px-1 text-color-text py-2 rounded-md text-sm font-medium'
                    :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToggleTheme />
      </div>

      <!-- Navbar items for Mobile -->
      <transition name="slide" class="bg-color-bg-mute rounded-b-lg">
        <div v-show="isOpen" class="sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <RouterLink v-for="item in FilteredRoutes" :key="item.name" :to="item.path"
              class='transition-colors text-color-text hover:text-color-acc-soft block px-3 py-2 rounded-md text-base font-medium'
              :aria-current="item.current ? 'page' : undefined">
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
import { routeArray } from '../router';
import { defineAsyncComponent } from 'vue';
export default {
  name: "Navbar",
  mounted() {
    window.addEventListener('scroll', this.hideNavbar);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.hideNavbar);
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
      FilteredRoutes
    };
  },
  components: {
    ToggleTheme: defineAsyncComponent(() => import('@/components/ToggleTheme.vue'))
  }
};
const FilteredRoutes = routeArray.filter((obj) => { return typeof obj.visibleToNav === 'undefined' || obj.visibleToNav })
</script>

<style scoped>
.router-link-active {
  background-color: var(--color-shadow);
  color: var(--color-accent-soft) !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>