import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import WebfontDownload from 'vite-plugin-webfont-dl'
import Layouts from 'vite-plugin-vue-layouts'
import path from 'node:path'
import { resolve } from 'path'
import { env } from 'node:process'


// const env = loadEnv(mode, process.cwd(), '')
export default defineConfig({
  define: {
    'process.env': process.env,
  },
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
  optimizeDeps: {
    exclude: ['@octokit_core.js']
  },
  server: {
    proxy: {
      '/login/device/code': {
        target: 'https://github.com',
        changeOrigin: true, // Ensures the origin header is correct
        secure: false, // Allows insecure connections (if HTTPS is not set up)
        rewrite: (path) => path.replace(/^\/login/, '/login'), // Rewrite the path for the target
      },
      '/login/oauth/access_token': {
        target: 'https://github.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/login\/oauth/, '/login/oauth'), // Rewrite to match the GitHub API path
      },
      '/github-api': {
        target: 'https://api.github.com',
        changeOrigin: true, // Correctly set the origin header
        secure: false, // Allow insecure connections (if necessary)
        rewrite: (path) => path.replace(/^\/github-api/, ''), // Remove '/github-api' prefix
      },
    },
  },
});
