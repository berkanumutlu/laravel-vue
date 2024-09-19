<script>
export default {
    props: {
        users: {
            type: Array,
            default: null
        }
    }
}
</script>

<template>
    <div class="w-1/4 mx-auto my-4" v-if="users?.length > 0">
        <ul>
            <li :key="index" v-for="(user, index) in users">{{ index + 1 + ') ' + user.fullname }}<small
                class="ml-2 cursor-pointer" @click="$emit('delete', index)">Remove</small>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>
