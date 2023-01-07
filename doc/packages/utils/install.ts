import { App, Plugin } from 'vue';

export const withInstall = (component: any): Plugin => {
  return {
    install(app: App) {
      app.component(component.name, component);
    },
  };
}
