<template>
    <div class="projects">
        <div>
            <div class="flex justify-center gap-2 text-lg py-1 ">
                <RouterLink to="/" v-for="letter of letters">
                    {{ letter }}
                </RouterLink>
            </div>
            <div class="p-8 justify-center">
                <input type="text" class="rounded py-2 px-4 border-gray-300 w-full text-stone-800"
                    placeholder="Find a project!" name="" id="">
            </div>
        </div>

        <h1>Find a way to parse markdown files metadata</h1>
    </div>




    

</template>
  
<script setup>
import { RouterLink } from 'vue-router';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'.split("");






</script>
