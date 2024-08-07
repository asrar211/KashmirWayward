// Preloader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full"
      />
    </div>
  );
};

export default Preloader;
