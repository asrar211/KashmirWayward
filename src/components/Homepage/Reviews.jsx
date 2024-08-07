// src/components/ReviewSection.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { id: 1, name: 'John Doe', review: 'Absolutely stunning views and great hospitality!' },
  { id: 2, name: 'Jane Smith', review: 'A wonderful experience with breathtaking scenery.' },
  { id: 3, name: 'Alice Johnson', review: 'Perfect getaway. Highly recommend the local cuisine.' },
  { id: 4, name: 'Bob Brown', review: 'The service was impeccable and the landscapes were mesmerizing.' },
  { id: 5, name: 'Charlie Davis', review: 'An unforgettable trip with amazing cultural experiences.' },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="p-6 mt-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">What Our Visitors Say</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3  text-black rounded-full shadow-lg  transition-colors duration-300"
          >
            &lt;
          </button>
          <motion.div
            className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 mx-2"
            key={reviews[current].id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{reviews[current].name}</h3>
            <p className="text-base text-gray-700">{reviews[current].review}</p>
          </motion.div>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-black rounded-full shadow-lg  transition-colors duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
