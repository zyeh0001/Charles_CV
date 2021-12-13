import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';

function Gallery({ images }) {
  const ImageList = images?.map((image) => {
    return { key: image, original: image, thumbnail: image };
  });

  return (
    <div>
      <ImageGallery items={ImageList} showBullets />
    </div>
  );
}

export default Gallery;
