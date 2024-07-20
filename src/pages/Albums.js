import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Albums = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`); 
    setAlbums(response.data);
  };

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <img src={`https://via.placeholder.com/150?text=Album+${album.id}`} alt={album.title} />
            <p>{album.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;

