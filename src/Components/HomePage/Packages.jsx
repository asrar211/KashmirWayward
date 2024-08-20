import React, { useEffect, useRef } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PopPackages from "../../data/Packages.json";

const Packages = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const navigate = useNavigate();

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

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [controls]);

  const handlePackageClick = (id) => {
    navigate(`/package/${id}`);
  };

  const slicedPackages = PopPackages.slice(0, 3);

  return (
    <div className='mt-20'>
      <motion.div
        ref={containerRef}
        className='flex flex-col gap-10'
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {slicedPackages.map((pack) => (
          <div
            key={pack.id}
            className="mx-5 rounded-[20px] shadow-2xl cursor-pointer"
            onClick={() => handlePackageClick(pack.id)}
          >
            <div>
              <img
                className="h-[300px] w-full object-cover rounded-tr-[20px] rounded-tl-[20px]"
                src={pack.imageLink}
                alt={pack.name}
              />
            </div>
            <div className="mt-5 ml-5">
              <h2 className="text-[1rem] font-bold">{pack.name}</h2>
              <div className="flex justify-start items-center gap-2 my-2">
                <CiLocationOn className="text-[#1ABC9C]" size={20} />
                <h4 className="text-[#1ABC9C] text-[.7rem]">{pack.destination}</h4>
              </div>
              <hr className="my-2 mr-5" />
              <div className="py-2">
                <p className="text-[#1ABC9C] text-sm mr-5">{pack.description}</p>
              </div>
              <hr className="my-2 mr-5" />
              <div className="py-5 flex justify-between mr-5">
                <button className="bg-[#1ABC9C] text-white font-bold px-8 py-3 rounded-md">
                  Details
                </button>
                <div className="text-end">
                  <h4 className="text-[#1ABC9C]">Price</h4>
                  <h2 className="font-bold">Negotiable</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Packages;
