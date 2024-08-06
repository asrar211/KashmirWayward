import React from 'react';

const servicesData = [
  {
    title: 'Adventures',
    description: 'Hiking, Skiing, Paragliding.',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Group Tours',
    description: 'Social adventures with guided experiences.',
    image: 'https://images.pexels.com/photos/2108832/pexels-photo-2108832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Private Tour',
    description: 'Personalized itineraries for exclusive travel.',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Cultural Experiences',
    description: 'Authentic local traditions and activities.',
    image: 'https://images.pexels.com/photos/3126568/pexels-photo-3126568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Services = () => {
  return (
    <div className='mt-20 '>
      <div>
        <h1 className='absolute min-[900px]:translate-y-[-70px] min-[900px]:text-[12rem] min-[900px]:right-[450px] right-4 text-[7rem] font-[900] text-center overflow-hidden opacity-5'>Services</h1>
      </div>
      <div>
        <h1 className='text-[2rem] font-semibold text-center pt-[70px] tracking-[10px]'>Services</h1>
      </div>
      <div className='flex max-[900px]:flex-col flex-warp justify-center'>
        {servicesData.map((service, index) => (
          <div key={index} className='mt-20 mx-6 rounded-lg '>
            <img className='rounded-lg' src={service.image} alt={service.title} />
            <div>
              <h1 className='text-2xl tracking-widest text-center mt-5'>{service.title}</h1>
              <p className='text-center tracking-wider opacity-70'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
