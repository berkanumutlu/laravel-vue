<script setup>
import WebHeader from "@project/resources/views/components/web/header.vue";
import WebFooter from "@project/resources/views/components/web/footer.vue";
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <WebHeader/>
        <main class="flex-grow p-6">
            <RouterView/>
            <!--<router-view/>-->
            <!--<slot></slot>-->
            <!--<slot name="content"></slot>-->
        </main>
        <WebFooter/>
    </div>
</template>
