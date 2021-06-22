import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AlbumList from './components/AlbumList.vue';

// criação do roteador
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', AlbumList }],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
