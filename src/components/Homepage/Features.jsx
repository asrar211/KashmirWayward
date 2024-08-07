import React from 'react';
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

  return (
    <div className=" mt-20 overflow-hidden whitespace-nowrap py-6 bg-blue-500">
      <div className="marquee animate-marquee flex items-center">
        {features.concat(features).map((feature, index) => (
          <div
            key={index}
            className="inline-block px-8 py-16 font-semibold text-lg  text-white mx-2 rounded-lg "
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

