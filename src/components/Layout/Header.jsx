import React, { useState } from 'react'
import logo from "../../assets/logo.jpeg"

const Header = () => {
const [isMenu, setIsMenu] = useState(false)

const menuOpen = () => {
  setIsMenu(true);
}

const menuClose = () => {
  setIsMenu(false);
}


  return (
    <>
    <div className='min-[900px]:hidden'>

      <nav className='flex justify-between py-2 items-center px-10'>
        <div className='text-2xl font-semibold'>
          <img className='w-[110px]  rounded-full mix-blend-color-burn' src={logo} alt="" />
        </div>
        <div onClick={menuOpen} className='cursor-pointer'>
          <div className='w-[25px] h-[3px] bg-slate-800 my-1'></div>
          <div className='w-[25px] h-[3px] bg-slate-800 my-1'></div>
          <div className='w-[25px] h-[3px] bg-slate-800 my-1 '></div>
        </div>
      </nav>
      
      {isMenu && (
      <div className='absolute bg-[rgba(0,0,0,0.9)] text-white top-0 w-full h-full'>
      
      <div onClick={menuClose} className='cursor-pointer flex flex-col justify-normal items-center mt-5'>
      <div className='w-[25px] h-[3px] bg-white rotate-45 translate-y-[3px]'></div>
      <div className='w-[25px] h-[3px] bg-white rotate-[-45deg] '></div>
      </div>

        <div className='flex gap-2 flex-col justify-center items-center h-[80%] text-[1.3rem]'>
        <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Home</div>
        <hr className='bg-red w-[90%] opacity-30'/>
        <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>About</div>
        <hr className='bg-red w-[90%] opacity-30'/>
        <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Packages</div>
        <hr className='bg-red w-[90%] opacity-30'/>
        <div className='py-1 cursor-pointer hover:opacity-70 ease-in duration-300 font-semibold'>Support</div>
        <hr className='bg-red w-[90%] opacity-30'/>
        </div>
      
      </div>
)}
    </div>

    <div className='max-[900px]:hidden '>
      <nav className='  px-10 flex justify-between items-center'>
        <div className='font-semibold text-2xl w-[60%]'>
        <h1>Kashmir <span className='text-blue-500'>Wayward</span></h1>
        </div>
        <div className='flex gap-10 justify-start items-start w-full'>
          <h4 className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'>Home</h4>
          <h4 className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'>About</h4>
          <h4 className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'>Packages</h4>
          <h4 className='text-l font-[500] p-1 opacity-60 hover:opacity-100 cursor-pointer ease-in duration-300'>Support</h4>
        </div>
        <div>
        <img className='w-[180px] drop-shadow-lg  rounded-full mix-blend-color-burn' src={logo} alt="" />
        </div>
      </nav>
    </div>
    </>
  )
}

export default Header