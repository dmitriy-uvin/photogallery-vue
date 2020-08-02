<template>
    <div class="modal">
        <div class="modal-content">
            <h4>Add Photo</h4>
            <div class="row">
                <div class="input-field col s6">
                    <input id="title" type="text" class="validate" v-model="title">
                    <label for="title">Photo Title</label>
                </div>
                <div class="file-field input-field col s6">
                    <div class="btn">
                        <span>File</span>
                        <input type="file" @change="userSelectedFile">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn-flat">Cancel</a>
            <a class="modal-close waves-effect waves-green btn blue"
               :disabled="!imageUrl" @click="onUpload">Upload</a>
        </div>
    </div>
</template>

<script>
import toast from "@/mixins/toast";
import { mapActions } from 'vuex';

export default {
    name: "UploadPhoto",
    mixins: [toast],
    data: () => ({
        selectedFile: '',
        title: '',
        imageUrl: ''
    }),
    props: {
      albumId: {
          required :true
      }
    },
    methods: {
        ...mapActions('album', ['uploadAlbumPhoto']),
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
            this.imageUrl = response.data.url;
        },
        async onUpload() {
            const photoData = {
                albumId: this.albumId,
                title: this.title,
                url: this.imageUrl
            };
            await this.uploadAlbumPhoto(photoData);
        }
    }
}
</script>

<style scoped>
.modal {
    width: 50%;
}
</style>