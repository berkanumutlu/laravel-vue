import Home from '@project/resources/views/admin/home/index.vue';
import Login from '@project/resources/views/admin/login/index.vue';

export default [
    {
        path: '/admin',
        children: [
            {path: '', name: 'admin.home', component: Home},
            {path: 'login', name: 'admin.login', component: Login},
        ]
    }
];
