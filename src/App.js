import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArtistList from './pages/ArtistList';
import ArtistDetail from './pages/ArtistDetail';
import Albums from './pages/Albums';
import Tweets from './pages/Tweets';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/artists/:id/albums" element={<Albums />} />
        <Route path="/artists/:id/tweets" element={<Tweets />} />
      </Routes>
    </div>
  );
};

export default App;



