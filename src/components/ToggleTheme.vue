<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme"
    class="transition ease-in-out delay-75 toggle-theme cursor-pointer h-7 w-7 rounded-full">
    <font-awesome-icon v-if="darkTheme" class="  w-5 h-5 m-auto block" icon="fa-solid fa-moon" />
    <font-awesome-icon v-else icon="fa-solid fa-sun" class="w-5 h-5 m-auto block" />
  </button>
</template>
  
<script lang="js">
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    console.log(window.__theme)
    if (window.__theme == 'dark') this.darkTheme = true
    
  },
  updated() {
    console.log(window.__theme)
    // This is using a script that is added in index.html
    window.__setPreferredTheme(
      this.darkTheme ? 'dark' : 'light'
    )
  },
}
</script>
  
<style lang="css">
.toggle-theme {
  margin-block: auto;
  color: var(--color-accent-soft);
  background-color: var(--color-background);
  transition: ease-in-out 0.5s;
}

.toggle-theme:hover {
  color: var(--color-accent);
  transition: ease-in-out cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>