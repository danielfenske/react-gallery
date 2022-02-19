import React from 'react';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  // =============== USE EFFECT =======================
  useEffect(() => {
    console.log('in useEffect');

    // initiate GET request on page load
    getGalleryItems();
  }, [])
  // =============== END USE EFFECT ===================


  // =============== GET GALLERY ITEMS ================
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
  // ============= END GET GALLERY ITEMS ===============

  console.log('Gallery items array:', galleryItems);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
