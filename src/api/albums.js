import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/albums';

export const getArtistAlbums = (artistId) => axios.get(`${API_URL}?userId=${artistId}`);
