// import GalleryItem component
import GalleryItem from '../GalleryItem/GalleryItem'

const GalleryList = ({ galleryItems }) => {
    console.log('in GalleryList component', galleryItems);
    return (
        <>
            <div className="galleryContainer">
                {galleryItems.map(galleryItem =>
                    (<GalleryItem
                        galleryItem={galleryItem}
                        key={galleryItem.id}
                    />)
                )}
            </div>
        </>
    )
}

export default GalleryList;