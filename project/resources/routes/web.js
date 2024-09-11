import Home from '@project/resources/views/web/home/index.vue';
import Login from '@project/resources/views/web/login/index.vue';
import About from '@project/resources/views/web/about/index.vue';

export default [
    {
        path: '/',
        children: [
            {path: '', name: 'web.home', component: Home},
            {path: 'login', name: 'web.login', component: Login},
            {path: 'about', name: 'web.about', component: About},
        ]
    }
];
