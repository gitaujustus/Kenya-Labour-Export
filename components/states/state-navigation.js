'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { FaBriefcase } from "react-icons/fa";
import { PiBriefcaseFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { FaBell } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


function StateNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    const handleMenuClick = (event) => {
      if (event.target.tagName === 'A') {
        setIsOpen(false);
      }
    };
  
    // Add event listeners
    document.addEventListener('mousedown', handleOutsideClick);
    if (sidebarRef.current) {
      sidebarRef.current.addEventListener('click', handleMenuClick);
    }
  
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      // Check if sidebarRef.current is not null before removing the event listener
      if (sidebarRef.current) {
        sidebarRef.current.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);
  


  return (
    <div >
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="fixed top-0 z-10 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={toggleNavbar}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40  w-64  h-screen transition-transform 
        ${
          isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
        ref={sidebarRef}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#151515]  ">
        
          <div className="flex justify-between
                 gap-2 items-center ps-2.5 mb-8 ">
                    <div className='flex'>
                        <FaUserCircle className='text-white mr-2' size={32} />
                            <div className='text-white text-left'>
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Canada</span>
                                    <p>Agency</p>
                            </div>
                    </div>
                </div>
          <ul className="space-y-2 font-medium">
          
            <li onClick={toggleNavbar}>
              <Link
                href="/dp/state"
                className="flex items-center p-2 text-gray-200 rounded-lg  hover:bg-gray-600  group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-100 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                  
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li onClick={toggleNavbar}>
              <Link
                href="/dp/state/companies"
                className="flex items-center p-2 text-gray-200 rounded-lg  hover:bg-gray-600  group"
              >
               <FaBriefcase size={20} className='text-[#9CA3AF] group-hover:text-white'/>
                <span className="ms-3">Companies</span>
              </Link>
            </li>
            <li onClick={toggleNavbar}>
              <Link
                href="/dp/state/updates"
                className="flex items-center p-2 text-gray-200 rounded-lg  hover:bg-gray-600  group"
              >
              <PiBriefcaseFill size={22} className='text-[#9CA3AF] group-hover:text-white'/>

                <span className="ms-3">Updates</span>
              </Link>
            </li>
          
           
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default StateNav

