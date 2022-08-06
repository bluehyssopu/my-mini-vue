import { createApp } from "../../lib/my-mini-vue.esm.js";
import { App } from "./App.js";

// Vue3
const rootContainer = document.querySelector("#app");
createApp(App).mount("#app");
