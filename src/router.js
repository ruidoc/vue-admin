import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Users from './components/Users'
import Admins from './components/Admin'

const routes = [
    {
        path: '/',
        name: 'index'
    },
    {
        path: '/users',
        name: 'users',
        component: Users
    },

    {
        path: '/admins',
        name: 'admins',
        component: Admins
    }
]

export default new Router({
    mode: 'history',
    routes
})
