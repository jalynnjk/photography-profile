import './App.css';
import { useState } from 'react';
import { DataContext } from './dataContext.js'
import Profile from './components/profile/Profile';
import PhotoAlbum from './components/photo_album/PhotoAlbum'

function App() {
  const [photographerAlbums, setPhotographerAlbums] = useState()

  return (
    <DataContext.Provider className="App"
    value={{photographerAlbums, setPhotographerAlbums}}
    >
      <Profile />
      <PhotoAlbum />
    </DataContext.Provider>
  );
}

export default App;
