import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ArtistDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Artist Detail</h2>
      <p>Details about artist {id}</p>
      <Link to={`/artists/${id}/albums`}>View Albums</Link>
      <br />
      <Link to={`/artists/${id}/tweets`}>View Tweets</Link>
    </div>
  );
};

export default ArtistDetail;
