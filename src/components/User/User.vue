<template>
    <div>
        <div class="user-card">

            <div class="avatar">
                <DefaultAvatar v-if="!user.avatarUrl" :name="user.name"/>
                <img :src="user.avatarUrl" alt="" v-else class="user-avatar">
            </div>
            <div class="user info">
                <h5>
                    <b>Name</b><br>
                    {{ user.name }}
                </h5>
                <h5>
                    <b>Username</b><br>
                    {{ user.username }}
                </h5>
                <h5>
                    <b>Email</b><br>
                    {{ user.email }}
                </h5>
            </div>
            <div class="buttons">
                <a class="waves-effect waves-green btn modal-trigger"
                   @click="onEdit" data-target="editModal">Edit</a>
                <a class="waves-effect waves-red btn modal-trigger"
                   @click="onDelete" data-target="deleteModal">Delete</a>
            </div>
        </div>


        <ConfirmDeleting id="deleteModal" :user="user" @user-deleted="userDeleted"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import toast from "@/mixins/toast";
import ConfirmDeleting from "@/components/modal/ConfirmDeleting";
import DefaultAvatar from "@/components/common/DefaultAvatar";

export default {
    name: "User",
    mixins: [toast],
    components: {
        ConfirmDeleting,
        DefaultAvatar
    },
    methods: {
        async userDeleted() {
            this.$router.push({name: 'users'});
            this.showDefaultMessage("User was deleted!");
        },
        onEdit() {
            this.$router.push({ name: 'user-page-edit', params: {id: this.user.id}});
        },
        onDelete() {
            // eslint-disable-next-line no-undef
            M.Modal.init(document.getElementById("deleteModal"))
        }
    },
    computed: {
        ...mapGetters('user', ['getUserById']),
        user() {
            return this.getUserById(this.$route.params.id);
        }
    }
}
</script>

<style scoped>
.user-card {
    margin: 60px auto 0 auto;
    padding: 15px;
    border-radius: 10px;
    background: bisque;
    width: 80%;
    text-align: center;
}
.avatar-bg {
    margin: 0 auto;
}
.avatar span {
    position: relative;
    top: 20%;
    left: 0;
    font-size: 45px;
}
.user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.buttons > a {
    margin-right: 10px;
}
</style>