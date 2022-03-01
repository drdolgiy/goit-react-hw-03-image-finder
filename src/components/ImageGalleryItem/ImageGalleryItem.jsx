
import { ListItem, Img } from "./ImageGalleryItem.styled";
import propTypes from "prop-types";

export const ImageGalleryItem = ({ image, tags }) => {

    return (
        <ListItem>
            <Img src={image} alt={tags} />
        </ListItem>
    );
};

ImageGalleryItem.propTypes = {
    image: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
};