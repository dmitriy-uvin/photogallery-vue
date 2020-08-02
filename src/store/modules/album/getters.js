export default {
    getAllAlbums: state => state.albums,
    getAlbumById: state => id => {
        return state.albums.find(album => album.id === id);
    },
    getAllPhotos: state => state.photos,
    getPhotosByAlbumId: state => id => {
        return state.photos.filter(photo => photo.albumId === id);
    }
}
