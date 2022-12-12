import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pxtoviewport from 'postcss-px-to-viewport'
import path from 'path'
import Markdown from 'vite-plugin-md'
import VueMacros from 'unplugin-vue-macros/vite'

const pxtoviewportConfig = pxtoviewport({
  viewportWidth: 1366, // 设计稿的视口宽度
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue({ include: [/\.vue$/, /\.md$/] }),
        vueJsx: vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
        }),
      },
    }),
    Markdown(),
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
