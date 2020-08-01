import {
    SET_USERS,
    DELETE_USER_BY_ID
} from "@/store/modules/user/mutationTypes";

export default {
    [SET_USERS]: (state, users) => {
        state.users = {
            ...state.users,
            ...users.reduce(
                (prev, user) => ({ ...prev, [user.id]: user}),
                {}
            ),
        };
    },
    [DELETE_USER_BY_ID]: (state, id) => {
        delete state.users[id];
    }
}