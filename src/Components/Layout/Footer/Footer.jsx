import React from 'react'

const Footer = () => {
  return (
    <div>
      <p className='ren text-3xl text-center font-bold text-[#1ABC9C]'>Kashmir Wayward</p>
      <footer className='mt-10'>
        <div>
          <img className='absolute h-[35rem] z-[-1] opacity-70' src="https://images.unsplash.com/photo-1675252002398-70bd4c7bdcf2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFpcnBsYW5lcyUyMGRhcmt8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className='pt-10 flex flex-col text-center'>
            <h2 className='text-3xl font-black '>Travel Beyound your imagination, with our Travel Agency!</h2>
            <div className='mt-10 flex flex-col gap-2'>
              <h4 className='font-black text-2xl'>Address</h4>
              <span className='text-white font-semibold'>Alamgari Bazar</span>
              <span className='text-white font-semibold'>Srinagar - J&K</span>
              <span className='text-white font-semibold'>India, 190011</span>
            </div>
            <div>

            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='mt-10 text-2xl font-black'>Contact</h4>
              <button className='bg-[#1ABC9C] mx-[8rem] text-white font-bold py-3 rounded-md'><a href="mailto:Kashmirwayward@gmail.com">Mail</a></button>
              <h2 className='text-xl font-black text-white mt-5'>+91-9419015142</h2>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer