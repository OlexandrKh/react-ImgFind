import React from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, onClickImg }) {
  return (
    <>
      <ImageGalleryItems imageList={images} onClickImg={onClickImg} />
    </>
  );
}
