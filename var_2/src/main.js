import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";
// import vFocus from "./components/directives/vFocus";

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

// app.directive("focus", vFocus);

app.mount("#app");
