import './GalleryItem.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'

const GalleryItem = ({ galleryItem, updateLikeCount }) => {

    // redefine variables from galleryItem object
    let path = galleryItem.path;
    let title = galleryItem.title;
    let description = galleryItem.description;
    let location = galleryItem.location;
    let likes = galleryItem.likes;
    let month = galleryItem.month
    
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
                {
                    showImage ?
                        <div 
                        className="galleryCover"
                        >
                            <img 
                            width="250"
                            src={path}
                            />
                                                    
                            <h1 className="titleText" onClick={handleImageContainerClick}>{title}</h1>
                            
                            <div className="itemBody" onClick={handleImageContainerClick}></div>

                            <div className='galleryFooter'>
                                <div onClick={handleLikeButton}><FontAwesomeIcon icon={faHeart} inverse/><h1 className='likesText'>{likes}</h1></div>
                                <h1 className="locationText">{location}</h1>
                            </div>
                        </div>

                        :   
                        <div 
                        className="galleryDescription"
                        onClick={handleImageContainerClick}
                        >
                            <img 
                            width="250"
                            src={path}
                            />
                            
                            <h1 className="monthText">{month}</h1>
                            <p>{description}</p>
                            
                            <div className='galleryFooter'>
                                <div onClick={handleLikeButton}><FontAwesomeIcon icon={faHeart} inverse/><h1 className='likesText'>{likes}</h1></div>
                                <h1 className="locationText">{location}</h1>
                            </div>
                        </div>
                }
        </>
    )
}

export default GalleryItem;