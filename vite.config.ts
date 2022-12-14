import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pxtoviewport from 'postcss-px-to-viewport' // 自适应vh、vw
import path from 'path'
import Markdown from 'vite-plugin-md' // markdown解析
import VueMacros from 'unplugin-vue-macros/vite' // vue 宏定义defineOptions等

const pxtoviewportConfig = pxtoviewport({
  viewportWidth: 1366, // 设计稿的视口宽度
})

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'KudzuUi',
      // the proper extensions will be added
      fileName: 'kudzu-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
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
      '@kudzu': path.resolve(__dirname, 'packages'),
      '@examples': path.resolve(__dirname, 'examples'),
    }
  }
})
