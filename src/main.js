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

// Pinia-persistedstate-plugin
import { createPersistedState } from "pinia-persistedstate-plugin";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist);
app.use(pinia);

app.mount("#app");
