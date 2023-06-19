import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

import { faBurger, faLaptopCode, faBolt, faSun, faMoon, faMicrochip, faLayerGroup, faCubes, faDatabase, faGears} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBurger, faLaptopCode, faBolt, faSun, faMoon, faMicrochip, faLayerGroup, faCubes, faDatabase, faGears)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
