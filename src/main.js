import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
import App from "./App.vue";

const app = createApp(App);
app.use(Vue3Mq, {
  preset: "devices",
});

app.mount("#app");
