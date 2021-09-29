import { createApp } from "vue";
import App from "./App.vue";

import "./style/index.scss";

import api from "./api";

import store from "./store";
import router from "./router";

const app = createApp(App).use(store).use(router);
app.config.globalProperties.$api = api;
app.mount(`#app`);
