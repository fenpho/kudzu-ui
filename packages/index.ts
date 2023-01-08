/** 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { KuButtonPlugin } from './components/Button';
import { KuTagPlugin } from './components/Tag';
import { KuCardPlugin } from './components/Card';
import { KuMenuPlugin } from './components/Menu';

const kuPlugin: Plugin = {
  install(app: App) {
    KuButtonPlugin.install?.(app);
    KuTagPlugin.install?.(app);
    KuCardPlugin.install?.(app);
    KuMenuPlugin.install?.(app);
  },
};

export default kuPlugin;

export * from './components/Button'
export * from './components/Tag'
export * from './components/Card'
export * from './components/Menu'