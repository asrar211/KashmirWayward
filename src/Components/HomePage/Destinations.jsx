import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Destinations = () => {
  const controls = useAnimation();
  const ref = useRef(null);

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
    <motion.div
      ref={ref}
      className='mt-10'
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='flex flex-col justify-center items-center pt-10'>
        <motion.h4
          className='ren text-3xl font-semibold text-[#1ABC9C]'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          Next Adventure
        </motion.h4>
        <motion.h2
          className='font-black leading-[3rem] text-3xl px-2 mt-5 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Travel Destinations Across World
        </motion.h2>
        <motion.p
          className='text-center mx-7 text-[#107460] mt-5'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.
        </motion.p>
      </div>
      <div className='mt-10 flex justify-center items-center'>
        <motion.img
          className='absolute z-[-1] w-[90%] rounded-[20px] h-[15rem] shadow-2xl shadow-black'
          src="https://images.unsplash.com/photo-1621232051504-dc6f30ba8bc6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1bG1hcmd8ZW58MHx8MHx8fDA%3D"
          alt=""
          initial={{ opacity: 0, scale: 1.1 }}
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className='h-[15rem] flex flex-col justify-end items-center'>
          <motion.h2
            className='text-white font-black text-xl my-2'
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Kashmir
          </motion.h2>
          <motion.p
            className='text-white text-sm font-light mb-5'
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            Experience the Snow Capped Mountains
          </motion.p>
        </div>
      </div>
      <motion.div
        className='text-center font-light mt-10'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        More Coming Soon....
      </motion.div>
    </motion.div>
  );
}

export default Destinations;
