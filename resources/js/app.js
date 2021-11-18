/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
Vue.use(VueRouter);




import Home from './components/ExampleComponent.vue';
import List from './components/tasksComponents.vue';



const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/lists',
        component: List
    }
];


const router = new VueRouter({routes});



Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('pagination', require('laravel-vue-pagination'));





const app = new Vue({
    el: '#app',
    router: router
});
