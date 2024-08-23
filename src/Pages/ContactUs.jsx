import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="h-full">
      <div className='h-[25rem]'>
        <img className='absolute h-[25rem] min-[1200px]:h-[60rem] z-[-1] w-full object-cover object-bottom' src="https://images.pexels.com/photos/15879557/pexels-photo-15879557/free-photo-of-back-view-of-man-in-a-gown-standing-on-a-hill-and-looking-at-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className='absolute h-[25rem] z-[-1] bg-[rgba(0,0,0,0.3)] w-full'></div>
        <div className='text-white flex justify-center items-center h-full'>
          <h2 className='text-[3rem] font-black tracking-wider'>Contact</h2>
        </div>
      </div>
      <div className='bg-[#f2f2f2] pt-20'>
          <div className="flex flex-col items-center justify-center text-center">
             <FaLocationDot className="text-[#1ABC9C] bg-[rgba(0,0,0,0.1)] p-2 rounded-full" size={45}/>
             <h2 className="font-bold text-xl mt-5">Location</h2>
             <p className="opacity-70 mt-5 font-light">Alamgari Bazar Srinagar, J&K <br /> India, 190011</p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center text-center">
             <FaPhone className="text-white bg-[rgba(0,0,0,0.4)] p-2 rounded-full" size={45}/>
             <h2 className="font-bold text-xl mt-5">Give us a call</h2>
             <p className="opacity-70 mt-5 font-light"><span className="font-bold">Office: </span>+91-9419015142 <br /><span className="font-bold">Admin: </span>+91-9906415283 <br /></p>
          </div>
          <div className="mt-10 pb-10 mb-10 flex flex-col items-center justify-center text-center">
             <IoMdMail className="text-white bg-[rgba(0,0,0,0.6)] p-2 rounded-full" size={45}/>
             <h2 className="font-bold text-xl mt-5">Write for anything</h2>
             <p className="opacity-70 mt-5 font-light">Write to this email for a detailed quotation <br /><span className="font-semibold"><a href="mailto:kashmirwayward@gmail.com">kashmirwayward@gmail.com</a></span> and information.</p>
          </div>
      </div>
    </div>
  )
}

export default ContactUs