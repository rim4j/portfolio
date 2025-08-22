"use client";
import { useState } from "react";
import { navLinks } from "../utils/data";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 '>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#1f1f1f] shadow-sm'>
        {navLinks.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* mobile menu */}

      <div className='md:hidden ml-auto'>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className='fixed top-4 right-4 z-50 flex items-center px-3 py-2 border cursor-pointer border-slate-200 text-slate-200 hover:text-white hover:border-white '
        >
          {navbarOpen ? (
            <XMarkIcon className='h-5 w-5' />
          ) : (
            <Bars3Icon className='h-5 w-5' />
          )}
        </button>
      </div>

      {/* menu mobile */}
      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full py-20 space-y-6 z-40 backdrop-blur-md'>
          <ul className='flex gap-4 flex-col text-center '>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a className='text-white text-lg' href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
