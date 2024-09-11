<script>
export default {
    data() {
        return {
            text: 'World',
            textHTML: '<strong>World!</strong>',
            numberVariable: 50,
            name: 'John Doe',
            age: 10,
            arrayVariable: ['foo', 'bar', 'text', 'lorem'],
            genderList: [
                {value: 0, name: 'None'},
                {value: 1, name: 'Male'},
                {value: 2, name: 'Female'}
            ],
            selectedGender: null,
            status: false,
            loginUser: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        ageIncrement() {
            this.age++
        },
        ageDecrement() {
            if (this.age > 0) {
                this.age--
            }
        }
    },
    beforeCreate() {
        console.log('beforeCreate()')
    },
    created() {
        console.log('created()')
    },
    beforeMount() {
        console.log('beforeMount()')
    },
    mounted() {
        console.log('mounted()')
    },
}
</script>

<template>
    <div class="container mx-auto my-auto space-y-4">
        <div>
            Hello {{ text }}, {{ numberVariable }}<br>
            Hello <span v-html="textHTML"></span>
        </div>
        <br>
        <div>
            Hello {{ name }}, you are {{ age }} years old.
            You are <strong v-if="age<=12">Kid</strong>
            <strong v-else-if="age<=18">Teen</strong>
            <strong v-else-if="age<=30">Young</strong>
            <strong v-else-if="age>30 && age<=50">Adult</strong>
            <strong v-else>Old</strong>
            <br>
            <button @click="ageDecrement()">-</button>
            <button @click="ageIncrement()">+</button>
        </div>
        <br>
        <div class="space-y-8">
            <ul>
                <li :key="item" v-for="item in arrayVariable">{{ item }}</li>
            </ul>
            <ul>
                <li :key="item" v-for="(item, index) in arrayVariable">{{ index + ': ' + item }}</li>
            </ul>
            <div>
                <label for="gender" class="me-1">Gender: </label>
                <select v-bind:id="'gender'" v-model="selectedGender">
                    <option :value="option.value" :key="option" v-for="option in genderList">
                        {{ option.name }}
                    </option>
                </select>
                <span class="ms-2" v-if="selectedGender !== null"> ({{
                        genderList.find(item => item.value === selectedGender).name
                    }})</span>
            </div>
            <div>
                <label for="status" class="me-1">Status: </label>
                <input type="checkbox" v-model="status">
                <span class="ms-2" v-if="status !== null"> ({{ status }})</span>
            </div>
        </div>
        <br>
        <div class="w-1/2 mx-auto">
            <!--<input type="number" :id="'email'" v-model.number="loginUser.email">
            <input type="text" :id="'text'" v-model.lazy="loginUser.email">-->
            <form @submit.prevent="login" class="flex flex-col justify-center bg-white p-4">
                <div class="space-y-8">
                    <div class="form-input-with-label">
                        <label for="email">Email</label>
                        <span class="form-input">
                            <input type="email" id="email" v-model="loginUser.email" placeholder="Email">
                        </span>
                    </div>
                    <div class="form-input-with-label">
                        <label for="password">Password</label>
                        <span class="form-input">
                            <input type="password" id="password" v-model="loginUser.password"
                                   placeholder="Password" autocomplete="on">
                        </span>
                    </div>
                    <button type="submit" class="form-button">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
