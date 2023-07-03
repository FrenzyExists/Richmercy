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
      wrapperClasses: 'min-h-screen py-12 lg:py-12 md:py-12 px-6 about prose max-w-prose prose-p:text-base mx-auto font-whyte font-light '
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
