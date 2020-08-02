<template>
    <div class="main">
        <div class="row">
            <h4>Add user</h4>
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


            <div class="buttons">
                <button class="btn waves-effect waves-light green"
                        :disabled="!newUser.avatarUrl" @click="onAdd">Add</button>
                <button class="btn waves-effect waves-light blue" @click="onBack">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import toast from "@/mixins/toast";

export default {
    name: "UserAdd",
    mixins: [toast],
    data: ()=> ({
       newUser: {
           name: '',
           username: '',
           email: '',
           avatarUrl: ''
       },
        selectedFile: null
    }),
    methods: {
        ...mapActions('user', ['addUser']),
        async onAdd() {
            const userData = {
                name: this.newUser.name,
                username: this.newUser.username,
                email: this.newUser.email,
                avatarUrl: this.newUser.avatarUrl,
            };
            await this.addUser(userData);
            this.$router.push({ name: 'users'});
            this.showSuccessMessage("User was added!");
        },
        onBack() {
            this.$router.back();
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
            console.log(this.newUser)
        }
    }
}
</script>

<style scoped>
.buttons button{
    margin-right: 20px;
}
</style>