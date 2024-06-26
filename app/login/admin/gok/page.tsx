import React, { useState } from 'react';
import createCitizenAccount from '@/app/actions/createCitizenAccount';
import { CgAsterisk } from "react-icons/cg";
function AgencyLogin() {

  return (
    <div className='min-h-[90vh] py-10 bg-slate-50 flex items-center'>
      <form action={createCitizenAccount} className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'>
        <h1 className='text-2xl flex justify-between text-gray-700'>
          <p>Login</p>
          <p>GOK</p>
        </h1>
        <div className='mt-5'>
          <label htmlFor="emailAdress" className='flex gap-2'>Email Address<span><CgAsterisk color='red' size={12} /></span></label>
          <input type="email" name='emailAdress' id="emailAdress" className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700' />
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

export default AgencyLogin