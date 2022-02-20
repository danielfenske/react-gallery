import React from 'react';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

// import components 
import GalleryList from '../GalleryList/GalleryList';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



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


  // #region ==== UPDATE GALLERY ITEM ====
  const updateLikeCount = (id) => {
    console.log('in updateLikeCount', id);

    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    }).then((response) => {
      console.log('Response from PUT:', response);

      // re-render page with most recent list of gallery items from server
      getGalleryItems();
    }).catch((error) => {
      console.log('Error from PUT:', error);
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
          updateLikeCount={updateLikeCount}
        />
      </main>
    </div>
  );
}

export default App;
