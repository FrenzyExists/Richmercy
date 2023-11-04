<script lang="ts">
export default {
  name: 'foot'
}
</script>

<template>
    <footer class="bg-background-mute dark:bg-dark-background-mute">
      <div class="relative -mb-3">
        <svg
          class="text-background-mute dark:text-dark-background-mute absolute top-0 w-full h-6 sm:-mt-10 sm:h-16 m-auto"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          ></path>
        </svg>
      </div>
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col z-10 relative">
        <a
          class="text-text-soft dark:text-dark-text-soft flex title-font font-medium items-center md:justify-start justify-center"
        >
          <icon-material-symbols-electric-bolt 
          class="bg-background-hard dark:bg-dark-background-hard dark:text-dark-yellow text-yellow  mr-2 block w-10 h-10 p-1 rounded-full"/>
          <span class="ml-3 text-xl">Garcia's</span>
        </a>
        <p
          class="text-sm text-text dark:text-dark-text sm:border-accent dark:sm:border-dark-accent sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4"
        >
          © {{ new Date().getFullYear() }}
          Angel Garcia —
          <a
            href="https://twitter.com/not__pikachu"
            class="dark:text-dark-blue text-blue ml-1"
            rel="noopener noreferrer"
            target="_blank"
            >@not__pikachu</a
          >
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://github.com/FrenzyExists"
          class="text-accent-soft dark:text-dark-accent-soft ml-3 hover:opacity-80">
            <icon-mdi-github-box class="w-7 h-7"/>
          </a>
          <a href="https://www.hackerrank.com/profile/frenzyexists"
          class="text-accent-soft dark:text-dark-accent-soft ml-3 hover:opacity-80">
            <icon-cib-hackerrank class="w-7 h-7"/>
          </a>
          <a href="https://www.linkedin.com/in/angel-luis-garcia/"
          class="text-accent-soft dark:text-dark-accent-soft ml-3 hover:opacity-80">
            <icon-mdi-linkedin class="w-7 h-7"/>
          </a>
        </span>
      </div>
    </footer>
  </template>