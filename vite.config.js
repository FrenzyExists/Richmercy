import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import WebfontDownload from 'vite-plugin-webfont-dl'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'node:path'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'process.env': process.env
  // },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Pages({
      // pagesDir: 'src/pages',
      dirs: ['src/markdown', { dir: resolve(__dirname, './src/pages'), baseRoute: '' }],
      extensions: ['vue', 'md'],
      routeStyle: "nuxt",
    }),
    Markdown({
      builders: [],
      headEnabled: true,
      exposeExcerpt: true,
      exposeFrontmatter: true,
      markdownItSetup(md) {
        md.use(Prism);
      },
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
