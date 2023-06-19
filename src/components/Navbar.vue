<template>
    <nav class="bg-gray-800">
        <div class="flex px-2 sm:px-6 lg:px-8 shadow-xl">

            <div class="items-center mx-auto  justify-center">

                <div class="relative flex h-16 items-center">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <div @click="isOpen = !isOpen"
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <font-awesome-icon icon="fa-solid fa-burger" />
                        </div>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                        <div class="hidden sm:ml-6 sm:flex ">
                            <div class="flex flex-shrink-0 items-center">
                                <span class="text-yellow text-4xl mr-3">
                                    <font-awesome-icon icon="fa-solid fa-bolt" class="block h-7 w-auto text-yellow-200" />
                                </span>
                                <h1 class="text-2xl mr-3 text-gray-100 pr-12">Garcia's</h1>
                            </div>
                            <div class="flex space-x-9">
                                <RouterLink v-for="item in routeArray" :key="item.name" :to="item.path" :class="[
                                    'text-gray-300 hover:text-sky-200',
                                    'px-1 py-2 rounded-md text-sm font-medium'
                                ]" :aria-current="item.current ? 'page' : undefined">
                                    {{ item.name }}
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToggleTheme />
        </div>

        <div v-show="isOpen" class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <RouterLink v-for="item in routeArray" :key="item.name" :to="item.path"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300  hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">
                    {{ item.name }}
                </RouterLink>
            </div>
        </div>
    </nav>
</template>


<script setup lang="js">
import { RouterLink } from 'vue-router'
import router, { routeArray } from '../router';
import ToggleTheme from './ToggleTheme.vue';
</script>

<script lang="js">
export default {
    name: "Navbar",
    data() {
        return {
            isOpen: false
        };
    },
    components: { ToggleTheme }
};
</script>

<style scoped>
.router-link-active { 
    background-color: rgb(209, 213, 219, 0.1); 
    color: rgb(186 230 253);
}
</style>