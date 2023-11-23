import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
// Configure jQuery globally
window.$ = window.jQuery = require("jquery");

const app = createApp(App);

app.use(router);
app.mount("#app");
