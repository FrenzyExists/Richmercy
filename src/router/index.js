import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routes from '~pages'

const markdownRoutes = routes.map(v => ({...v, visibleToNav: false}))

const routeArray = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: "/projects/:letter",
    name: "projectByLetter",
    component: () => import('../views/ByListView.vue'),
    visibleToNav: false
  },
  {
    path: "/blog/:letter",
    name: "blogByLetter",
    component: () => import('../views/ByListView.vue'),
    visibleToNav: false
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import('../views/404View.vue'),
    visibleToNav: false
  }
].concat(markdownRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeArray
})

export { routeArray }
export {markdownRoutes}
export default router
