export default [
    {
        path: '/api',
        children: [
            {path: '', name: 'api.home'},
            {path: '/products', name: 'api.products'},
        ]
    }
];
