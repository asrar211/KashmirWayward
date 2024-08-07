// src/components/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const initialImages = [
  { src: 'https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Kashmir Valley', size: 'lg:col-span-1 ' },
  { src: 'https://images.pexels.com/photos/4061007/pexels-photo-4061007.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', alt: 'Kashmir Houseboat', size: '' },
  { src: 'https://images.pexels.com/photos/2528431/pexels-photo-2528431.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Kashmir Landscape', size: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/3974089/pexels-photo-3974089.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Kashmir Snow', size: '' },
  { src: 'https://images.pexels.com/photos/3974271/pexels-photo-3974271.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Kashmir Mountains', size: '' },
  { src: 'https://images.pexels.com/photos/6155700/pexels-photo-6155700.jpeg', alt: 'Kashmir River', size: 'lg:col-span-1' },
  { src: 'https://images.pexels.com/photos/6945872/pexels-photo-6945872.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Kashmir Trees', size: '' },
  { src: 'https://images.pexels.com/photos/6262924/pexels-photo-6262924.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Kashmir Road', size: '' },
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const imagesToShow = showMore ? initialImages : initialImages.slice(0, 6);

  return (
    <div className="p-4 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg ${image.size} relative cursor-pointer`}
              onClick={() => setCurrentImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full rounded-lg object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-4 translate-x-[34vw] font-semibold min-[900px]:translate-x-[40vw] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Show More
          </button>
        )}
      </div>

      <Modal
        isOpen={!!currentImage}
        onRequestClose={() => setCurrentImage(null)}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <button
          onClick={() => setCurrentImage(null)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <img src={currentImage} alt="Expanded View" className="max-w-full max-h-full object-contain" />
      </Modal>
    </div>
  );
};

export default Gallery;
