<script>
import Alert from '@project/resources/views/components/Alert.vue';
import {CheckCircleIcon, ExclamationCircleIcon, XCircleIcon} from '@heroicons/vue/24/outline';
import UserList from '@project/resources/views/components/UserList.vue';

export default {
    components: {Alert, UserList},
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
            },
            color: false,
            size: false,
            myStyle: {
                color: 'red',
                fontSize: '24px'
            },
            counter: 0,
            alert: {
                visible: false,
                type: 'info',
                icon: null,
                message: null
            },
            form: {
                fullname: ''
            },
            isFormSubmitted: false,
            errors: [],
            users: []
        }
    },
    methods: {
        ageIncrement() {
            this.age++
        },
        ageDecrement() {
            if (this.age > 1) {
                this.age--
            }
        },
        login() {

        },
        resetAlert() {
            this.alert = {
                visible: false,
                type: 'info',
                icon: null,
                message: null
            };
        },
        showAlert(message) {
            this.alert.message = message;
            this.alert.visible = true;
        },
        alertSuccess(message, icon) {
            this.resetAlert();
            this.alert.type = 'success';
            this.alert.icon = icon ?? CheckCircleIcon;
            this.showAlert(message);
        },
        alertError(message, icon) {
            this.resetAlert();
            this.alert.type = 'error';
            this.alert.icon = icon ?? XCircleIcon;
            this.showAlert(message);
        },
        resetErrors() {
            this.errors = [];
        },
        resetForm() {
            this.form = {
                fullname: ''
            }
        },
        formSubmit() {
            this.users.push(this.form);
            this.resetForm();
            this.resetErrors();
            this.isFormSubmitted = true;
        },
        deleteUser(key) {
            if (this.users[key] !== undefined) {
                //this.$delete(this.users, key);
                //delete this.users[key];
                this.users.splice(key, 1);
            }
        }
    },
    watch: {
        counter(val, oldVal) {
            if (val === 0) {
                this.alert.type = 'warning';
                this.alert.icon = ExclamationCircleIcon;
                this.alert.message = 'nothing changed';
            } else {
                if (val > oldVal) {
                    console.log('counter increased');
                    this.alertSuccess('counter increased');
                } else if (val < oldVal) {
                    console.log('counter decreased');
                    this.alertError('counter decreased');
                }
            }
        },
        'form.fullname'(newValue, oldValue) {
            this.resetErrors();
            if (this.isFormSubmitted) {
                this.isFormSubmitted = false;
                return;
            }
            /*if (oldValue.trim().length > 0 && newValue.trim().length === 0) {
                return;
            }*/
            let valueLength = newValue.trim().length;
            if (valueLength === 0) {
                this.errors.push('Full Name field cannot be empty.');
                return;
            }
            if (valueLength < 6) {
                this.errors.push('The Full Name field must be at least 6 characters.');
                return;
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
    <div class="container mx-auto my-12 space-y-4">
        <div>
            <h6 class="font-bold">Temel Vue.js Yapısı Döngüler,Koşullar,Methods,Hooks</h6>
            Hello {{ text }}, {{ numberVariable }}<br>
            Hello <span v-html="textHTML"></span><br>
            Hello {{ name }}, you are {{ age }} year<span v-if="age>1">s</span> old.
            You are <strong v-if="age<=12">Kid</strong>
            <strong v-else-if="age<=18">Teen</strong>
            <strong v-else-if="age<=30">Young</strong>
            <strong v-else-if="age>30 && age<=50">Adult</strong>
            <strong v-else>Old</strong>
            <div class="mt-1">
                <button @click="ageDecrement()" class="button">-</button>
                <button @click="ageIncrement()" class="button">+</button>
            </div>
        </div>
        <br>
        <div class="space-y-8">
            <h6 class="font-bold">Form Elementleri</h6>
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
            <form @submit.prevent="login()" class="flex flex-col justify-center bg-white p-4">
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
        <br>
        <div>
            <h6 class="font-bold">Class & Styles işlemleri</h6>
            <p class="my-2" v-bind:class="{ 'text-red-600': color, 'text-2xl': size }">Lorem
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.</p>
            <p v-bind:style="myStyle">Text2</p>
            <p v-bind:style="{color:myStyle.color}">Text3</p>
            <div class="my-4">
                <button @click="color=!color" class="p-2 border rounded-lg">Change Color</button>
                <button @click="size=!size" class="ms-2 p-2 border rounded-lg">Change Font Size</button>
            </div>
        </div>
        <br>
        <div>
            <h6 class="font-bold">Watch Properties</h6>
            <div class="flex items-center gap-2">
                Counter: {{ counter }}
                <div class="ms-4 flex gap-2">
                    <button class="button" @click="counter--">-</button>
                    <button class="button" @click="counter++">+</button>
                </div>
            </div>
            <Alert v-if="alert.visible" :message="alert.message" :type="alert.type" :icon="alert.icon"
                   @close="alert.visible = false"/>
            <div class="form-section mt-4">
                <div class="form-area">
                    <form @submit.prevent="formSubmit()">
                        <fieldset>
                            <div data-slot="control" class="space-y-8">
                                <div class="form-group" data-headlessui-state="">
                                    <label data-slot="label" for="fullname" data-headlessui-state="">Full Name</label>
                                    <span data-slot="control" class="form-input" data-headlessui-state=""
                                          v-bind:class="{ 'border border-rose-600':errors.length > 0,
                                          'border border-green-600':errors.length === 0 && form.fullname !== ''
                                          }">
                                        <input type="text" id="fullname" v-model="form.fullname">
                                    </span>
                                    <span class="text-rose-600 dark:text-rose-500 text-sm" :key="key"
                                          v-for="(error, key) in errors">{{ error }}</span>
                                </div>
                            </div>
                        </fieldset>
                        <button type="submit" class="form-button" data-headlessui-state=""
                                :disabled="errors.length>0 || form.fullname === ''"
                                :data-disabled="errors.length > 0 || form.fullname === '' ? true : null">Add
                        </button>
                    </form>
                    <user-list @delete="deleteUser" :users="users"></user-list>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
