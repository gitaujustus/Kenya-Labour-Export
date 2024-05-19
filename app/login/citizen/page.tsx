import React, { useState } from 'react';
import createCitizenAccount from '@/app/actions/createCitizenAccount';
import { CgAsterisk } from "react-icons/cg";
function CitizenLogin() {

  return (
    <div className='min-h-[90vh]  bg-slate-50 flex '>
        <div className='flex items-center w-full md:w-[50vw] '>
            <form action={createCitizenAccount} className='w-[95vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'>
                <h1 className='text-2xl flex justify-between text-gray-700'>
                <p>Login</p>
                <p>Citizen</p>
                </h1>
                <div className='mt-5'>
                <label htmlFor="nationalID" className='flex gap-2'>ID Number <span><CgAsterisk color='red' size={12} /></span></label>
                <input type="text" name='nationalID' id="nationalID" className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700' />
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
                <button type="submit" className='bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right w-full'>Login</button>
            </form>
      </div>
      <div className='w-[50vw] bg-slate-500 hidden md:block'>
           <img src="/images/GRADUATES.jpeg" alt="Graduates" className='h-full object-cover' />
      </div>
    </div>
  )
}

export default CitizenLogin