import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('srinagar');
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {

    navigate(`/packages?destination=${destination}&keyword=${keyword}`);
  };

  return (
    <>
    {/* Mobile Screens */}
    <div className='min-[1200px]:hidden'>
      <motion.img
        className='absolute z-[-10] w-full  h-[38rem] top-0'
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

{/* Bigger Screens */}
    <div className='max-[1200px]:hidden'>
   <div>
   <motion.img
        className='absolute z-[-10] top-[5rem] w-full h-[55rem] object-cover'
        src="https://images.pexels.com/photos/7965284/pexels-photo-7965284.jpeg"
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className='bg-[rgba(0,0,0,0.3)] z-[-1] w-full h-[55rem] absolute top-[5rem]'></div>
   </div>
   <div className='flex justify-between'>
   <motion.div
        className='flex w-full mx-[10%] flex-col z-1 justify-center items-start'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 2 }}
      >
        <p className='tracking-widest font-light mt-16 text-white'>KASHMIR WAYWARD</p>
        <h1 className='mt-20 font-black text-[5.5rem]  leading-[6rem] text-white'>Adventure & <br />Experience The <br />Travel !</h1>
      </motion.div>
      <motion.div
        className='mr-[10%] mt-10'
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ duration: 2 }}
      >
        <img className='w-[55rem] rounded-full shadow-2xl shadow-white mt-20' src="https://images.pexels.com/photos/19533158/pexels-photo-19533158/free-photo-of-verinag-spring-in-mughal-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </motion.div>
   </div>
   <motion.div
        className='mx-[10%] shadow-inner shadow-black py-2 rounded-[20px] bg-white flex gap-6 justify-center items-center'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
      >
        <input
            className='outline-none mt-1 py-5 mr-20 px-1 border-r-2'
            id='search'
            type="text"
            placeholder='Insert Keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

<select
            className='mr-32 mt-1 py-5 border-r-2 pr-5 outline-none'
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

          <select
            className='mr-32 mt-1 border-r-2 py-5 outline-none'
            id="guests"
            name="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>

          <button
            className=' py-3 shadow-inner px-6 rounded-[10px] bg-[#1ABC9C] text-white font-semibold'
            onClick={handleSearch}
          >
            Search
          </button>
        
      </motion.div>
    </div>
    </>
  );
};

export default Hero;