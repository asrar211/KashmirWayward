// src/components/Features.js
import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

const Features = () => {
  const features = [
    "Explore the beautiful valleys",
    "Luxurious stays",
    "Adventure sports",
    "Guided tours",
    "Cultural experiences",
    "Local cuisines",
    "Easy bookings",
    "24/7 customer support"
  ];

  // Duplicating the features array to create a seamless scroll effect
  const allFeatures = [...features, ...features];

  return (
    <div className="mt-20 overflow-hidden py-6 bg-blue-500">
      <motion.div
        className="marquee flex items-center"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {allFeatures.map((feature, index) => (
          <div
            key={index}
            className="feature-item inline-block px-8 py-16 font-semibold text-lg text-white mx-2 rounded-lg"
          >
            {feature}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
