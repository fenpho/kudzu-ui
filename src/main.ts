import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import kudzuUI from '../packages';

const app = createApp(App);

app.use(router);
app.use(kudzuUI);

app.mount("#app");
