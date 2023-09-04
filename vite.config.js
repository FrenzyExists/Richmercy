import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import WebfontDownload from 'vite-plugin-webfont-dl'
import meta from '@yankeeinlondon/meta-builder'
import Layouts from 'vite-plugin-vue-layouts'
import code from '@yankeeinlondon/code-builder'
import path from 'node:path'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      // md:after:absolute md:after:h-full md:after:-z-10 md:after:w-1/12 md:after:top-0 md:after:right-0 md:before:bg-color-bg-banner md:before:absolute md:before:h-full md:before:-z-10 md:before:w-1/12 md:before:top-0 md:before:right-0
      
      // wrapperClasses: 'min-h-screen py-12 lg:py-12 md:py-12 px-6 about prose max-w-prose prose-p:text-base mx-auto text-lg font-montserrat-alternate font-light article after:absolute',
      builders: [
        code({
          theme: 'base',
        }),
        meta({
        })
      ],
      headEnabled: true,
      exposeExcerpt: true,
      exposeFrontmatter: true,
    }),
    Pages({
      // pagesDir: 'src/pages',
      dirs: ['src/markdown', { dir: resolve(__dirname, './src/pages'), baseRoute: '' },],
      extensions: ['vue', 'md'],
      routeStyle: "nuxt",
    }),
    Layouts(),
    WebfontDownload([
      'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
    ]),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': path.resolve(__dirname, './src/components'),
    }
  },

})
