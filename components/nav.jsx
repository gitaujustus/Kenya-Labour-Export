"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  // Close the menu when the user scrolls the page
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the menu when the user clicks outside the Navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <nav ref={navRef} className="  bg-[#111827] border-gray-200 text-gray-100 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className='flex gap-2 items-center'>
  <div className='flex flex-col items-center'>
    <img src="/images/KenyaLogo.png" alt="Kenya" className='w-10' />
    <p className='text-xs hidden md:block'>Republic of Kenya</p>
  </div>

  <div className='divider'></div>
  
  <div className='flex flex-row items-center gap-2'>
    <img src="/images/KLESLogo.png" alt="Kenya" className='w-10' />
    <p className='font-bold'>KLES</p>
  </div>
</div>


       <div className='flex gap-4'>
      {/* for small screen */}
        <ul className='flex md:hidden gap-1'>
            <li>
                <Link href="/login" onClick={() => setIsOpen(false)}  className={`hidden md:block py-2 px-3 text-gray-50  rounded bg-[#48af6e] hover:bg-[#54ca7f]  md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-800"} `}>Login</Link>
                </li>
                <li>
                <Link href="/register" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-50  rounded bg-[#48af6e] hover:bg-[#54ca7f] md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-800"} `}>Register</Link>
            </li> 
        </ul>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        </div>
        <div className={`w-full md:flex items-center gap-40 md:w-auto ${isOpen ? 'block' : 'hidden'} `} id="navbar-default">
          <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border bg-[#111827]  border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-gray-100 md:b-primary">
            <li>
            <Link href="/" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-100  rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/" ? "text-secondary" : "md:text-gray-100"} `}>Home</Link>
            </li>
            
            <li>
            <Link href="/jobs" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-100  rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/jobs" ? "text-secondary" : "md:text-gray-100"} `}>Jobs</Link>
            </li>

            <li>
            <Link href="/help&support" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-100  rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-100"} `}>Help&nbsp;&&nbsp;Support</Link>
            </li>
            <li>
            <Link href="/admin" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-100  rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-secondary  md:p-0 ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-100"} `}>About&nbsp;Us</Link>
            </li>
          </ul>
          <ul className='hidden md:flex gap-2'>
            <li>
                <Link href="/login" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-50  rounded bg-[#48af6e] hover:bg-[#54ca7f]  ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-800"} `}>Login</Link>
                </li>
                <li>
                <Link href="/register" onClick={() => setIsOpen(false)}  className={`block py-2 px-3 text-gray-50  rounded bg-[#48af6e] hover:bg-[#54ca7f]  ${pathname === "/research-support" ? "text-secondary" : "md:text-gray-800"} `}>Register</Link>
            </li> 
        </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;