import './GalleryItem.css'
import { useState } from 'react';

const GalleryItem = ({ galleryItem }) => {

    const [showImage, setShowImage] = useState(true);

    const handleImageContainerClick = () => {
        console.log('in handleImageClick');

        setShowImage(!showImage);
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
                            :   <p
                                onClick={handleImageContainerClick}
                                >
                                {galleryItem.description}
                                </p>
                    }
                </div>
                <h1>{galleryItem.location}</h1>
                <p>Likes: {galleryItem.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;