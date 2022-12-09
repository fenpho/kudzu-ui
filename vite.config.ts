import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pxtoviewport from 'postcss-px-to-viewport'
import path from 'path'

const pxtoviewportConfig = pxtoviewport({
  viewportWidth: 1366, // 设计稿的视口宽度
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  css: {
    postcss: {
      plugins: [pxtoviewportConfig]
    }
  },
  resolve: {
    alias: {
      '@kudzu': path.resolve(__dirname, './packages')
    }
  }
})
