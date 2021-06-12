require('./bootstrap');
import router from './router'
import "tailwindcss/tailwind.css"
import store from './store'


window.Vue = require('vue').default;
//Vue.component('main', require('./components/Main.vue'));
Vue.component('mainapp', require('./components/mainapp.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store
});
