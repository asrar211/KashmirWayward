import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Plan = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  const handleScroll = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      });
    }, observerOptions);

    if (ref.current) observer.observe(ref.current);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className='flex flex-col justify-center items-center pt-10'
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h4 className='ren text-3xl font-semibold text-[#1ABC9C]'>Dream Vacation Destination</h4>
      <h2 className='font-black text-3xl px-2 mt-5 text-center'>Plan the Trip of a Lifetime with Ease</h2>
      <p className='text-center mx-5 text-[#107460] mt-5'>
        Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world,
        a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
      </p>
      <div>
        <button className='bg-[#1ABC9C] text-white font-bold px-6 py-3 rounded-md mt-5'>
          <Link to='/contact'>More Info</Link>
        </button>
      </div>
    </motion.div>
  );
};

export default Plan;
