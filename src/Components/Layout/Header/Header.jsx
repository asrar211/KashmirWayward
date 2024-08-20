import { useState } from 'react';
import Logo from "../../../assets/logo.jpg"
import { CiMenuFries } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const handleMenu = () => {
    setIsMenu(!isMenu);
  }
  const cancelMenu = () => {
    setIsMenu(false);
  }

  return (
    // Mobiles
    <nav>
      <div className='flex justify-between items-center px-5 py-2 bg-[#F2F2F2]'>
        <img className='w-[80px] cursor-pointer rounded-full shadow-xl h-[80px]' src={Logo} alt="" />
        {!isMenu ? <CiMenuFries onClick={handleMenu} className='cursor-pointer hover:text-red-600 duration-300 ease-linear' size={30}/> : 
        <RxCrossCircled onClick={handleMenu} className='cursor-pointer hover:text-red-600 duration-300 ease-linear' size={30}/> }
      </div> 
      {isMenu && ( 
      <div className='bg-[#434A54] absolute z-10 w-full flex flex-col justify-center items-center cursor-pointer'>
        <h4 className='p-2 hover:bg-[#1ABC9C] ease-linear duration-200 w-full text-white font-light'>Home</h4>
        <h4 className='p-2 hover:bg-[#1ABC9C] ease-linear duration-200 w-full text-white font-light'>Destinations</h4>
        <h4 className='p-2 hover:bg-[#1ABC9C] ease-linear duration-200 w-full text-white font-light'>Tours</h4>
        <h4 className='p-2 hover:bg-[#1ABC9C] ease-linear duration-200 w-full text-white font-light'>Contact Us</h4>
      </div>
      )}
    </nav>
  )
}

export default Header