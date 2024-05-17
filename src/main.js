import "./assets/main.scss";

import { createApp } from "vue";

// Element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

// Vue-router
import router from "@/router";

// Pinia
import { createPinia } from "pinia";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
