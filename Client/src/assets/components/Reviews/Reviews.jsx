import React, { useState } from 'react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 6; // Total number of reviews

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
  };

  const translationPercentage = currentIndex * (100 / totalReviews);

  return (
    <div className="reviews-container relative flex items-center justify-center h-screen">
      <div className="reviews p-24 rounded-lg flex transition-transform duration-500 ease-in-out">
        {Array.from({ length: totalReviews }).map((_, index) => (
          <div
            key={index}
            className={`review w-64 p-4 opacity-0 ${index === currentIndex ? 'opacity-100' : ''}`}
          >
            Review {index + 1}
          </div>
        ))}
      </div>
      <button onClick={handleLeftArrowClick} className="absolute left-0 transform -translate-y-1/2 bg-none border-none text-2xl cursor-pointer focus:outline-none">
        &larr;
      </button>
      <button onClick={handleRightArrowClick} className="absolute right-0 transform -translate-y-1/2 bg-none border-none text-2xl cursor-pointer focus:outline-none">
        &rarr;
      </button>
    </div>
  );
};

export default Reviews;