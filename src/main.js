import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './styles/style.css'
import router from './router'

import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBurger,
  faLaptopCode,
  faLink,
  faBolt,
  faSun,
  faMoon,
  faMicrochip,
  faEnvelope,
  faSearch,
  faChevronRight,
  faEllipsis,
  faCommentDots,
  faFaceLaugh,
  faClock,
  faTerminal,
  faCheck,
  faPaperPlane,
  faStar,
  faCodeFork
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faJava,
  faPython,
  faGit,
  faVuejs,
  faReact,
  faWordpress,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'

App.name = "Pikachu's Portfolio"

const app = createApp(App)
const head = createHead()

library.add(
  faGithub,
  faCheck,
  faJava,
  faPython,
  faGit,
  faVuejs,
  faReact,
  faWordpress,
  faNodeJs,
  faTerminal,
  faWhatsapp,
  faLinkedin,
  faBurger,
  faSearch,
  faChevronRight,
  faEllipsis,
  faFaceLaugh,
  faPaperPlane,
  faTwitter,
  faLink,
  faCommentDots,
  faLaptopCode,
  faBolt,
  faSun,
  faMoon,
  faMicrochip,
  faClock,
  faEnvelope,
  faStar,
  faCodeFork
)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(head)
app.use(router)
app.mount('#app')
