import React from 'react'

const Hero = () => {
  return (
    <div>
      <img className='absolute z-[-10] h-[38rem] top-0' src="https://plus.unsplash.com/premium_photo-1661906015968-563359465109?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className='bg-[rgba(0,0,0,0.5)] w-full h-[32rem] z-[-1] absolute'></div>
      <div className='flex flex-col justify-center items-center text-center'>
        <p className='tracking-widest font-light mt-16  text-white'>KASHMIR WAYWARD</p>
        <h1 className='mt-10 font-black text-[2.7rem] leading-[3rem] text-white'>Adventure & <br />Experience The <br />Travel !</h1>
      </div>

      <div className='flex flex-col py-10 bg-[rgba(0,0,0,0.6)] text-white mx-5 rounded-[20px] shadow-black shadow-2xl mt-10'>
        <div className='flex flex-col ml-20 '>
        <label className='font-semibold'  for="search">Search</label>
        <input className='outline-none mt-1 py-2  mr-20 px-1 bg-[rgba(255,255,255,0.1)]'  id='search' type="text" placeholder='Insert Keyword'/>
        </div>
        <div className='ml-20 flex flex-col mt-5'>
        <label className='font-semibold' for="destination">Destinations</label>
        <select className='mr-32 mt-1 bg-[rgba(255,255,255,0.1)] outline-none ' id="destination" name="destination">
         <option value="srinagar">Srinagar</option>
         <option value="doodhpathri">Doodhpathri</option>
         <option value="pahalgam">Pahalgam</option>
         <option value="sonamarg">Sonamarg</option>
         <option value="gulmarg">Gulmarg</option>
         <option value="gurez">Gurez</option>
        </select>
        </div>
        <div className='ml-20 mt-5 flex flex-col'>
        <label className='font-semibold' for="guests">Guests</label>
        <select className='mr-32 mt-1 bg-[rgba(255,255,255,0.1)] outline-none ' id="guests" name="guests">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
         <option value="7">7</option>
         <option value="8">8</option>
         <option value="9">9</option>
         <option value="10">10</option>
        </select>
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='bg-[rgba(255,255,255,0.3)] py-2 px-6 rounded-[10px] text-white shadow-inner font-semibold'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Hero