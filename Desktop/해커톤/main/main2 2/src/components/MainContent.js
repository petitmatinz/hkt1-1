import React, { useState } from 'react';
import './MainContent.css'; // 필요한 경우 CSS 파일도 포함

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
    <main className="main-content">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>{"<"}</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="next" onClick={nextSlide}>{">"}</button>
      </div>
    </main>
  );
};

export default MainContent;
