import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import packages from '../../data/Packages.json';
import { motion } from 'framer-motion';

const Hero = () => {
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('srinagar');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to /packages with query parameters
    navigate(`/packages?destination=${destination}&keyword=${keyword}`);
  };

  return (
    <div>
      <motion.img
        className='absolute z-[-10] h-[38rem] top-0'
        src="https://plus.unsplash.com/premium_photo-1661906015968-563359465109?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className='bg-[rgba(0,0,0,0.5)] w-full h-[32rem] z-[-1] absolute'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className='flex flex-col justify-center items-center text-center'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className='tracking-widest font-light mt-16 text-white'>KASHMIR WAYWARD</p>
        <h1 className='mt-10 font-black text-[2.7rem] leading-[3rem] text-white'>Adventure & <br />Experience The <br />Travel !</h1>
      </motion.div>

      <motion.div
        className='flex flex-col py-10 bg-[rgba(0,0,0,0.6)] text-white mx-5 rounded-[20px] shadow-black shadow-2xl mt-10'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className='flex flex-col ml-20 '>
          <label className='font-semibold' htmlFor="search">Search</label>
          <input
            className='outline-none mt-1 py-2 mr-20 px-1 bg-[rgba(255,255,255,0.1)]'
            id='search'
            type="text"
            placeholder='Insert Keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className='ml-20 flex flex-col mt-5'>
          <label className='font-semibold' htmlFor="destination">Destinations</label>
          <select
            className='mr-32 mt-1 bg-[rgba(255,255,255,0.1)] outline-none'
            id="destination"
            name="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="srinagar">Srinagar</option>
            <option value="doodhpathri">Doodhpathri</option>
            <option value="pahalgam">Pahalgam</option>
            <option value="sonamarg">Sonamarg</option>
            <option value="gulmarg">Gulmarg</option>
            <option value="gurez">Gurez</option>
          </select>
        </div>
        <div className='ml-20 mt-5 flex flex-col'>
          <label className='font-semibold' htmlFor="guests">Guests</label>
          <select
            className='mr-32 mt-1 bg-[rgba(255,255,255,0.1)] outline-none'
            id="guests"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button
            className='bg-[rgba(255,255,255,0.3)] py-2 px-6 rounded-[10px] text-white shadow-inner font-semibold'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;