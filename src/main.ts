import { createApp } from 'vue';
import Icon from './components/Icon.vue';
import App from './App.vue'
import router from './router';

import './assets/iconfont.js';
import './styles/global.scss';
import './styles/media.scss';

const app = createApp(App);
app.use(router);
app.component('Icon', Icon);
app.mount('#app');
