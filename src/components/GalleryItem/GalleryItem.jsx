import './GalleryItem.css';
import { useState } from 'react';

const GalleryItem = ({ galleryItem }) => {

    const [showImage, setShowImage] = useState(true);

    const handleImageContainerClick = () => {
        console.log('in handleImageClick');

        setShowImage(!showImage);
    }

    const handleLikeButton = () => {
        console.log('in handleLikeButton');

        galleryItem.likes = galleryItem.likes + 1;

        console.log('galleryItem.likes:', galleryItem.likes);
    }

    return (
        <>
            <div className="galleryItemContainer">
                <h1>{galleryItem.title}</h1>
                <div className="imageContainer">
                    {
                        showImage ?
                                <img
                                src={galleryItem.path}
                                className="galleryImage"
                                onClick={handleImageContainerClick}
                                />
                            :   <div
                                className="galleryDescription"
                                onClick={handleImageContainerClick}
                                >
                                {galleryItem.description}
                                </div>
                    }
                </div>
                <h1>{galleryItem.location}</h1>
                <p>Likes: {galleryItem.likes}</p>
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