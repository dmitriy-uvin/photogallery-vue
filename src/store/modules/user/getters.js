export default {
    allUsers: state => state.users,
    getUserById: state => id => {
        return state.users.find(user => user.id === Number(id))
    },
}