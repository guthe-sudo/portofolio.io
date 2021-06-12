import Vue from 'vue'
import Router from 'vue-router'
import home from './components/pages/home.vue'
import login from './components/pages/login.vue'
import biodata from './components/pages/biodata.vue'

Vue.use(Router)

const routes = [
      //route project
      {
            path: '/',
            component: home,
            name: 'home'
      },
      {
            path: '/login',
            component: login,
            name: 'login'
      },
      {
            path: '/biodata',
            component: biodata,
            name: 'biodata'
      },
]

export default new Router({
      mode: 'history',
      routes
})