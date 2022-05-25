import React, { Component } from "react";

export default function ImageGalleryItems({ imageList, onClickImg }) {
  return (
    <ul className="ImageGallery">
      {imageList.map((e) => {
        return (
          <li
            className="ImageGalleryItem"
            key={e.id}
            onClick={() => onClickImg(e.largeImageURL)}
          >
            <img
              src={e.webformatURL}
              alt={e.tags}
              className="ImageGalleryItem-image"
            />
          </li>
        );
      })}
    </ul>
  );
}
