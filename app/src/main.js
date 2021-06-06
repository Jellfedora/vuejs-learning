import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCog);

import router from "./router/index.js";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
