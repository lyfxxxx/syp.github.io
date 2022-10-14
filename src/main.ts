import { createApp } from 'vue';
import Icon from './components/Icon.vue';
import './styles/global.scss';
import './styles/media.scss';
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router);
app.component('Icon', Icon);
app.mount('#app');
