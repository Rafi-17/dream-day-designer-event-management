import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("Done!", "Logged out successfully", "success");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-left underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li><NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Contact</NavLink></li>
      <li><NavLink to="/register" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Register</NavLink></li>
      {
        user && <>
          <li><NavLink to="/profile" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Profile</NavLink></li>
          <li><NavLink to="/feedback" className={({ isActive, isPending }) =>isPending ? "pending": isActive ? "underline md:no-underline bg-inherit md:bg-blue-700 md:py-[6px] px-3 font-semibold rounded-md text-cyan-600 md:text-white" : "" }>Feedback</NavLink></li>
        </>
      }
    </>
  );

  return (
    <nav className="px-3 pb-12 shadow-lg ">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg lg:text-3xl text-cyan-600">DreamDayDesigners</h2>

        <ul
          className={`md:grid md: grid-cols-3 lg:flex gap-3 lg:gap-6 text-center text-white md:text-black md:text-lg bg-zinc-700 md:bg-inherit p-4 rounded-md order-last md:order-none absolute md:static right-7 duration-1000 ${
            open ? "top-14" : "hidden"
          }`}
        >
          {navLinks}
          <li className="md:hidden">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div>
          {
            loading? <span className="loading loading-dots loading-md"></span> :
            <>
              {
                user?(
                <div className="flex items-center gap-2 lg:gap-3">
                  <span>{user.displayName}</span>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
              <button onClick={handleLogout} className="bg-cyan-600 border py-2 px-4 text-lg rounded-sm text-white font-semibold hidden md:block">Logout</button>
            </div>) :
            (
              <Link to="/login"className="bg-cyan-600 border py-2 px-4 text-lg rounded-sm text-white font-semibold hidden md:inline">Login</Link>
            )
              }
            </>
          }
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`md:hidden order-last md:order-none`}
        >
          <CiMenuKebab></CiMenuKebab>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
