type ImageContainerProp = {
    image: string
}

function ImageContainer({image}: ImageContainerProp) {
    return (
        <div className="image-container">
            <div className="border-gradient">
                <img src={image} alt={"Image of me and Toti"} className="image"/>
            </div>
        </div>
    );
}

export default ImageContainer;