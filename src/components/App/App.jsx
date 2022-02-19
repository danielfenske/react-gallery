import React from 'react';
import './App.css';

import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  // =============== USE EFFECT =======================
  useEffect( () => {
    console.log('in useEffect');
    
    // initiate GET request on page load
    getGalleryItems();
  }, [])

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
