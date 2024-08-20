import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Review from '../../data/reviews.json';

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % Review.length);
        setFade(true);
      }, 500); // Duration of the fade-out animation
    }, 5000); // Time before showing the next review

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 20 });
        }
      });
    }, observerOptions);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <div className='mt-10 relative'>
      <div className='absolute z-[-5]'>
        <img
          className='h-[55rem] object-cover'
          src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className='h-[40rem] z-1 flex flex-col text-center'>
        <motion.h2
          className='text-white drop-shadow-2xl font-black text-3xl mt-20'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Unforgettable Travel Experience
        </motion.h2>
        <motion.p
          className='text-white mt-5 mx-5'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our customer's feedback is essential in building a great reputation and maintaining excellent service. By listening to our customer's needs, we can improve our offerings and provide an exceptional travel experience.
        </motion.p>
        <div className='flex justify-center items-center mt-10'>
          <motion.img
            className='w-[150px] h-[150px] object-cover rounded-full shadow-white shadow-2xl'
            src="https://images.unsplash.com/photo-1609771202595-386667970a2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5qb3lpbmclMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D"
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>
      <motion.div
        ref={ref}
        className={`flex mb-24 mt-[-100px] flex-col justify-start items-start rounded-[20px] bg-[#1ABC9C] mx-5 p-10 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className='text-white italic font-thin'>{Review[currentReviewIndex].review}</p>
        <h4 className='font-black tracking-wider text-white mt-3'>{Review[currentReviewIndex].name}</h4>
        <p className='text-white'>{Review[currentReviewIndex].address}</p>
      </motion.div>
    </div>
  );
};

export default Reviews;
