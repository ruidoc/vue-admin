import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        admin: localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : {},
        activeMenu: {
            path: '',
            name: ''
        }
    },
    mutations: {
        login(state,admins) {
            let adminInfo = JSON.stringify(admins);
            localStorage.setItem('admin',adminInfo)
            state.admin = admins
        },
        logout(state) {
            localStorage.removeItem('admin')
            state.admin = {}
        }
    }
})
