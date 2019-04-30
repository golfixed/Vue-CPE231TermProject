import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        a: 1,
        user: 'admin'
    }),
    mutations: {
        INCREMENT: (state) => state.a += 1
    }
})

export default store