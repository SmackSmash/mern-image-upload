import React from 'react';
import PageContent from '../../containers/PageContent/PageContent';
import DropArea from '../../DropArea/DropArea';
import './Gallery.scss';

const Gallery = (props) => {
  return (
    <PageContent>
      <h1>Gallery Page</h1>
      <h2>Upload An Image</h2>
      <DropArea />
      <h2>Image Gallery</h2>
    </PageContent>
  );
};

export default Gallery;
