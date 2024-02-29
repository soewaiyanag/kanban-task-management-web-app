import './assets/styles/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Lara from './presets/Lara';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

app.mount('#app');
