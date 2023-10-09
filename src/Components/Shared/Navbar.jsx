
import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [open,setOpen]= useState(false);

  const navLinks = <>
  <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-left underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : ""}>Home</NavLink></li>
  <li><NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : ""}>About</NavLink></li>
  <li><NavLink to="/events" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : ""}>Events</NavLink></li>
</>

  return (
    <nav className="px-3 pb-12 shadow-lg ">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl text-cyan-600">Social Events</h2>
          
            <ul className={`md:flex gap-6 text-center text-white md:text-black md:text-lg bg-zinc-700 md:bg-inherit p-4 rounded-md order-last md:order-none absolute md:static right-7 duration-1000 ${open? 'top-14' : 'hidden'}`}>
              {navLinks}
              <li className="md:hidden"><Link to='/login'>Login</Link></li>
            </ul>

          <Link to='/login' className="bg-cyan-600 border py-2 px-4 text-lg rounded-sm text-white font-semibold hidden md:inline">Login</Link>
          <div onClick={()=>setOpen(!open)} className={`md:hidden order-last md:order-none`}>
              <CiMenuKebab></CiMenuKebab>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
