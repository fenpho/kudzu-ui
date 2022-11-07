import { App, Plugin } from 'vue';
import Tag from './src/index.vue';

export const TagPlugin: Plugin = {
  install(app: App) {
    app.component('ku-tag', Tag);
  },
};

export {
  Tag,
};