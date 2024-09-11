import './bootstrap';
import {createApp} from 'vue';
import AppLayout from '@project/resources/views/layouts/app.vue';
import {createRouter, createWebHistory} from 'vue-router';
import WebRoutes from '@project/resources/routes/web';
import AdminRoutes from '@project/resources/routes/admin';
import ApiRoutes from '@project/resources/routes/api';

const app = createApp(AppLayout);
const router = createRouter({
    history: createWebHistory(),
    routes: [...AdminRoutes, ...ApiRoutes, ...WebRoutes]
});
app.use(router);
app.mount('#app');
