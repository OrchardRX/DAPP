import { createApp } from 'vue'
import './style.css'
import 'amfe-flexible'
import router from "@/router";
import i18n from '@/locales/index'
// 导入createPinia，获取实例pinia
import { createPinia } from 'pinia';
const pinia = createPinia()
import { Button, Progress, Popup, Toast ,RadioGroup, Radio } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
const app = createApp(App)
app.use(Popup);
app.use(Button);
app.use(Progress);
app.use(Radio);
app.use(RadioGroup);
app.use(router)
app.use(pinia);
app.use(i18n)
app.mount('#app')