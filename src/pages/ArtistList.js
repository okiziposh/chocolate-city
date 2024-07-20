import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
    setArtists(response.data);
  };

  return (
    <div>
      <h2>Artists in Chocolate City</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;

