import { createApp } from 'vue'
import './style.less'
import App from './App'

import router from './router'
import KudzuUI from '../packages'



createApp(App).use(router).use(KudzuUI).mount('#app')
