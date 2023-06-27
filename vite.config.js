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
      wrapperClasses: 'prose prose-p:text-yellow-300 max-w-prose mx-auto lg:text-lg lg:py-12 relative flex min-h-screen flex-col justify-center overflow-hidden py-8 '
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
