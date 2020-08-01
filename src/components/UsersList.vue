<template>
    <div>
        <h1>UsersList</h1>

        <div class="user-list">
            <UserItem :key="user.id" :user="user" v-for="user in allUsers" @user-deleted="test"/>
        </div>
    </div>
</template>

<script>
import UserItem from "@/components/UserItem";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "UsersList",
    data: () => ({
        isLoading: false,
    }),
    components: {
        UserItem
    },
    methods: {
        ...mapActions('user', ['fetchAllUsers', 'deleteUserById']),
        test() {
          console.log(this.allUsers);
        },
        onDelete() {
            this.deleteUserById(this.user.id);
        }
    },
    async created() {
        await this.fetchAllUsers();
    },
    computed: {
        ...mapGetters('user', ['allUsers']),
    },
}
</script>

<style scoped>
.user-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>