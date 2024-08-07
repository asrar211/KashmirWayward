import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Preloader from './Preloader'; // Adjust the path as needed

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, then hide the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
    <div className='absolute top-0 w-full z-[-1]'>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full opacity-50 h-[34rem] min-[900px]:h-[55.5rem]'
          src="https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg"
          alt=""
        />
      </div>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
        className='flex flex-col items-center justify-center h-[50vh] min-[900px]:h-[83vh]'
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          className='text-[2rem] min-[900px]:text-[2.5rem] font-semibold tracking-widest'
        >
          Kashmir <span className='text-blue-500'>Wayward</span>
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className='text-xl font-semibold text-center mt-10 text-slate-900'
        >
          <b>#1</b> Discover Kashmir's Wonders with Wayward
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='flex justify-between items-center w-full mt-10 px-[10%] min-[900px]:px-[30%] min-[1400px]:px-[40%]'
        >
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className='py-4 px-6 bg-blue-500 text-white font-semibold rounded-2xl cursor-pointer'
          >
            Book Now
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className='py-3 px-6 border-[2px] border-blue-500 text-blue-500 font-semibold rounded-2xl cursor-pointer'
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Hero;
