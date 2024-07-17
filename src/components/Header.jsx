import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  let [open,setOpen]=useState(false);

  return (
    <header id="header" className="bg-dark shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white-200 md:hidden">
          <span className="title text-light">
            <h1 className="text-2xl">BARBER SHOP</h1>
          </span>
        </div>
        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className="text-white-200 text-2xl"/>
        </div>
        <ul className={`md:flex md:gap-8 md:items-center bg-dark md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${ open ? "top-16 " : "top-[-490px]" } md:space-y-0 space-y-6 text-white-200 text-xl`}>
          <li className=""><a href="#">HOME</a></li>
          <li className=""><a href="#about">ABOUT US</a></li>
          <li className=""><a href="#services">OUR SERVICES</a></li>
          <li className=""><a href="#hours">HOURS</a></li>
          <li className=""><a href="#prices">PRICES</a></li>
          <li className=""><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
