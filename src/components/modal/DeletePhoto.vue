<template>
    <div class="modal">
        <div class="modal-content">
            <h4>Delete Photo</h4>
            <img :src="photo.thumbnailUrl" alt="" class="">
        </div>
        <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a class="modal-close waves-effect waves-green btn-flat red"
               @click="onDelete">Delete</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import toast from "@/mixins/toast";
export default {
    name: "DeletePhoto",
    mixins: [toast],
    props: {
        photo: {
            required: true
        }
    },
    methods: {
        ...mapActions('album', ['deletePhoto']),
        async onDelete() {
            await this.deletePhoto(this.photo.id);
            this.showDefaultMessage("Photo was deleted!");
        }
    },
}
</script>

<style scoped>
img {
    width: 150px;
    height: 150px;
}
.modal {
    text-align: center;
    width: 40%;
}
</style>