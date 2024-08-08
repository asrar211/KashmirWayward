import React from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  const { id } = useParams();

  const packageDetails = {
    1: {
        id: 1,
        title: 'Gulmarg',
        description: 'A snowy paradise renowned for skiing, offering breathtaking mountain views and lush meadows during summer.',
        image: 'https://images.pexels.com/photos/7113988/pexels-photo-7113988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$20/p'
      },
    2: {
        id: 2,
        title: 'Sonamarg',
        description: 'The "Meadow of Gold" with stunning glaciers, pristine rivers, and idyllic trekking routes.',
        image: 'https://images.pexels.com/photos/11214807/pexels-photo-11214807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$30/p'
      },
    3: {
        id: 3,
        title: 'Pahalgam',
        description: 'A serene retreat in Kashmir, famous for lush valleys, pine forests, and adventure activities like trekking and river rafting.',
        image: 'https://images.pexels.com/photos/7562495/pexels-photo-7562495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$40/p'
      }
  };

  const selectedPackage = packageDetails[id];

  return (
    <div className="package-details">
      {selectedPackage ? (
        <>
        <div className='flex flex-col items-center py-16 pb-40 bg-gray-100'>
        <img className='w-[70%] rounded-xl shadow-xl my-5' src={selectedPackage.image} alt="" />
        <div className='mx-[15%]'>
        <p className='float-right font-semibold opacity-70'>{selectedPackage.price}</p>
        <h1 className='text-xl font-semibold'>{selectedPackage.title}</h1>
        <p className='opacity-60 px-5 text-center my-5'>{selectedPackage.description}</p>
        </div>
        <div>
            <p className='text-xl rotate-180 opacity-70 font-semibold py-2 px-4 shadow-xl mt-5 rounded-full hover:bg-blue-500 hover:text-white ease-in duration-300 cursor-pointer'>^</p>
        </div>
        <div className='mt-5'>
        <a
  href={`https://wa.me/7889789033?text=I am%20interested%20in%20booking ${selectedPackage.title} Package priced: ${selectedPackage.price}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <button className='bg-blue-500 p-3 text-white font-semibold rounded-full shadow-xl cursor-pointer'>
    Book Now
  </button>
</a>
        </div>
        </div>
          
        </>
      ) : (
        <p>Package not found.</p>
      )}
    </div>
  );
};

export default PackageDetails;
