<template>
    <div class="user-item-container" @click="onUserClick">

        <div class="avatar">
            <DefaultAvatar v-if="!user.avatarUrl" :name="user.name"/>
            <img :src="user.avatarUrl" alt="" v-else>
        </div>

        <div class="user-info">
            <strong>{{ user.name }} ({{ user.id}})</strong><br>
            <strong>Username: <i>{{ user.username }}</i></strong><br>
            <strong>Email: <u>{{ user.email }}</u></strong>
        </div>
    </div>
</template>

<script>
import DefaultAvatar from "@/components/common/DefaultAvatar";
import { mapActions } from 'vuex';

export default {
    name: "UserItem",
    data: () => ({
        isEdit: false
    }),
    components: {
      DefaultAvatar
    },
    props: {
        user: {
            required: true
        }
    },
    methods: {
        ...mapActions('user', ['deleteUserById']),
        onDelete() {
            this.deleteUserById(this.user.id);
        },
        onUserClick() {
            this.$router.push({ name: 'user-page', params: {id: this.user.id}});
        }
    }
}
</script>

<style scoped>

.user-item-container {
    padding: 25px;
    background: bisque;
    cursor: pointer;
    display: grid;
    grid-template-columns: 30% 70%;
}

.buttons {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 100%;
}
.avatar {
    text-align: center;
}
.avatar img{
    width: 100px;
    height: 100px;
}
.user-info strong {
    text-align: left;
    color: black;
}
</style>