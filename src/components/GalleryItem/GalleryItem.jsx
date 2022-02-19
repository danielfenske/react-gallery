import './GalleryItem.css';
import { useState } from 'react';

const GalleryItem = ({ galleryItem }) => {

    let path = galleryItem.path;
    let title = galleryItem.title;
    let description = galleryItem.description;
    let location = galleryItem.location;
    let likes = galleryItem.likes 

    const [showImage, setShowImage] = useState(true);

    const handleImageContainerClick = () => {
        console.log('in handleImageClick');

        setShowImage(!showImage);
    }

    const handleLikeButton = () => {
        console.log('in handleLikeButton');

        likes = likes + 1;
    
        console.log(likes);
    }

    return (
        <>
            <div className="galleryItemContainer">
                <h1>{galleryItem.title}</h1>
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