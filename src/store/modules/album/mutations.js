import {
    SET_ALBUMS,
    ADD_ALBUM,
    DELETE_ALBUM,
    FETCH_ALL_PHOTOS,
    UPDATE_ALBUM,
    UPLOAD_PHOTO,
    DELETE_PHOTO
} from "@/store/modules/album/mutationTypes";

export default {
    [SET_ALBUMS]: (state, albums) =>  {
        state.albums = [ ...state.albums, ...albums];
    },
    [ADD_ALBUM]: (state, album) => {
        state.albums.push(album);
    },
    [DELETE_ALBUM]: (state, albumId) => {
        const index = state.albums.findIndex(album => album.id === albumId);

        if (index !== -1) {
            state.albums.splice(index, 1);
        }
    },
    [FETCH_ALL_PHOTOS]: (state, photos) => {
        state.photos = photos;
    },
    [UPDATE_ALBUM]: (state, data) => {
        const index = state.albums.findIndex(album => album.id === data.id);
        state.albums[index].title = data.title;
        state.albums[index].userId = data.userId;
    },
    [UPLOAD_PHOTO]: (state, photoData) => {
        const photoObj = {
            id: state.photos.length + 1,
            albumId: photoData.albumId,
            title: photoData.title,
            url: photoData.url,
            thumbnailUrl: photoData.url
        };
        state.photos.push(photoObj);
    },
    [DELETE_PHOTO]: (state, photoId) => {
        const index = state.photos.findIndex(photo => photo.id === photoId);

        if (index !== -1) {
            state.photos.splice(index, 1);
        }
    }
}