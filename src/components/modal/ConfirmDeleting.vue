<template>
    <div class="modal">
        <div class="modal-content">
            <h4>Delete User</h4>
            <h5 class="red-text">Are you sure you want to delete user <u>{{ user.name }}</u>?</h5>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat red" @click="onDelete">Delete</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import toast from "@/mixins/toast";

export default {
    name: "ConfirmDeleting",
    mixins: [toast],
    props: {
        user: {
            required: true
        }
    },
    methods: {
        ...mapActions('user', ['deleteUserById']),

        async onDelete() {
            await this.deleteUserById(this.user.id);
            this.$emit('user-deleted');
        }
    }
}
</script>

<style scoped>

</style>