import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='absolute top-0 w-full z-[-1]'>
          <img className='w-full opacity-50 h-[34rem] min-[900px]:h-[55.5rem]' src="https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center h-[50vh] min-[900px]:h-[83vh]'>
        <h1 className='text-[2rem] min-[900px]:text-[2.5rem] font-semibold tracking-widest'>Kashmir <span className='text-blue-500'>Wayward</span></h1>
        <p className='text-xl font-semibold text-center mt-10 text-slate-900'><b>#1</b> Discover Kashmir's Wonders with Wayward</p>
        <div className='flex justify-between items-center w-full mt-10 px-[10%] min-[900px]:px-[30%] min-[1400px]:px-[40%]'>
          <button className='py-4 px-6 bg-blue-500 text-white font-semibold rounded-2xl cursor-pointer'>Book Now</button>
          <button className='py-3 px-6 border-[2px] border-blue-500 text-blue-500 font-semibold rounded-2xl cursor-pointer'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero