import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import { motion } from 'framer-motion';
import { RxCrossCircled } from "react-icons/rx";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Header2 = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const cancelMenu = () => {
    setIsMenu(false);
  };

  return (
    <nav className='py-5 shadow-2xl shadow-black max-[1200px]:hidden  px-[10%] flex justify-between items-center'>
      <div>
        <Link to='/'><h2 className=" text-4xl font-bold text-[#1ABC9C] ren">Kashmir Wayward</h2></Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
        <Link to='/destinations'><h4 className="hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Destinations</h4></Link>
        <Link to='/packages'><h4 className="hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Tours</h4></Link>
        <Link to='/contact'><h4 className="hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Contact Us</h4></Link>
      </div>
      <div onClick={handleMenu} className="cursor-pointer">
        <CiMenuFries size={30} />
      </div>

      {isMenu && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='bg-white fixed left-0 top-0 z-10 w-[25rem] h-screen overflow-y-auto flex flex-col justify-center items-center'
        >
          <div className="w-full pt-5">
            <div onClick={cancelMenu} className="absolute right-1 cursor-pointer"><RxCrossCircled size={30} /></div>
            <img className="w-[30%] ml-[35%] shadow-2xl rounded-full cursor-pointer shadow-black" src={logo} alt="" />
            <p className="text-center mx-20 mt-5 opacity-60 font-light">Discover the World, one Full Adventure at a Time!</p>
          </div>
          <div className="flex flex-wrap gap-3 mx-10 justify-center mt-10">
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://images.unsplash.com/photo-1584870960521-bfbf464c1940?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D" alt="" />
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://images.unsplash.com/photo-1655272427422-498f985c8998?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cnN8ZW58MHx8MHx8fDA%3D" alt="" />
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://images.unsplash.com/photo-1661585248792-33764253160b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXJzfGVufDB8fDB8fHww" alt="" />
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://images.unsplash.com/photo-1708539860258-c5ebb6c40f9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRvdXJzfGVufDB8fDB8fHww" alt="" />
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://images.unsplash.com/photo-1724153727274-24ecd3b5da13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRvdXJzfGVufDB8fDB8fHww" alt="" />
            <img className="w-[80px] h-[80px] object-cover rounded-[10px]" src="https://plus.unsplash.com/premium_photo-1718146019362-dbc88b750e51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRvdXJzfGVufDB8fDB8fHww" alt="" />
          </div>
          <div className="mt-20">
            <h2 className="font-bold text-xl">Our Contacts</h2>
            <div className="flex flex-col">
              <div>
                <h2 className="mt-5 font-semibold">Address</h2>
                <p className="mt-2 opacity-70">Alamgari Bazar - Srinagar <br />J&K India, 190011</p>
              </div>
              <div>
                <h2 className="mt-5 font-semibold">Email</h2>
                <p className="mt-2 opacity-70">kashmirwayward@gmail.com</p>
              </div>
              <div>
                <h2 className="mt-5 font-semibold">Phone</h2>
                <p className="mt-2 opacity-70">+91-9419015142</p>
              </div>
              <h2 className="font-bold text-xl mt-10">Follow Us</h2>
              <div className="flex justify-center gap-4 mt-5 mb-5">
                <FaFacebook className="bg-[#1ABC9C] text-white p-2 rounded-md" size={45} />
                <FaInstagram className="bg-[#1ABC9C] text-white p-2 rounded-md" size={45} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Header2;
