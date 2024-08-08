// src/components/Packages.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import packagesData from "../../itenaries.json";

const animationVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'right' ? 100 : -100
  }),
  visible: {
    opacity: 1,
    x: 0
  }
};

const Packages = () => {
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/package/${id}`);
  };

  // Slice the packagesData to show only the first 3 packages
  const displayedPackages = packagesData.slice(0, 3);

  return (
    <div className='mt-20'>
      <div className='flex justify-center items-center'>
        <div className='bg-blue-500 w-[80px] h-[3px] rotate-90'></div>
      </div>
      
      <div className='mt-10'>
        <h1 className='absolute min-[900px]:translate-y-[-80px] min-[900px]:text-[12rem] min-[900px]:right-[450px] right-3 max-[900px]:pt-10 mt-3 text-[5rem] font-[900] text-center overflow-hidden opacity-5'>Packages</h1>
      </div>
      
      <div>
        <h1 className='text-[2rem] font-semibold text-center pt-[70px] tracking-[10px]'>Featured Packages</h1>
      </div>

      {/* Packages */}
      <div className='flex flex-col min-[900px]:flex-row'>
        {displayedPackages.map((packageItem, index) => {
          const direction = index % 2 === 0 ? 'right' : 'left';
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1
          });

          return (
            <motion.div
              key={packageItem.id}
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={direction}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='mt-20 mx-6 rounded-lg shadow-xl'
            >
              <img className='rounded-lg' src={packageItem.images[2]} alt={packageItem.title} />
              <div>
                <h1 className='text-2xl tracking-widest text-center mt-5'>{packageItem.title}</h1>
                <p className='text-center opacity-70 tracking-wider'>{packageItem.description}</p>
                <div className='flex justify-around items-center gap-10 mt-5'>
                  <button onClick={() => handleBookNow(packageItem.id)} className='p-2 font-semibold cursor-pointer bg-blue-500 text-white rounded-xl mb-5'>BOOK NOW</button>
                </div>
              </div>
              {index < 2 && <hr className='my-5 mx-20' />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Packages;
