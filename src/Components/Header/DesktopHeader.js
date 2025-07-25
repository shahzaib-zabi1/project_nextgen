import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import MobileHeader from "./MobileHeader";

const DesktopHeader = () => {


    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);


  return <>
      <nav className="relative px-5  lg:px-10 py-5 lg:py-8 flex justify-between items-center">
        {/* logo */}
        <NavLink className="flex title-font  cursor-pointer text-yellow-500 text-2xl lg:text-3xl font-nunito  font-black items-center mb-4 md:mb-0">
     <i className="fa fa-utensils me-2 "></i>
      <h1 >Restoran</h1>
    </NavLink>

        <div className="lg:hidden">
          <button
            className="navbar-burger  flex items-center text-orange-400 "
            onClick={toggleOpen}
          >
          <i class="fa-sharp fa-solid fa-bars text-2xl -mt-3"></i>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 text-white cursor-pointer text-xl font-normal font-heebo transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-right lg:w-auto lg:space-x-6">
        <NavLink className=" " to={'/'}>Home</NavLink>         
        <NavLink className="mr-9 " to={'/about-us'}>About</NavLink>
        <NavLink className="mr-9 " to={'/services'}>Services</NavLink>
        <NavLink className="mr-9 " to={'/menu'}>Menu</NavLink>
        <NavLink className="mr-9" to={'/contact-us'}>Contact</NavLink>
        </ul>

      <button className="inline-flex lg:block hidden items-center bg-orange-400 border-0 py-2 px-5 focus:outline-none font-bold  text-white mt-4 md:mt-0">Book a table
     
     </button>
      </nav>

      {open && <MobileHeader toggleOpen={toggleOpen} />}
  </>;
};

export default DesktopHeader;
