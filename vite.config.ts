import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const mdPlugin = require('vite-plugin-markdown')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdPlugin({
    mode: 'vue',
  })],
  base: '/syp.github.io/',
})
