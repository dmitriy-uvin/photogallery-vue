import {
    DELETE_USER_BY_ID,
    SET_USERS,
    SET_USER,
    UPDATE_USER_BY_ID, ADD_USER
} from "@/store/modules/user/mutationTypes";

import {
    SET_LOADING
} from "@/store/mutationTypes";

export default {
    async fetchAllUsers({ commit }) {
        commit(SET_LOADING, true, { root: true });

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        commit(SET_USERS, users);

        commit(SET_LOADING, false, { root: true });
    },

    async fetchUserById({ commit }, id) {
        commit(SET_LOADING, true, { root: true });

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const userFindIndex = users.findIndex(user => user.id === Number(id));
        const user = users[userFindIndex];
        commit(SET_USER, user);

        commit(SET_LOADING, false, { root: true });
    },

    async deleteUserById({ commit }, id) {
        commit(SET_LOADING, true, { root: true });

        commit(DELETE_USER_BY_ID, id);

        commit(SET_LOADING, false, { root: true });
    },

    async updateUserById({ commit }, data) {
        commit(SET_LOADING, true, { root: true });

        commit(UPDATE_USER_BY_ID, data);

        commit(SET_LOADING, false, { root: true });
    },

    async addUser({ commit }, data) {
        commit(SET_LOADING, true, { root: true });

        commit(ADD_USER, data);

        commit(SET_LOADING, false, { root: true });
    }
}