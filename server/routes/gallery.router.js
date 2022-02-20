const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    let queryText = 'UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id"=$1;';

    pool.query(queryText, [galleryId])
        .then(result => {
            // status "OK"
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error updating gallery', error);
            
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // define request for database 
    let queryText = 'SELECT * FROM "gallery" ORDER BY "id";';
    
    pool.query(queryText)
        .then(result => {

            // send back results in an object
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting gallery', error);

            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;