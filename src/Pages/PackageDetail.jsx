import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PopPackages from "../data/Packages.json";
import { CiLocationOn } from 'react-icons/ci';
import { TiTickOutline, TiCancel } from "react-icons/ti";

const PackageDetail = () => {
  const { id } = useParams();
  const packageDetail = PopPackages.find(pack => pack.id === parseInt(id));


  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    phone: ''
  });

  const [error, setError] = useState('');

  if (!packageDetail) {
    return <p>Package not found</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleClick = () => {
    const { date, phone } = bookingDetails;


    if (!date || !phone) {
      setError('Please fill in both the date and phone number.');
      return;
    }

    setError('');

    const subject = `Booking Request for ${packageDetail.name}`;
    const body = `Hello,\n\nI would like to book the "${packageDetail.name}" package.\n\nDetails:\nDate: ${date}\nPhone Number: ${phone}\n\nThank you!`;
    
    const mailtoLink = `mailto:kashmirwayward@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className='pb-10'>
      <div className="mb-10 bg-[#f2f2f2]">
        <div>
          <img
            className="h-[25rem] w-full min-[1200px]:object-cover min-[1200px]:h-[40rem] "
            src={packageDetail.imageLink}
            alt={packageDetail.name}
          />
        </div>
        <div className="mt-5 ml-5 min-[1200px]:flex min-[1200px]:justify-around min-[1200px]:items-center min-[1200px]:w-[50%]">
          <h2 className="text-[1.4rem] font-bold">{packageDetail.name}</h2>
          <div className="flex justify-start items-center gap-2 my-2">
            <CiLocationOn className="text-[#1ABC9C] " size={20} />
            <h4 className="text-[#1ABC9C] text-[1rem]">{packageDetail.destination}</h4>
          </div>
          <hr className="my-2 mr-5" />
          <div className="py-5">
            <h4 className="text-[#1ABC9C]"><span className='text-black font-bold'>Duration:</span> Depends Upon Package</h4>
            <h4 className="text-[#1ABC9C]"><span className='text-black font-bold'>Price:</span> Negotiable</h4>
          </div>
        </div>
      </div>
      <div className='mx-5 mt-20 mb-5 min-[1200px]:ml-[10%]'>
        <h2 className="text-[1.4rem] font-bold">Enjoy the Adventure</h2>
         <p className='opacity-70 mt-5 min-[1200px]:mr-[50%]'>{packageDetail.detailedDescription}</p>
      </div>
      <hr className='mx-5'/>
      <div className='mx-5 mt-10 mb-5 min-[1200px]:ml-[10%]'>
        <h2 className="text-[1.4rem] font-bold">Included/Excluded</h2>
         <p className='opacity-70 mt-5 min-[1200px]:mr-[50%]'>To help you plan your trip, we have put together a list of what's included and what's not included in your tour package. This will give you a clear understanding of the Tour.</p>
         <ul className='mt-5'>
          {packageDetail.included.map((pkg, index) => (
            <li className='flex font-semibold items-center justify-start' key={index}> <TiTickOutline className='text-[#1ABC9C]'/> {pkg}</li>
            ))}
        </ul>
        <ul className='mt-0'>
          {packageDetail.excluded.map((pkg, index) => (
            <li className='flex font-semibold items-center justify-start' key={index}> <TiCancel className='text-[#1ABC9C]'/> {pkg}</li>
            ))}
        </ul>
      </div>
      <hr className='mx-5'/>
      <div className='mx-5 mt-10 mb-5 min-[1200px]:ml-[10%]'>
        <h2 className="text-[1.4rem] font-bold">Itinerary</h2>
         <p className='opacity-70 mt-5 min-[1200px]:mr-[50%]'>We have carefully planned out each day to give you the best possible experience. From exploring historic landmarks to tasting delicious local cuisine, each day is packed with adventure and excitement.</p>
         <div className='text-center min-[1200px]:text-start mt-5'>
          <p className='font-semibold'>Itinerary will be provided after Booking.</p>
         </div>
      </div>
      <div className='mx-5 mt-10 mb-5 shadow-2xl rounded-[20px] min-[1200px]:mx-[30%]'>
        <h2 className="text-[1.2rem] text-center font-light pt-5">Booking</h2>
        <hr className='my-5'/>
        <div className='flex flex-col mx-10 pb-10'>
          <label htmlFor="date" className='font-semibold mb-2 ml-3'>Date</label>
          <input
            type="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleChange}
            className='bg-white font-light ml-3'
            required
          />
          <hr />
          <label htmlFor="phone" className='font-semibold mb-2 ml-3 mt-5'>Phone No.</label>
          <input
            type='phone'
            name="phone"
            value={bookingDetails.phone}
            onChange={handleChange}
            placeholder='Phone No.'
            className='ml-3 outline-none font-light'
            required
          />
          <hr />
        </div>
        {error && (
          <p className="text-red-500 mx-5 text-center">{error}</p>
        )}
        <div className='flex justify-center items-center pb-5'>
          <button onClick={handleClick} className='bg-[#1ABC9C] text-white font-bold py-3 px-6 rounded-md '>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
