import React, { useState } from 'react';
import createCitizenAccount from '@/app/actions/createCitizenAccount';
import { CgAsterisk } from "react-icons/cg";
function Citizen() {

  return (
    <div className='min-h-[100vh] py-10 bg-slate-50 flex items-center'>
      <form action={createCitizenAccount} className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'>
        <h1 className='text-2xl flex justify-between text-gray-700'>
          <p>Register</p>
          <p>Citizen</p>
        </h1>
        <div className='mt-5'>
          <label htmlFor="nationalID" className='flex gap-2'>ID Number <span><CgAsterisk color='red' size={12} /></span></label>
          <input type="text" name='nationalID' id="nationalID" className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700' />
        </div>

        <div className='my-5'>
          <label htmlFor="nationalID" className='flex gap-2'>Full Name as per your ID <span><CgAsterisk color='red' size={12} /></span></label>
          <input type="text" name='nationalID' id="nationalID" className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700' />
        </div>
        <div className="my-5">
              <label htmlFor="kra" className='flex gap-2'>KRA PIN <span><CgAsterisk color='red' size={12} /></span></label>
              <input
                type="text"
                name="kra"
                id="kra"
                className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
              />
            </div>
        <div className="mt-5">
              <label htmlFor="email" className='flex gap-2'>Email <span><CgAsterisk color='red' size={12} /></span></label>
               <input
                type="email"
                name="email"
                id="email"
                className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
              />
            </div>
            <div className="my-5">
              <label htmlFor="contact" className='flex gap-2'>Contact Number <span><CgAsterisk color='red' size={12} /></span></label>
              <input
                type="tel"
                name="contact"
                id="contact"
                className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
              />
            </div>
          
        <div className="my-5">
              <label htmlFor="password" className='flex gap-2'>Password <span><CgAsterisk color='red' size={12} /></span></label>
              <input
                type="password"
                name="password"
                id="password"
                className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
              />
            </div>
        <button type="submit" className='bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right'>Submit</button>
      </form>
    </div>
  )
}

export default Citizen
