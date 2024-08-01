// MainContent.js

import React, { useState } from 'react';
import './MainContent.css';
import ImageComponent from './ImageComponent';

const images = [
  `${process.env.PUBLIC_URL}/images/slide0.jpg`,
  `${process.env.PUBLIC_URL}/images/slide1.jpg`,
  `${process.env.PUBLIC_URL}/images/slide2.jpg`,
  `${process.env.PUBLIC_URL}/images/slide3.jpg`,
];

const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <main className="main-content">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>{"<"}</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button className="next" onClick={nextSlide}>{">"}</button>
        </div>
      </main>

      {/* ImageComponent 추가 */}
      <ImageComponent />
    </div>
  );
};

export default MainContent;
