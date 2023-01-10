
# 葛藤UI

## 安装

### npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

`npm i kudzu-ui -S`

### yarn 安装

`yarn add kudzu-ui -S`

## 使用

在 main.ts 中写入以下内容：
```javascript
import { createApp } from 'vue'
import '@src/style.less'
import App from '@src/App.vue'
import router from '@src/router'
import KudzuUI from 'kudzu-ui'
import 'kudzu-ui/lib/style.css'

createApp(App).use(router).use(KudzuUI).mount('#app')

```