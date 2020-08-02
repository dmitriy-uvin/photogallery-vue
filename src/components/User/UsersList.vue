<template>
    <div>
        <div class="search row">
            <div class="input-field col s6">
                <input id="search" type="text" v-model="search">
                <label for="search">Search</label>
            </div>
        </div>
        <div class="user-list">
            <div v-for="user in filteredUsers" :key="user.id">
                <UserItem :user="user" @user-deleted="alert(123)"/>
            </div>
        </div>
        <div class="fixed-action-btn">
            <router-link to="/user/add" class="btn-floating btn-large blue pulse">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import UserItem from "@/components/User/UserItem";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "UsersList",
    data: () => ({
        search: ''
    }),
    components: {
        UserItem
    },
    methods: {
        ...mapActions('user', ['fetchAllUsers', 'deleteUserById']),
    },
    computed: {
        ...mapGetters('user', ['allUsers']),
        users() {
            return this.allUsers;
        },
        filteredUsers() {
            return this.users.filter(user => {
                return (user.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    user.email.toLowerCase().includes(this.search.toLowerCase()))
            })
        }
    },
}
</script>

<style scoped>
.user-list {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 15px;
}
.search {
    margin-top: 50px;
}
</style>