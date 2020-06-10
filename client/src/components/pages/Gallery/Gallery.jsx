import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageContent from '../../containers/PageContent/PageContent';
import DropArea from '../../DropArea/DropArea';
import './Gallery.scss';

const Gallery = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('/images');
      setImages([...response.data]);
    };
    fetchImages();
  }, []);

  return (
    <PageContent>
      <h1>Gallery Page</h1>
      <h2>Upload An Image</h2>
      <DropArea />
      <h2>Image Gallery</h2>
      {images.length ? (
        images.map(({ thumbnail }) => <img key={thumbnail} src={thumbnail} alt="image preview" />)
      ) : (
        <p>Loading images...</p>
      )}
    </PageContent>
  );
};

export default Gallery;
