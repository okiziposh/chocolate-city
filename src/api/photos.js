import axios from 'axios';

export const getAlbumPhotos = (albumId) => axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
