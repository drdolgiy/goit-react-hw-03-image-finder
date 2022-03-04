
import { ListItem, Img } from "./ImageGalleryItem.styled";
import propTypes from "prop-types";

export const ImageGalleryItem = ({ webformatURL,largeImageURL, tags, onClick, showModal }) => {

    return (
        <ListItem onClick={() => onClick(largeImageURL)} >
            <Img src={webformatURL}
                alt={tags}  
                
            />
        </ListItem>
    );
};

ImageGalleryItem.propTypes = {
    webformatURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
};