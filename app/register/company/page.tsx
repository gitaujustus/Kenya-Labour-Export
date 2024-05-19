import React, { useState } from 'react';
// import createCompanyAccount from '@/app/actions/createCompanyAccount';
import { CgAsterisk } from "react-icons/cg";
function Company() {

  return (
    <div className='min-h-[100vh] py-10 bg-slate-50 flex items-center'>
      <form action="" className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'>
        <h1 className='text-2xl flex justify-between text-gray-700'>
          <p>Register</p>
          <p>Company</p>
        </h1>
        <div className='mt-5'>
          <label htmlFor="nationalID" className='flex gap-2'>Company Name <span><CgAsterisk color='red' size={12} /></span></label>
          <input type="text" name='nationalID' id="nationalID" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
        </div>

        <div className='my-5'>
          <label htmlFor="nationalID" className='flex gap-2'>Country <span><CgAsterisk color='red' size={12} /></span></label>
          <select name="country" id="country" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500'>
            <option value="">Select Country</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="arabia">Arabia</option>
            <option value="nethelands">Nethelands</option>
          </select>
        </div>
        <div className='my-5'>
          <label htmlFor="nationalID" className='flex gap-2'>Company Address <span><CgAsterisk color='red' size={12} /></span></label>
          <input type="text" name='nationalID' id="nationalID" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
        </div>
        <div className='my-5'>
          <label htmlFor="nationalID" className='flex gap-2'>Company Email<span><CgAsterisk color='red' size={12} /></span></label>
          <input type="text" name='nationalID' id="nationalID" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
        </div>
        <div className="my-5">
              <label htmlFor="password" className='flex gap-2'>Password <span><CgAsterisk color='red' size={12} /></span></label>
              <input
                type="password"
                name="password"
                id="password"
                className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
              />
            </div>
        <button type="submit" className='bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right'>Submit</button>
      </form>
    </div>
  )
}

export default Company
