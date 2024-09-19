<script setup>
import {markRaw, ref, watch} from 'vue';
import {useRoute} from "vue-router";
import WebLayout from '@project/resources/views/layouts/web.vue';
import AdminLayout from '@project/resources/views/layouts/admin.vue';

const layout = ref(null);
const currentRoute = useRoute();

watch(() => currentRoute.name, (routeName) => {
    if (routeName !== undefined) {
        if (routeName.startsWith('admin')) {
            layout.value = markRaw(AdminLayout);
            import('@project/resources/css/admin.css');
        } else {
            layout.value = markRaw(WebLayout);
            import('@project/resources/css/web.css');
        }
    }
}, {immediate: true});
</script>

<template>
    <component :is="layout">
        <RouterView/>
    </component>
</template>
