// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    title: 'Adventures',
    description: 'Hiking, Skiing, Paragliding.',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    animation: 'scaleUp' // Add an animation type for each service
  },
  {
    title: 'Group Tours',
    description: 'Social adventures with guided experiences.',
    image: 'https://images.pexels.com/photos/2108832/pexels-photo-2108832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    animation: 'fadeIn' // Add an animation type for each service
  },
  {
    title: 'Private Tour',
    description: 'Personalized itineraries for exclusive travel.',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    animation: 'slideUp' // Add an animation type for each service
  },
  {
    title: 'Cultural Experiences',
    description: 'Authentic local traditions and activities.',
    image: 'https://images.pexels.com/photos/3126568/pexels-photo-3126568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    animation: 'scaleDown' // Add an animation type for each service
  }
];

const serviceAnimations = {
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 }
  }
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animations once when in view
    threshold: 0.2,
  });

  return (
    <div className='mt-20'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <h1 className='absolute min-[900px]:translate-y-[-70px] min-[900px]:text-[12rem] min-[900px]:right-[450px] right-6 max-[900px]:pt-5 text-[5rem] font-[900] text-center overflow-hidden opacity-5'>Services</h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='text-[2rem] font-semibold text-center pt-[70px] tracking-[10px]'
      >
        Services
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='flex max-[900px]:flex-col flex-wrap justify-center'
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={serviceAnimations[service.animation]}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='mt-20 mx-6 rounded-lg overflow-hidden shadow-lg'
          >
            <img className='w-full h-48 object-cover' src={service.image} alt={service.title} />
            <div className='p-4'>
              <h1 className='text-2xl tracking-widest text-center mt-5'>{service.title}</h1>
              <p className='text-center tracking-wider opacity-70'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
