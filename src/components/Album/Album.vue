<template>
    <div>
        <div class="header">
            <div class="col s6">
                <h4>
                    {{ album.title }}
                </h4>
            </div>

            <div class="col s6 buttons">
                <button class="btn red waves-effect waves-red" @click="onDelete">
                    <i class="material-icons left">delete</i>
                    Delete
                </button>
                <button class="btn green waves-effect waves-green" @click="onEdit">
                    <i class="material-icons left">edit</i>
                    Edit
                </button>
                <button class="btn blue waves-effect waves-green modal-trigger"
                        data-target="uploadPhoto">
                    <i class="material-icons left">add</i>
                    Add Photo
                </button>
            </div>
        </div>

        <div class="photos">
            <div class="photo" v-for="photo in photos" :key="photo.id">
                <img :src="photo.thumbnailUrl" alt="" @click="onSelectDeletePhoto(photo)"
                class="modal-trigger" data-target="deletePhoto">
            </div>
        </div>

        <UploadPhoto id="uploadPhoto" :albumId="$route.params.id"/>
        <DeletePhoto id="deletePhoto" :photo="selectDeletePhoto"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toast from "@/mixins/toast";
import UploadPhoto from "@/components/modal/UploadPhoto";
import DeletePhoto from "@/components/modal/DeletePhoto";


export default {
    name: "Album",
    data: () => ({
        selectDeletePhoto: ''
    }),
    mixins: [toast],
    components: {
        UploadPhoto,
        DeletePhoto
    },
    methods: {
        ...mapActions('album', ['deleteAlbum']),
        async onDelete() {
            await this.deleteAlbum(this.album.id);
            this.showDangerMessage("Album was deleted!");
            this.$router.push({ name: 'albums'});
        },
        onEdit() {
            this.$router.push({ name: 'album-page-edit', params: {id: this.$route.params.id }});
        },
        onSelectDeletePhoto(photo) {
            this.selectDeletePhoto = photo;
        }
    },
    computed: {
        ...mapGetters('album', ['getAlbumById', 'getPhotosByAlbumId']),
        album() {
            return this.getAlbumById(this.$route.params.id);
        },
        photos() {
            return this.getPhotosByAlbumId(this.$route.params.id);
        }
    },
    async mounted() {
        // await this.fetchPhotosByAlbumId(this.$route.params.id);
        // eslint-disable-next-line no-undef
        M.Modal.init(document.getElementById("uploadPhoto"));
        // eslint-disable-next-line no-undef
        M.Modal.init(document.getElementById("deletePhoto"));
    },
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
}
.header h4 {
    margin-right: 25px;
}
.photos {
    display: flex;
    flex-wrap: wrap;
}
.photos > div {
    margin-right: 15px;
    margin-bottom: 15px;
}
.photo img {
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    cursor: pointer;
}
.buttons button {
    margin-right: 20px;
    margin-bottom: 10px;
}
.buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>