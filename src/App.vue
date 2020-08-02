<template>
    <div id="app">
        <Loader v-if="isLoading"/>
        <Navbar />
        <div class="container">

            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Loader from "@/components/common/Loader";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'App',
    components: {
        Navbar,
        Loader
    },
    methods: {
        ...mapActions('user', ['fetchAllUsers']),
        ...mapActions('album', ['fetchAllAlbums', 'fetchAllPhotos']),
    },
    async mounted() {
        await this.fetchAllUsers();
        await this.fetchAllAlbums();
        await this.fetchAllPhotos();
    },
    computed: {
        ...mapGetters(['isLoading']),
    }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
