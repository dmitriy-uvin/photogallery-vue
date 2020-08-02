import Vue from 'vue';
import Vuex from 'vuex';
import user from './store/modules/user';
import album from './store/modules/album';
import state from "@/store/state";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    modules: {
        user,
        album
    }
});

export default store;
