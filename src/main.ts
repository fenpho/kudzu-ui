import { createApp } from 'vue'
import './style.less'
import App from './App'

import KudzuUI from '../packages'

createApp(App).use(KudzuUI).mount('#app')
