<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme"
    class="transition ease-in-out delay-75 toggle-theme cursor-pointer bg-slate-100 bg-opacity-10 h-7 w-7 rounded-full">
    <font-awesome-icon v-if="darkTheme" class="w-5 h-5 m-auto block" icon="fa-solid fa-moon" />
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
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>
  
<style lang="css">
.toggle-theme {
  margin-block: auto;
  color: var(--color-text);
}

.toggle-theme:hover {
  color: var(--color-border-hover);
}
</style>