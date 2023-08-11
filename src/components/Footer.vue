<template>
  <div class="relative bg-color-acc ">
    <svg class="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-color-acc" preserveAspectRatio="none"
      viewBox="0 0 1440 54">
      <path fill="currentColor"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z">
      </path>
    </svg>
    <div class=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="mb-5">
        <nav class="pt-7 flex flex-wrap justify-center -my-4 font-montserrat-alternate font-semibold">
          <RouterLink v-for="route in otherRoutes" :key="route.name" :to="route.path" class="mx-5 my-2 text-lg tracking-wider leading-7 text-color-text hover:text-color-bg-soft hover:transition duration-300 hover:ease-in-out">
              {{ route.name }}
          </RouterLink>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <a v-for="social in socials" :key="social.icon" :href="social.url">
            <font-awesome-icon class="hover:transition duration-300 hover:ease-in-out drop-shadow-sm w-8 h-7 hover:text-color-bg text-color-bg-soft" :icon="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

const socials = [
  {
    icon: 'fa-brands fa-whatsapp',
    url: 'https://wa.me/1XXXXXXXXXX'
  }, {
    icon: 'fa-brands fa-twitter',
    url: ''
  }, {
    icon: 'fa-brands fa-github',
    url: 'https://github.com/FrenzyExists'
  }
];

const otherRoutes = [
  {
    path: '/contact',
    name: 'Contact'
  }, {
    path: '/cheats',
    name: 'Cheatsheets'
  }, {
    path: '/trinkets',
    name: 'Fun Toys'
  }
];

export default {
  name: "Footer",
  data() {
    return {
      socials,
      otherRoutes
    }
  },
  components: {
    RouterLink
  }
}

</script>