import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        user: {
            photo: 'https://uppic.cc/d/KE3m',
            employeeno: '000011',
            employeename: 'Godfather',
            department: 'Managing',
            position: 'CEO'
        }
    }),
    mutations: {
        SWITCH_ROLE: (state, role) =>  state.user.role = role,
        CHANGE_USER: (state, user) => state.user = user
    }
})

export default store