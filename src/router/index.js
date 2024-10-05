import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routeArray = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../views/404View.vue')
  },
  {
    path: '/blog/:letter([a-z])',
    name: 'blogByLetter',
    component: () => import('../views/ByListBlogView.vue')
  }
].concat(setupLayouts(generatedRoutes))

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

export { routeArray }
export default router
