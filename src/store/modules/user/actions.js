import {
    DELETE_USER_BY_ID,
    SET_USERS
} from "@/store/modules/user/mutationTypes";

export default {
    async fetchAllUsers({ commit }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        commit(SET_USERS, users);
    },

    async deleteUserById({ commit }, id) {
        commit(DELETE_USER_BY_ID, id);
    },
}