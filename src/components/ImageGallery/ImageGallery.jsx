import  React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onClick, showModal }) => (
    <Gallery>
        {images.map(({ id, webformatURL, largeImageURL, tags  }) => (
            <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                // showModal={showModal}
                onClick={onClick}
                largeImageURL={largeImageURL}
            />
        ))}
    </Gallery>
);

