import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: {
            role: 'students',
            checked: false
        },
        pingData: []
    },
    mutations: {
        allAddScore(state,score) {
            state.lists.forEach((item)=> {
                item.score = parseInt(item.score)+parseInt(score)
            })
        }
    }
})
