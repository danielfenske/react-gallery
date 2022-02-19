// import GalleryItem component
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

const GalleryList = ({ galleryItems, updateLikeCount }) => {
    console.log('in GalleryList component', galleryItems);
    return (
        <>
            <div className="galleryContainer">
                {galleryItems.map(galleryItem =>
                    (<GalleryItem
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                        updateLikeCount={updateLikeCount}
                    />)
                )}
            </div>
        </>
    )
}

export default GalleryList;