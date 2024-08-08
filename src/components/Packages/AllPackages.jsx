import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const packagesData = [
  {
    id: 1,
    title: 'Gulmarg',
    description: 'Skiing paradise with stunning snow-capped peaks.',
    image: 'https://images.pexels.com/photos/7113988/pexels-photo-7113988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$20/p'
  },
  {
    id: 2,
    title: 'Sonamarg',
    description: 'Scenic valley known for golden meadows.',
    image: 'https://images.pexels.com/photos/11214807/pexels-photo-11214807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$30/p'
  },
  {
    id: 3,
    title: 'Pahalgam',
    description: 'Serene retreat with lush green landscapes.',
    image: 'https://images.pexels.com/photos/7562495/pexels-photo-7562495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: '$40/p'
  }
];

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

  return (
    <div className='my-10'>      

      {/* Packages */}
      <div className='flex flex-col min-[900px]:flex-row'>
        {packagesData.map((packageItem, index) => {
          const direction = index % 2 === 0 ? 'right' : 'left';
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={direction}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='mt-20 mx-6 rounded-lg shadow-xl'
            >
              <img className='rounded-lg' src={packageItem.image} alt={packageItem.title} />
              <div>
                <h1 className='text-2xl tracking-widest text-center mt-5'>{packageItem.title}</h1>
                <p className='text-center opacity-70 tracking-wider'>{packageItem.description}</p>
                <div className='flex justify-around items-center gap-10 mt-5'>
                  <p className='tracking-wider opacity-70'>{packageItem.price}</p>
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
