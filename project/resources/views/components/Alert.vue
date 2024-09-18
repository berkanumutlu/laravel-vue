<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info', // success, error, warning, info gibi türler olabilir
        },
        icon: {
            type: [Object, Function],
            default: ''
        },
        title: {
            type: String,
            default: null
        }
    },
    computed: {
        alertClass() {
            switch (this.type) {
                case 'success':
                    return 'bg-green-100 border-green-400 text-green-700'
                case 'error':
                    return 'bg-red-100 border-red-400 text-red-700'
                case 'warning':
                    return 'bg-yellow-100 border-yellow-400 text-yellow-700'
                case 'info':
                    return 'bg-blue-100 border-blue-400 text-blue-700'
                default:
                    return 'bg-gray-100 border-gray-400 text-gray-700'
            }
        }
    },
    methods: {
        closeAlert() {
            this.$emit('close')
        }
    }
}
</script>

<template>
    <div v-if="message" role="alert" class="alert" :class="alertClass">
        <div class="alert-header">
            <div class="alert-header-title">
                <component :is="icon" class="alert-header-title-icon"/>
                <span class="alert-header-title-text">{{ title ?? type.toUpperCase() + '!' }}</span>
            </div>
            <button @click="closeAlert()" class="close-button">X</button>
        </div>
        <span>{{ message }}</span>
    </div>
</template>

<style scoped>
.alert {
    @apply w-full flex flex-col my-4 px-4 py-3 relative rounded border
}

.alert .alert-header {
    @apply flex justify-between mb-2
}

.alert .alert-header .alert-header-title {
    @apply inline-flex items-center
}

.alert .alert-header .alert-header-title-icon {
    @apply h-6 w-6 mr-2
}

.alert .alert-header .alert-header-title-text {
    @apply text-lg font-medium
}

.close-button {
    @apply flex items-center justify-center p-0 w-6 h-6 font-bold text-base text-inherit bg-none border-none rounded-2xl cursor-pointer select-none
}

.close-button:hover {
    background-color: rgba(0, 0, 0, .05);
}
</style>
