import  React from "react";
// import axios from "axios";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

// import { getImages } from "components/API/api-services";

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '24541391-b479c34a264a17829baf6aba8';

// export default class ImageGallery extends Component {

//     state = {
//         images: []
//     };

//     render() {
//         return <Gallery>
//             {this.state.images.map(({ id, webformatURL, largeImageURL, tags }) => (
//                 <ImageGalleryItem
//                     key={id}
//                     image={webformatURL}
//                     tags={tags}
//                     // onClick={onClick}
//                     // showModal={showModal}
//                     // imageForModal={largeImageURL}
//                 />
//             ))}
//         </Gallery>
//     };
    

// };


export const ImageGallery = ({ images }) => (
    <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
                key={id}
                image={webformatURL}
                tags={tags}
                // onClick={onClick}
                // showModal={showModal}
                // imageForModal={largeImageURL}
            />
        ))}
    </Gallery>
);

