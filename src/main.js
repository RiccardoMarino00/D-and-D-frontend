import { createApp } from "vue";

import App from "./App.vue";

// routes
import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./paths/AppHome.vue";
import Edit from "./paths/Edit.vue";
import Show from "./paths/Show.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(fas, far, fab);

// routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AppHome },
    { path: "/edit", component: Edit },
    { path: "/show", component: Show },
  ],
});

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
