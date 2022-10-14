import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/syp.github.io/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/var.scss";'
      }
    }
  }
})
