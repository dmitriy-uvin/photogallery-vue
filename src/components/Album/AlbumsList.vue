<template>
    <div>
        <div>
            <h1>AlbumList</h1>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select id="user-filter-select" v-model="selectUserId" @change="onSelectChange">
                    <option value="" selected>All</option>
                    <option :value="user.id" v-for="user in users" :key="user.id">{{ user.name }}</option>
                </select>
                <label for="user-filter-select">User</label>
            </div>
        </div>
        <div class="albums-container">
            <AlbumItem v-for="album in filteredAlbums" :key="album.id" :album="album"/>
        </div>
        <div class="fixed-action-btn">
            <router-link to="/album/add" class="btn-floating btn-large blue pulse">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AlbumItem from "@/components/Album/AlbumItem";

export default {
    name: "AlbumsList",
    components: {
        AlbumItem
    },
    data: () => ({
       selectUserId: ''
    }),
    computed: {
        ...mapGetters('album', ['getAllAlbums']),
        ...mapGetters('user', ['allUsers']),
        albums() {
            return this.getAllAlbums;
        },
        filteredAlbums() {
            if(this.selectUserId) {
                return this.albums.filter(album => album.userId === Number(this.selectUserId))
            }
            return this.albums;
        },
        users() {
            return this.allUsers;
        }
    },
    async mounted() {
        // eslint-disable-next-line no-undef
        M.FormSelect.init(document.getElementById("user-filter-select"))
    },
    methods: {
        onSelectChange() {

            console.log(this.selectUserId);
        }

    }

}
</script>

<style scoped>
.albums-container {
    display: flex;
    flex-wrap: wrap;
    margin: 1%;
    box-sizing: border-box;

}
</style>