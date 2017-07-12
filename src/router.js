import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'index'
    },
    {
        path: '/students',
        name: 'students',
        // component: StudentList
    },

    {
        path: '/groups',
        name: 'groups',
        // component: GroupList
    }
]

export default new Router({
    mode: 'history',
    routes
})
