import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
import logo from "../../assets/logo.jpeg";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const menuControls = useAnimation();
  const logoControls = useAnimation();

  React.useEffect(() => {
    // Trigger the initial animation when the component mounts
    logoControls.start({
      opacity: [0, 1],
      scale: [0.8, 1.2, 1],
      transition: { duration: 1.5, ease: "easeInOut" }
    });
  }, [logoControls]);

  const menuOpen = () => {
    setIsMenu(true);
    menuControls.start({ opacity: 1, x: 0 });
  };

  const menuClose = () => {
    menuControls.start({ opacity: 0, x: '100%' });
    setTimeout(() => setIsMenu(false), 300); // Match the animation duration
  };

  const handleMenuItemClick = () => {
    menuClose();
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className='min-[900px]:hidden'>
        <nav className='flex justify-between py-2 items-center px-10'>
          <div className='text-2xl font-semibold'>
            <Link to="/" onClick={handleMenuItemClick}>
              <motion.img
                className='w-[110px] rounded-full mix-blend-color-burn'
                src={logo}
                alt="Logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={logoControls}
              />
            </Link>
          </div>
          <div onClick={menuOpen} className='cursor-pointer'>
            <div className='w-[25px] h-[3px] bg-slate-800 my-1'></div>
            <div className='w-[25px] h-[3px] bg-slate-800 my-1'></div>
            <div className='w-[25px] h-[3px] bg-slate-800 my-1'></div>
          </div>
        </nav>
        
        {isMenu && (
          <motion.div
            className='absolute bg-[rgba(0,0,0,0.9)] text-white top-0 w-full h-full'
            initial={{ opacity: 0, x: '100%' }}
            animate={menuControls}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div onClick={menuClose} className='cursor-pointer flex flex-col justify-normal items-center mt-5'>
              <div className='w-[25px] h-[3px] bg-white rotate-45 translate-y-[3px]'></div>
              <div className='w-[25px] h-[3px] bg-white rotate-[-45deg]'></div>
            </div>
            <div className='flex gap-2 flex-col justify-center items-center h-[80%] text-[1.3rem]'>
              <Link to="/" onClick={handleMenuItemClick}>
                <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Home</div>
              </Link>
              <hr className='bg-red w-[90%] opacity-30'/>
              <Link to="/about" onClick={handleMenuItemClick}>
                <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>About</div>
              </Link>
              <hr className='bg-red w-[90%] opacity-30'/>
              <Link to="/packages" onClick={handleMenuItemClick}>
                <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Packages</div>
              </Link>
              <hr className='bg-red w-[90%] opacity-30'/>
              <Link to="/support" onClick={handleMenuItemClick}>
                <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Support</div>
              </Link>
              <hr className='bg-red w-[90%] opacity-30'/>
            </div>
          </motion.div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className='max-[900px]:hidden'>
        <nav className='px-10 flex justify-between items-center'>
          <div className='font-semibold text-2xl w-[60%]'>
            <Link to="/">
              <h1 className='ft'>Kashmir <span className='text-blue-500'>Wayward</span></h1>
            </Link>
          </div>
          <div className='flex gap-10 justify-start items-start w-full'>
            <Link to="/">
              <motion.h4
                className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Home
              </motion.h4>
            </Link>
            <Link to="/about">
              <motion.h4
                className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.h4>
            </Link>
            <Link to="/packages">
              <motion.h4
                className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Packages
              </motion.h4>
            </Link>
            <Link to="/support">
              <motion.h4
                className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Support
              </motion.h4>
            </Link>
          </div>
          <Link to="/" className='flex items-center justify-center'>
            <motion.img
              className='w-[100px] drop-shadow-lg rounded-full mix-blend-color-burn'
              src={logo}
              alt="Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={logoControls}
            />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
