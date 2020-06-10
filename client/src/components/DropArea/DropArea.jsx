import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import './DropArea.scss';

const sanitizeEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const DropArea = (props) => {
  const [active, setActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loadedVal, setLoadedVal] = useState(0);

  const handleDragEnter = (e) => {
    sanitizeEvent(e);
    setActive(true);
  };

  const handleDragLeave = (e) => {
    sanitizeEvent(e);
    setActive(false);
  };

  const handleDragOver = (e) => {
    sanitizeEvent(e);
  };

  const handleDrop = (e) => {
    sanitizeEvent(e);
    setActive(false);

    let files = Array.from(e.dataTransfer.files);
    const formData = new FormData();

    files.forEach(async (file) => {
      // Show image preview in browser
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => setPreview(reader.result);

      // Upload image
      formData.append('image', file);
      try {
        setUploading(true);
        const response = await axios({
          method: 'POST',
          url: '/upload',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: ({ loaded, total }) => {
            setLoadedVal(Math.floor((loaded / total) * 100));
          }
        });
        console.log(response);
      } catch ({ message }) {
        console.error(message);
      }
      setUploading(false);
    });
  };

  return (
    <>
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`drop-area${active ? ' active' : ''}${preview ? ' preview' : ''}`}
      >
        {preview ? <img src={preview} alt="preview" /> : <p>Drop Image Here</p>}
      </div>
      {uploading && <ProgressBar value={loadedVal} />}
    </>
  );
};

export default DropArea;
