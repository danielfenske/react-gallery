import React from 'react';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

// import components 
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  // #region ==== USE EFFECT ====
  useEffect(() => {
    console.log('in useEffect');

    // initiate GET request on page load
    getGalleryItems();
  }, [])
  // #endregion ====


  // #region ==== GET GALLERY ITEMS ====
  const getGalleryItems = () => {
    console.log('in getGalleryItems');

    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Response from GET:', response);

      // reassigns state of galleryItems from empty array to array of objects held in server
      setGalleryItems(response.data);
    }).catch((error) => {
      console.log('Error from GET:', error);
    })
  }
  // #endregion ====

  console.log('Gallery items array:', galleryItems);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <main>
        <GalleryList
          galleryItems={galleryItems}
        />
      </main>
    </div>
  );
}

export default App;
