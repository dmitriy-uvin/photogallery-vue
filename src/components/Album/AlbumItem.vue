<template>
    <div class="col s3 album-block" @click="onAlbumClick">
        {{ album.title }}
    </div>
</template>

<script>
export default {
    name: "AlbumItem",
    props: {
        album: {
            required: true
        }
    },
    methods: {
        onAlbumClick() {
            this.$router.push({ name: 'album-page', params: { id: this.album.id }})
        }
    }
}
</script>

<style scoped>
.album-block {
    background: bisque;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
}
</style>