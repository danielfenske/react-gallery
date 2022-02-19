
const GalleryItem = ({galleryItem}) => {
    return (
        <>
        <div className="galleryItemContainer">
            <h1>{galleryItem.title}</h1>
            <img src={galleryItem.path} className="galleryImage"/>
            <p>{galleryItem.description}</p>
            <h1>{galleryItem.location}</h1>
            <p>Likes: {galleryItem.likes}</p>
        </div>
        </>
    )
}

export default GalleryItem;