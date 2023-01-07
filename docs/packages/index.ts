/** 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { KuButtonPlugin } from './components/Button';
import { KuTagPlugin } from './components/Tag';
import { KuHeaderPlugin } from './components/Header';
import { KuCardPlugin } from './components/Card';
import { KuFooterPlugin } from './components/Footer';
import { KuAsidePlugin } from './components/Aside';

const kuPlugin: Plugin = {
  install(app: App) {
    KuButtonPlugin.install?.(app);
    KuTagPlugin.install?.(app);
    KuHeaderPlugin.install?.(app);
    KuCardPlugin.install?.(app);
    KuFooterPlugin.install?.(app);
    KuAsidePlugin.install?.(app);
  },
};

export default kuPlugin;

export * from './components/Button'
export * from './components/Tag'
export * from './components/Header'
export * from './components/Card'
export * from './components/Footer'
export * from './components/Aside'