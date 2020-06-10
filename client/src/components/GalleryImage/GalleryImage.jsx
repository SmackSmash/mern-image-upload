import React, { useState } from 'react';
import './GalleryImage.scss';

const GalleryImage = ({ image: { _id, path, thumbnail } }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <a className="gallery-thumbnail" href={`http://localhost:8080${path}`}>
      <img
        className={`gallery-thumbnail__image${loaded ? ' loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        src={thumbnail}
        alt="preview"
      />
    </a>
  );
};

export default GalleryImage;
