import {
    SET_USERS,
    DELETE_USER_BY_ID,
    SET_USER,
    UPDATE_USER_BY_ID,
    ADD_USER
} from "@/store/modules/user/mutationTypes";

export default {
    [SET_USERS]: (state, users) => {
        state.users = users;
    },
    [SET_USER]: (state, user) => {
        state.user = user;
    },
    [DELETE_USER_BY_ID]: (state, id) => {
        const index = state.users.findIndex(user => user.id === id);

        if (index !== -1) {
            state.users.splice(index, 1);
        }
    },
    [UPDATE_USER_BY_ID]: (state, data) => {
        const index = state.users.findIndex(user => user.id === data.id);
        state.users[index].name = data.user.name;
        state.users[index].username = data.user.username;
        state.users[index].email = data.user.email;
        state.users[index].avatarUrl = data.user.avatarUrl;
    },

    [ADD_USER]: (state, data) => {

        const user = {
            id: state.users.length + 1,
            name: data.name,
            username: data.username,
            email: data.email,
            avatarUrl: data.avatarUrl
        };
        state.users.push(user);
    }
}