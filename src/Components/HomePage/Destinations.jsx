import React from 'react'

const Destinations = () => {
  return (
    <div className='mt-10'>
        <div className='flex flex-col justify-center items-center pt-10'>
            <h4 className='ren text-3xl font-semibold text-[#1ABC9C] '>Next Adventure</h4>
            <h2 className='font-black leading-[3rem] text-3xl px-2 mt-5 text-center'>Travel Destinations Across World</h2>
            <p className='text-center mx-7 text-[#107460] mt-5'>We have compiled a list of top destinations across the globe, scoured the world for the most alluring and fascinating places to visit. From the beautiful beaches of the Caribbean to the majestic mountains of Europe and the vibrant cities of Asia, our destination list has something for everyone.</p>
        </div>
        <div className='mt-10 flex justify-center items-center'>
            <img className='absolute z-[-1] w-[90%] rounded-[20px] h-[15rem] shadow-2xl shadow-black' src="https://images.unsplash.com/photo-1621232051504-dc6f30ba8bc6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd1bG1hcmd8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className='h-[15rem] flex flex-col justify-end items-center'>
                <h2 className='text-white font-black text-xl my-2'>Kashmir</h2>
                <p className='text-white text-sm font-light mb-5'>Experience the Snow Capped Mountains</p>
            </div>
        </div>
        <div className='text-center font-light mt-10'>
            More Coming Soon....
        </div>
    </div>
  )
}

export default Destinations