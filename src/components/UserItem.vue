<template>
    <div class="user-item-container">
        <strong>{{ user.name }} ({{ user.id}})</strong><br>
        <strong>Username: <i>{{ user.username }}</i></strong><br>
        <strong>Email: <u>{{ user.email }}</u></strong>

        <div class="buttons">
            <a class="waves-effect waves-light btn">Edit</a>
            <a class="waves-effect waves-light btn" @click="onDelete">Delete</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "UserItem",
    props: {
        user: {
            required: true
        }
    },
    methods: {
        ...mapActions('user', ['deleteUserById']),
        onDelete() {
            this.deleteUserById(this.user.id);
            this.$emit('user-deleted');
        }
    }
}
</script>

<style scoped>
.user-item-container {
    flex-grow: 1;
    margin: 1%;
    padding: 25px;
    text-align: center;
    background: bisque;
    cursor: pointer;
}
.buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
}
</style>