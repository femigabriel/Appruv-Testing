import { createApp } from "vue";
// import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [{ path: "/step-1", component }],
// });

const app = createApp(App);

app.mount("#app");
// createApp(App).mount('#app')
