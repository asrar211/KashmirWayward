import React from 'react';
import { useParams } from 'react-router-dom';
import PopPackages from "../data/Packages.json";
import { CiLocationOn } from 'react-icons/ci';

const PackageDetail = () => {
  const { id } = useParams();
  const packageDetail = PopPackages.find(pack => pack.id === parseInt(id));

  if (!packageDetail) {
    return <p>Package not found</p>;
  }

  return (
    <div>
      <div className="mb-10 bg-[#f2f2f2]">
        <div>
          <img
            className=""
            src={packageDetail.imageLink}
            alt={packageDetail.name}
          />
        </div>
        <div className="mt-5 ml-5">
          <h2 className="text-[2rem] font-bold">{packageDetail.name}</h2>
          <div className="flex justify-start items-center gap-2 my-2">
            <CiLocationOn className="text-[#1ABC9C]" size={20} />
            <h4 className="text-[#1ABC9C] text-[1.2rem]">{packageDetail.destination}</h4>
          </div>
          <hr className="my-2 mr-5" />
          <div className="py-5">
            <h4 className="text-[#1ABC9C]">Duration: Depends Upon Package</h4>
            <h4 className="text-[#1ABC9C]">Price: Negotiable</h4>
            <ul className="list-disc ml-5 mt-3">
              {packageDetail.highlights.map((highlight, index) => (
                <li key={index} className="text-[#1ABC9C]">{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex'>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default PackageDetail;
