import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
// import { stat } from "fs";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'stellar-client',
    storage: localStorage,
});

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],

    state: {
        logged_in: false
    },

    mutations: {
        UPDATE_LOGIN: (state, payload) => {
            state.logged_in = payload;
        }
    },

    actions: {
    },

    getters: {

    }
});