// src/components/ReviewSection.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../../App.css";

function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { id: 1, name: 'John Doe', review: 'Our trip with this travel company was exceptional. The guided tours were informative, and the accommodations were top-notch. Truly unforgettable!', rating: 5 },
    { id: 2, name: 'Jane Smith', review: 'Booking with this travel agency made our vacation seamless. From stunning destinations to excellent service, every detail was handled with care and professionalism.', rating: 4 },
    { id: 3, name: 'Alice Johnson', review: 'This travel company exceeded our expectations. Their personalized itineraries and local guides provided us with an immersive and enriching travel experience.', rating: 5 },
    { id: 4, name: 'Bob Brown', review: 'We had a fantastic journey with this travel service. The trip was well-organized, with breathtaking sights and excellent customer service throughout our adventure.', rating: 4 },
    { id: 5, name: 'Charlie Davis', review: 'Our experience with this travel agency was outstanding. They offered unique travel packages that allowed us to explore hidden gems and enjoy luxury accommodations.', rating: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Helper function to render stars
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`text-yellow-500 ${index < rating ? 'text-yellow-500' : 'text-gray-200'}`}
        />
      ));
  };

  return (
    <div className="review-section mt-20 py-10 bg-gray-100">
      <motion.div
        key={reviews[currentIndex].id}
        className="review text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className='opacity-70 text-xl px-10 min-[900px]:px-[20%]'>
          <span className='font-bold text-5xl'>"</span> {reviews[currentIndex].review}
        </h3>
        <div className="rating mt-2 mb-4">
          {renderStars(reviews[currentIndex].rating)}
        </div>
        <p>- {reviews[currentIndex].name}</p>
      </motion.div>
    </div>
  );
}

export default ReviewSection;
