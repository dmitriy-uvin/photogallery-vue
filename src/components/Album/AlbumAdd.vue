<template>
    <div>
        <h4>Album Add</h4>
        <div class="form">
            <div class="row">
                <div class="input-field col s6">
                    <input id="title" type="text" class="validate" v-model="newAlbum.title">
                    <label for="title" class="active">Title</label>
                </div>
                <div class="input-field col s6">
                    <select id="user-select" v-model="newAlbum.userId">
                        <option value="" selected>All</option>
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
import { mapActions, mapGetters } from 'vuex';
import toast from "@/mixins/toast";

export default {
    name: "AlbumAdd",
    mixins: [toast],
    data: () => ({
        newAlbum: {
           title: '',
           userId: ''
        },
    }),
    methods: {
        ...mapActions('album', ['addAlbum']),
        onBack() {
            this.$router.back();
        },
        async onSave() {
            await this.addAlbum(this.newAlbum);
            this.$router.push({name: 'albums'});
            this.showSuccessMessage('Album was added!');
        }
    },
    computed: {
        ...mapGetters('user', ['allUsers']),
        users() {
            return this.allUsers;
        }
    },
    async mounted() {
        // eslint-disable-next-line no-undef
        M.FormSelect.init(document.getElementById('user-select'))
    }
}
</script>

<style scoped>
.buttons button {
    margin-right: 20px;
}
</style>