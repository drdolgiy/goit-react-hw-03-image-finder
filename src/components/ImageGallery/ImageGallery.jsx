import  React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onClick }) => (
    <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, tags  }) => (
            <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                onClick={onClick}
                largeImageURL={largeImageURL}
            />
        ))}
    </Gallery>
);

