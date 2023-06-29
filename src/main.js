import { createApp } from 'vue';
import router from '@/routes/index.js';

import App from './App.vue'

import '@/assets/css/color.css';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/base.css';

import TheHeader from '@/components/common/TheHeader.vue';

const app = createApp(App);

app.component('the-header', TheHeader);

app.use(router);

app.mount('#app')
