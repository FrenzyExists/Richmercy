import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes2 = setupLayouts(generatedRoutes)
const marky = routes2.map(v => ({ ...v, visibleToNav: false }))

const routeArray = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }, {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectView.vue')
  }, {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  }, {
    path: "/projects/:letter",
    name: "projectByLetter",
    component: () => import('../views/ByListProjectView.vue'),
    visibleToNav: false
  }, {
    path: "/blog/:letter",
    name: "blogByLetter",
    component: () => import('../views/ByListBlogView.vue'),
    visibleToNav: false
  }, {
    path: "/:pathMatch(.*)",
    name: "404",
    component: () => import('../views/404View.vue'),
    visibleToNav: false
  }
].concat(marky)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeArray,
  scrollBehavior(to, from, savePosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export { routeArray, marky }
export default router