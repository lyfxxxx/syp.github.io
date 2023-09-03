import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin, { contentEnum } from 'vite-plugin-easy-markdown'
import hljs from 'highlight.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdPlugin({
    markdownItOptions: {
      html: true,
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value
          } catch (e) {
            console.log(e)
          }
        }
        return '' // use external default escaping
      }
    }
  })],
  base: '/syp.github.io/',
})
