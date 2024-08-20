import React from 'react'

const Reviews = () => {
  return (
    <div className='mt-10'>
        <div className='absolute z-[-5]'>
            <img className=' h-[55rem] object-cover' src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className='h-[40rem] z-1 flex flex-col text-center'>
            <h2 className='text-white drop-shadow-2xl  font-black text-3xl mt-20'>Unforgettable Travel Experience</h2>
            <p className='text-white mt-5 mx-5'>Our customer's feedback is essential in building a great reputation and maintaining excellent service. By listening to our customer's needs, we can improve our offerings and provide an exceptional travel experience.</p>
         <div className='flex justify-center items-center mt-10'>
         <img className='w-[150px] h-[150px] object-cover  rounded-full shadow-white shadow-2xl' src="https://images.unsplash.com/photo-1609771202595-386667970a2d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5qb3lpbmclMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D" alt="" />
         </div>
        </div>
        <div className='flex mb-24 mt-[-100px] flex-col justify-start items-start rounded-[20px] bg-[#1ABC9C] mx-5 p-10'>
            <p className='text-white italic font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias debitis odio at facilis dolores quo distinctio reiciendis, fuga quas.</p>
            <h4 className=' font-black tracking-wider text-white mt-3'>Asrar Ali</h4>
            <p className='font- text-white'>Kashmir</p>
        </div>
    </div>
  )
}

export default Reviews