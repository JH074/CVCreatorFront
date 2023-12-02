import React, { useState, useEffect } from 'react';

const positiveRemarks = [
  "Excellent service! I highly recommend it. -John Elden Ring",
  "The product exceeded my expectations. Very satisfied! -Garfield",
  "Outstanding quality and fast delivery. -Neruda",
  "Amazing experience from start to finish. Will buy again! -Jose Jose",
  "Great customer support. They went above and beyond. -Lamar",
  "Top-notch product. I'm a happy customer. -Chayyan"
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalRemarks = positiveRemarks.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalRemarks);
    }, 5000); // Change 5000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [totalRemarks]);

  const translationPercentage = currentIndex * (100 / totalRemarks);

  return (
    <div className="reviews-container relative flex items-center justify-center h-screen">
      <div className="reviews p-24 rounded-lg flex transition-transform duration-500 ease-in-out">
        {positiveRemarks.map((remark, index) => (
          <div
            key={index}
            className={`review-container w-64 p-4 opacity-0 ${index === currentIndex ? 'opacity-100' : ''}`}
          >
            <div className="rounded bg-white p-4">
              {remark}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
