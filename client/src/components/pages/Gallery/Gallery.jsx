import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageContent from '../../containers/PageContent/PageContent';
import DropArea from '../../DropArea/DropArea';
import GalleryImage from '../../GalleryImage/GalleryImage';
import './Gallery.scss';

const Gallery = (props) => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get('/images');
    setImages([...response.data]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <PageContent>
      <h1>Gallery Page</h1>
      <h2>Upload An Image</h2>
      <DropArea fetchImages={fetchImages} />
      <h2>Image Gallery</h2>
      {images.length ? (
        images.map((image) => <GalleryImage image={image} key={image._id} />)
      ) : (
        <p>Loading images...</p>
      )}
    </PageContent>
  );
};

export default Gallery;
