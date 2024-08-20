import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Gallery = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const handleScroll = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, y: 0 });
          controls2.start({ opacity: 1, y: 0 });
        }
      });
    }, observerOptions);

    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls1, controls2]);

  return (
    <div className='pb-10 pt-20 px-10 flex flex-col gap-10'>
      <motion.img
        ref={ref1}
        className='rounded-[20px] h-[170px] object-cover shadow-2xl shadow-black'
        src="https://images.unsplash.com/photo-1710915322745-cd5912851417?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzdGluYXRpb25zfGVufDB8fDB8fHww"
        alt=""
        initial={{ opacity: 0, y: 20 }}
        animate={controls1}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.img
        ref={ref2}
        className='rounded-[20px] h-[170px] object-cover shadow-2xl shadow-black'
        src="https://images.unsplash.com/photo-1710915322794-150ce2f4aa9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        initial={{ opacity: 0, y: 20 }}
        animate={controls2}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}

export default Gallery;
