<template>
    <div>
        <h4>Album Edit</h4>
        <div class="form">
            <div class="row">
                <div class="input-field col s6">
                    <input id="title" type="text" class="validate" v-model="title">
                    <label for="title" class="active">Title</label>
                </div>
                <div class="input-field col s6">
                    <select id="user-select" v-model="this.album.userId">
                        <option value="" disabled selected>All</option>
                        <option :value="user.id" v-for="user in users" :key="user.id">{{ user.name }}</option>
                    </select>
                    <label for="user-select">User</label>
                </div>

            </div>
            <div class="buttons">
                <button class="btn waves-effect waves-green green" @click="onSave">Save</button>
                <button class="btn waves-effect waves-light blue" @click="onBack">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toast from "@/mixins/toast";
export default {
    name: "AlbumEdit",
    mixins: [toast],
    data: () => ({
       title: '',
       userId: ''
    }),
    methods: {
        ...mapActions('album', ['updateAlbum']),
        async onSave() {
            const data = {
                id: this.album.id,
                title: this.title || this.album.title,
                userId: this.userId,
            };
            await this.updateAlbum(data);
            this.showSuccessMessage("Album was updated");
            this.onBack();
        },
        onBack() {
            this.$router.push({ name: 'album-page', params: {id: this.$route.params.id}});
        }
    },
    async mounted() {
        // eslint-disable-next-line no-undef
        M.FormSelect.init(document.getElementById('user-select'));
        this.title = this.album.title;
        this.userId = this.album.userId;
    },
    computed: {
        ...mapGetters('album', ['getAlbumById']),
        ...mapGetters('user', ['allUsers']),
        album() {
            return this.getAlbumById(this.$route.params.id);
        },
        users() {
            return this.allUsers;
        }
    }
}
</script>

<style scoped>
.buttons button {
    margin-right: 20px;
}
</style>