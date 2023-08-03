import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

import { faBurger, faLaptopCode, faBolt, faSun, faMoon, faMicrochip, faLayerGroup, faCubes, faDatabase, faGears, faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// app.directive('markdown', markdown)
app.directive('markdown', {
    beforeUpdate: async (el, binding) => {
        console.log("Me before Updating")
    },
    updated: async (el, binding) => {
        console.log("Me when updating or something")
    },
    beforeMount: async(el, binding) => {
        console.log("Me before i even get mounted")
    },
    mounted: async (el, binding) => {
        console.log("Me once I got mounted")
    }
}
)

/* add icons to the library */
library.add(faBurger, faLaptopCode, faBolt, faSun, faMoon, faMicrochip, faLayerGroup, faCubes, faDatabase, faGears, faSearch, faGithub, faWhatsapp, faTwitter, faChevronRight)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
