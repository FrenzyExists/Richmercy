import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
// import meta from '@yankeeinlondon/meta-builder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      // md:after:absolute md:after:h-full md:after:-z-10 md:after:w-1/12 md:after:top-0 md:after:right-0 md:before:bg-color-bg-banner md:before:absolute md:before:h-full md:before:-z-10 md:before:w-1/12 md:before:top-0 md:before:right-0
      wrapperClasses: 'min-h-screen py-12 lg:py-12 md:py-12 px-6 about prose max-w-prose prose-p:text-base mx-auto text-lg font-montserrat-alternate font-light article after:absolute',
      builders: []
      
    }),
    Pages({
      // pagesDir: 'src/pages',
      dirs: 'src/markdown',
      extensions: ['vue', 'md'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
