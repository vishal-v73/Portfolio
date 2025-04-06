import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-black bg-opacity-80 backdrop-blur-md">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>

      <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={toggleMenu} />
        ) : (
          <RiMenu2Line size={30} onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
