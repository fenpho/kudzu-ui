import { App, Plugin } from 'vue';

export const withInstall = (component: any) => {
  return {
    install(app: App) {
      app.component(component.name, component);
    },
  };
}
