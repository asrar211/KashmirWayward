import React from 'react'

const Gallery = () => {
  return (
    <div className='pb-10 pt-20 px-10 flex flex-col gap-10'>
        <img className='rounded-[20px] h-[170px] object-cover shadow-2xl shadow-black' src="https://images.unsplash.com/photo-1710915322745-cd5912851417?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzdGluYXRpb25zfGVufDB8fDB8fHww" alt="" />
        <img className='rounded-[20px] h-[170px] object-cover shadow-2xl shadow-black' src="https://images.unsplash.com/photo-1710915322794-150ce2f4aa9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  )
}

export default Gallery