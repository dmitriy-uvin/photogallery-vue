<template>
    <div class="main">
        <div class="row">
            <h4>Edit user <u>{{ user.name }}</u></h4>
            <div class="row">
                <div class="input-field col s6">
                    <input id="name" type="text" class="validate" v-model="newUser.name">
                    <label for="name" class="active">Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="username" type="text" class="validate" v-model="newUser.username">
                    <label for="username" class="active">Username</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate" v-model="newUser.email">
                    <label for="email" class="active">Email</label>
                </div>
            </div>

            <div class="row">
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File</span>
                        <input type="file" @change="userSelectedFile">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col s2 avatar">
                    <DefaultAvatar v-if="!user.avatarUrl" :name="user.name"/>
                    <img :src="user.avatarUrl" alt="" v-else class="user-avatar">
                </div>
            </div>

            <div class="buttons">
                <button class="btn waves-effect waves-light green" @click="onSave"
                :disabled="!this.newUser.avatarUrl">Save</button>
                <button class="btn waves-effect waves-light blue" @click="onBack">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toast from "@/mixins/toast";
import DefaultAvatar from "@/components/common/DefaultAvatar";

export default {
    name: "UserEdit",
    mixins: [toast],
    data: () => ({
        newUser: {
            name: '',
            username: '',
            email: '',
            avatarUrl: ''
        },
    }),
    components: {
        DefaultAvatar
    },
    methods: {
        ...mapActions('user', ['updateUserById']),
        onBack() {
            this.$router.back();
        },
        async onSave() {
            const data = {
                id: this.user.id,
                user: {
                    name: this.newUser.name,
                    username: this.newUser.username,
                    email: this.newUser.email,
                    avatarUrl: this.newUser.avatarUrl
                }
            };
            await this.updateUserById(data);
            this.$router.push({name: 'user-page', params: {id: this.user.id}});
            this.showSuccessMessage("User was updated!");
        },
        async userSelectedFile(event) {
            this.selectedFile = event.target.files[0];
            const formData = new FormData();
            formData.append('image', this.selectedFile);
            formData.append('key', 'c7d11fcb361865f3eb40f0e5a3687074');
            const request = await fetch('https://api.imgbb.com/1/upload', {
                method: "POST",
                body: formData
            });
            const response = await request.json();
            this.newUser.avatarUrl = response.data.url;
        }
    },
    async mounted() {
        this.newUser.name = this.user.name;
        this.newUser.username = this.user.username;
        this.newUser.email = this.user.email;
    },
    computed: {
        ...mapGetters('user', ['getUserById']),
        user() {
            return this.getUserById(this.$route.params.id);
        }
    },
}
</script>

<style scoped>
.main {
    margin-top: 60px;
}
.buttons {
    margin-top: 50px;
}
.buttons button {
    margin-right: 25px;
}
.avatar img{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
}
.avatar-bg span {
    left: 35% !important;
}
</style>