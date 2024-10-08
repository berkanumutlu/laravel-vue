import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from 'url';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: false
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-write asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directory as expected.
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        hmr: {
            host: 'localhost',
            port: 5173,
        },
        host: '0.0.0.0',
        port: 5173,
        clientPort: 5173,
        protocol: 'ws',
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            '@project': fileURLToPath(new URL('./', import.meta.url))
        },
    },
});
