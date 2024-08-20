import { useState } from 'react';
import Logo from "../../../assets/logo.jpeg";
import { CiMenuFries } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const cancelMenu = () => {
    setIsMenu(false);
  };

  return (
    <nav>
      {/* Mobile Navigation */}
      <div className='flex justify-between items-center px-5 py-2 bg-[#F2F2F2]'>
        <Link to='/'><img className='w-[80px] cursor-pointer rounded-full shadow-xl h-[80px]' src={Logo} alt="Logo" /></Link>
        {!isMenu ? 
          <CiMenuFries onClick={handleMenu} className='cursor-pointer hover:text-red-600 duration-300 ease-linear' size={30}/> : 
          <RxCrossCircled onClick={handleMenu} className='cursor-pointer hover:text-red-600 duration-300 ease-linear' size={30}/>
        }
      </div> 

      {/* Menu Links with Animation */}
      {isMenu && ( 
        <motion.div 
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className='bg-[#434A54] absolute z-10 w-full flex flex-col justify-center items-center cursor-pointer'
        >
          <Link to="/" onClick={cancelMenu}><h4 className='p-2 ease-linear duration-200 w-full text-white font-light'>Home</h4></Link>
          <Link to="/destinations" onClick={cancelMenu}><h4 className='p-2 ease-linear duration-200 w-full text-white font-light'>Destinations</h4></Link>
          <Link to="/packages" onClick={cancelMenu}><h4 className='p-2 ease-linear duration-200 w-full text-white font-light'>Tours</h4></Link>
          <Link to="/contact" onClick={cancelMenu}><h4 className='p-2 ease-linear duration-200 w-full text-white font-light'>Contact Us</h4></Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Header;
