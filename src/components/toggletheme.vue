<script setup lang="ts">

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleDark()"
        class="m-auto cursor-pointer rounded-full p-2 text-accent dark:text-dark-accent bg-background dark:bg-dark-background"> 
        <icon-material-symbols:dark-mode-outline v-if="isDark" class="h-6 w-6 m-auto block"/>
        <icon-material-symbols:sunny v-else class="h-6 w-6 m-auto block"/>
    </button>
</template>