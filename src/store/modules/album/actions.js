import {
    SET_ALBUMS,
    ADD_ALBUM,
    DELETE_ALBUM,
    FETCH_ALL_PHOTOS,
    UPDATE_ALBUM,
    UPLOAD_PHOTO,
    DELETE_PHOTO
} from "@/store/modules/album/mutationTypes";
import {SET_LOADING} from "@/store/mutationTypes";

export default {
    async fetchAllAlbums({ commit }) {
        commit(SET_LOADING, true, { root: true });

        const request = await fetch('https://jsonplaceholder.typicode.com/albums');
        const albums = await request.json();
        commit(SET_ALBUMS, albums);

        commit(SET_LOADING, false, { root: true });
    },

    async addAlbum({ commit }, data) {
        commit(SET_LOADING, true, { root: true });

        commit(ADD_ALBUM, data);

        commit(SET_LOADING, false, { root: true });
    },

    async deleteAlbum({ commit }, albumId) {
        commit(SET_LOADING, true, { root: true });

        commit(DELETE_ALBUM, albumId);

        commit(SET_LOADING, false, { root: true });
    },

    async fetchAllPhotos({ commit }) {
        commit(SET_LOADING, true, { root: true });

        const request = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await request.json();
        commit(FETCH_ALL_PHOTOS, photos);

        commit(SET_LOADING, false, { root: true });
    },

    async updateAlbum({ commit }, data) {
        commit(SET_LOADING, true, { root: true });

        commit(UPDATE_ALBUM, data);

        commit(SET_LOADING, false, { root: true });
    },

    async uploadAlbumPhoto({ commit }, photoData) {
        commit(SET_LOADING, true, { root: true });

        commit(UPLOAD_PHOTO, photoData);

        commit(SET_LOADING, false, { root: true });
    },

    async deletePhoto({ commit }, photoId) {
        commit(SET_LOADING, true, { root: true });

        commit(DELETE_PHOTO, photoId);

        commit(SET_LOADING, false, { root: true });
    }
}