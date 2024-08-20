import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Vacation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
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

  const handleBooking = () => {
    const subject = encodeURIComponent('Vacation Booking Request');
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nGuests: ${guests}`);
    window.location.href = `mailto:Kashmirwayward@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      ref={ref}
      className='mt-20 pb-20 bg-[#F2F2F2]'
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='flex flex-col text-center pt-20'>
        <motion.h4
          className='ren text-[#1ABC9C] text-3xl font-bold'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          Choose Your Trip
        </motion.h4>
        <motion.h2
          className='mt-5 font-black text-3xl'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Start Your Vacation <br />Now
        </motion.h2>
        <motion.p
          className='text-[#107460] mx-7 mt-5'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Looking for your dream vacation destination but don't know where to start? With the help of experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.
        </motion.p>
      </div>
      <motion.div
        className='flex flex-col mt-10 rounded-[20px] shadow-2xl mx-5 bg-white p-10'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <label className='font-semibold' htmlFor="name">Name</label>
        <input
          id="name"
          className='outline-none border-b-2 my-2'
          type="text"
          placeholder='Name?'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='font-semibold' htmlFor="phone">Phone No.</label>
        <input
          id="phone"
          className='outline-none border-b-2 my-2'
          type="number"
          placeholder='Phone?'
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className='font-semibold' htmlFor="guests">Guests</label>
        <input
          id="guests"
          className='outline-none border-b-2 my-2'
          type="number"
          placeholder='Guests?'
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <button
          className='bg-[#F76570] py-4 mt-5 text-white font-bold rounded-md'
          onClick={handleBooking}
        >
          Book Now
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Vacation;
