import './GalleryItem.css';
import { useState } from 'react';

const GalleryItem = ({ galleryItem, updateLikeCount }) => {

    // redefine variables from galleryItem object
    let path = galleryItem.path;
    let title = galleryItem.title;
    let description = galleryItem.description;
    let location = galleryItem.location;
    let likes = galleryItem.likes;
    
    // use state for image, which will toggle on click
    const [showImage, setShowImage] = useState(true);

    // changes state of showImage variable when image/description is clicked
    const handleImageContainerClick = () => {
        console.log('in handleImageClick');

        setShowImage(!showImage);
    }

    // adds one to like count when like button is clicked
    const handleLikeButton = () => {

        let id = galleryItem.id;

        console.log('in handleLikeButton', id);

        // send id back to app.jsx for PUT endpoint
        updateLikeCount(id);
    }

    return (
        <>
            <div className="galleryItemContainer">
                <h1>{title}</h1>
                <div className="imageContainer">
                    {
                        showImage ?
                                <img
                                src={path}
                                className="galleryImage"
                                onClick={handleImageContainerClick}
                                />
                            :   <div
                                className="galleryDescription"
                                onClick={handleImageContainerClick}
                                >
                                {description}
                                </div>
                    }
                </div>
                <h1>{location}</h1>
                <p>Likes: {likes}</p>
                <button
                    onClick={handleLikeButton}
                >
                    Like
                </button>
            </div>
        </>
    )
}

export default GalleryItem;