// src/components/PackageDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import packagesData from "../../itenaries.json";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PackageDetail = () => {
  const { id } = useParams();
  const packageDetail = packagesData.find(pkg => pkg.id === id);

  if (!packageDetail) {
    return <div>Package not found</div>;
  }

  const {
    title,
    description,
    images,
    highlights,
    itinerary,
    price,
    duration,
    inclusions,
    exclusions,
    contactInfo
  } = packageDetail;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl text-center text-blue-500 font-bold mb-4">{title}</h1>
      <Slider {...sliderSettings} className="mb-6">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        ))}
      </Slider>
      <p className="py-4 text-center opacity-70">{description}</p>
      <h2 className="text-2xl font-semibold mb-2 text-blue-900">Package Highlights</h2>
      <p className='text-center font-semibold'>(depends upon package)</p>
      <ul className="list-disc pl-6 mb-4">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2 text-blue-900">Itinerary</h2>
      <ul className="mb-4">
        {itinerary.map((day, index) => (
          <li key={index}>
            <strong>Day {day.day}:</strong> {day.activities}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2 text-blue-900">Inclusions</h2>
      <ul className="list-disc pl-6 mb-4">
        {inclusions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2 text-blue-900">Exclusions</h2>
      <ul className="list-disc pl-6 mb-4">
        {exclusions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-900">Price</h2>
        <p className='font-semibold'>Negotiable</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-900">Duration</h2>
        <p className='font-semibold'>Customizable</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-blue-900">Contact Information</h2>
        <p> <span className='font-semibold'>Phone:</span> {contactInfo.phone}</p>
        <p><span className='font-semibold'>Email:</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => window.open(`https://wa.me/91${contactInfo.phone.slice(4)}`, "_blank")}
      >
        Book Now
      </button>
    </div>
  );
};

export default PackageDetail;
