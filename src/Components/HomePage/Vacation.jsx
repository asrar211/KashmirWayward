import React from 'react'

const Vacation = () => {
  return (
    <div className='mt-20 pb-20 bg-[#F2F2F2]'>
        <div className='flex flex-col text-center pt-20'>
            <h4 className='ren text-[#1ABC9C] text-3xl font-bold'>Choose Your Trip</h4>
            <h2 className='mt-5 font-black text-3xl'>Start Your Vacation <br />Now</h2>
            <p className='text-[#107460] mx-7 mt-5'>Looking for your dream vacation destination but don't know where to start? With the help of experienced and knowledgeable travel agents, you can plan the trip of a lifetime with ease.</p>
        </div>
        <div className='flex flex-col mt-10 rounded-[20px] shadow-2xl mx-5 bg-white p-10'>
            <label className='font-semibold ' htmlFor="">Name</label>
            <input className='outline-none border-b-2 my-2' type="text" placeholder='Name?'/>
            <label className='font-semibold ' htmlFor="">Phone No.</label>
            <input className='outline-none border-b-2 my-2' type="Number" placeholder='Phone?'/>
            <label className='font-semibold ' htmlFor="">Guests</label>
            <input className='outline-none border-b-2 my-2' type="Number" placeholder='Guests?'/>
            <button className='bg-[#F76570]  py-4 mt-5 text-white font-bold rounded-md'>Book Now</button>
        </div>
    </div>
  )
}

export default Vacation