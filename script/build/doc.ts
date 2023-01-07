import base from './base'
import { defineConfig } from 'vite'

export default defineConfig({
  ...base,
  build: {
    outDir: 'docs',
  },
})
