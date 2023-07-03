<template>
    <nav class="nav bg-color-bg-soft trans">
        <div class="flex px-2 sm:px-6 lg:px-8 shadow-xl">

            <div class="items-center mx-auto justify-center">

                <div class="relative flex h-16 items-center">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <div @click="isOpen = !isOpen"
                            class="nav-text-icon inline-flex items-center justify-center rounded-md p-2 focus:outline-none text-lg">
                            <font-awesome-icon icon="fa-solid fa-burger" />
                        </div>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                        <div class="hidden sm:ml-6 sm:flex ">
                            <div class="flex flex-shrink-0 items-center">
                                <span class="text-yellow text-4xl mr-3">
                                    <font-awesome-icon icon="fa-solid fa-bolt" class="block h-7 w-auto" />
                                </span>
                                <h1 class="nav-text nav-heading font-semibold tracking-wide text-2xl mr-3 pr-12 select-none">Garcia's</h1>
                            </div>
                            <div class="flex space-x-9">
                                <RouterLink v-for="item in FilteredRoutes" :key="item.name" :to="item.path" :class="[
                                    'nav-text',
                                    'px-1 py-2 rounded-md text-sm font-medium select-none'
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

        <!-- Navbar items for Mobile -->
        <div v-show="isOpen" class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <RouterLink v-for="item in FilteredRoutes" :key="item.name" :to="item.path"
                    :class="[item.current ? 'bg-gray-900 text-white select-none' : 'text-gray-300  hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium select-none']"
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
            isOpen: false,
            FilteredRoutes
        };
    },
    components: { ToggleTheme }
};
const FilteredRoutes = routeArray.filter( (obj) => {return typeof obj.visibleToNav === 'undefined' || obj.visibleToNav})
</script>

<style scoped>
.router-link-active { 
    background-color: var(--color-shadow); 
    color: var(--color-accent-soft) !important;
}
.nav .fa-bolt {
    color: var(--color-accent)
}
.nav-text, .nav-text-icon {
    color: var(--color-text);
}
.nav-text-icon{
    transition: ease-in-out 0.2s;
}
.nav-text-icon:hover {
    color: var(--color-accent);
    
}
.nav-text:hover {
    color: var(--color-accent-soft);
}
.nav-heading:hover {
    color: var(--color-text);
}
</style>