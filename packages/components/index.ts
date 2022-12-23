/** 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { KuButtonPlugin } from './Button';
import { KuTagPlugin } from './Tag';

const kuPlugin: Plugin = {
  install(app: App) {
    KuButtonPlugin.install?.(app);
    KuTagPlugin.install?.(app);
  },
};

export default kuPlugin;

export * from './Button'
export * from './Tag'