// ImageComponent.js
import React from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/images/스크린샷 2024-07-31 오후 10.16.48.png`} alt="New Jolly Journey Image" />
    </div>
  );
};

export default ImageComponent;
