import React from 'react';
import { Link} from 'react-router-dom';
import Topbar from './Topbar';
import img from './360_F_345156391_IJinl1hx16UCpeqk75DxTu62AisBJgiS.jpg'


const Navbar = () => {
 
  const menuItem = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
          <li className="font-semibold">
            <Link to="/causes">causes</Link>
          </li>
          <li className="font-semibold">
            <Link to="/events">events</Link>
          </li>
          <li className="font-semibold">
            <Link to="/gallery">gallery</Link>
          </li>
          <li className="font-semibold">
            <Link to="/blog">Blog</Link>
          </li>
     
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
        </>
  );
    return (
      <>
      <Topbar/>
        <div className="navbar h-20 p-16 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-500 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="flex ">
            <img src={img} alt='' className='h-20 w-28'/>
         <h2 className='text-4xl'>Donation <br/><span className='text-lg text-gray-900'>Charity & fundraising</span></h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/services" className="btn btn-outline hover:bg-orange-500">
          Donation Now
        </Link>
      </div>
    </div>
      </>
    );
};

export default Navbar;