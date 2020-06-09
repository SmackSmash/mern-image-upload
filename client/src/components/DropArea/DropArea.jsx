import React, { useState } from 'react';
import './DropArea.scss';

const sanitizeEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const DropArea = (props) => {
  const [active, setActive] = useState(false);
  const [preview, setPreview] = useState(null);

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
    console.log(e);
  };

  const handleDrop = (e) => {
    sanitizeEvent(e);
    setActive(false);

    let files = Array.from(e.dataTransfer.files);
    console.log(files);

    files.forEach((file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => setPreview(reader.result);
    });
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`drop-area${active ? ' active' : ''}`}
    >
      {preview ? <img src={preview} alt="preview" /> : <p>Drop Image Here</p>}
    </div>
  );
};

export default DropArea;
