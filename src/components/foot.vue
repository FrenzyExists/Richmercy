<template>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a
        class="flex title-font font-medium items-center md:justify-start justify-center text-text dark:text-dark-text-soft">
        <font-awesome-icon
          class="mr-2 dark:text-dark-yellow text-yellow block w-8 h-8 p-2 bg-bg-hard dark:bg-dark-bg-hard rounded-full"
          icon="fa-solid fa-bolt" />
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="text-sm text-text dark:text-dark-text sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {{ new
        Date().getFullYear() }}
        Angel Garcia —
        <a href="https://twitter.com/not_pikachu" class="dark:text-dark-blue text-blue ml-1" rel="noopener noreferrer"
          target="_blank">@not_pikachu</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="ml-3 text-acc-soft dark:text-dark-acc-soft hover:opacity-80" 
        v-for="social in socials" :key="social.icon" :href="social.url">
          <font-awesome-icon :icon="social.icon" class="w-5 h-5" />
        </a>
      </span>
    </div>
  </footer>
</template>

<script>

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

export default {
  name: "foot",
  data() {
    return {
      socials,
    }
  },
}

</script>