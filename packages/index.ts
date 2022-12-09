import { App, Plugin } from 'vue'

import { kuButton } from './Button'

const KuPlugin: Plugin = {
  install(app: App) {
    kuButton.install?.(app);
  },
}

export default KuPlugin

export * from './Button'