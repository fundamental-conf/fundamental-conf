import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import FDSaveTheDate from '@/components/FDSaveTheDate.vue'


const app = createApp(App).use(router).mount('#app');
app.component('FDSaveTheDate', FDSaveTheDate)


