import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom"

const Header2 = () => {
  return (
    <nav className='py-5 shadow-2xl shadow-black max-[1200px]:hidden  px-[10%] flex justify-between items-center'>
         <div>
            <Link to='/'><h2 className=" text-4xl font-bold text-[#1ABC9C] ren">Kashmir Wayward</h2></Link>
         </div>
         <div className="flex justify-center items-center gap-10 cursor-pointer">
           <Link to='/destinations'><h4 className=" hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Destinations</h4></Link>
           <Link to='/packages'> <h4 className=" hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Tours</h4></Link>
           <Link to='/contact'> <h4 className=" hover:text-red-600 duration-300 ease-linear text-[#1ABC9C]">Contact Us</h4></Link>
         </div>
         <div className="cursor-pointer">
            <CiMenuFries className="" size={30}/>
         </div>
    </nav>
  )
}

export default Header2