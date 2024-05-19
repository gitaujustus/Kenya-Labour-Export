import React from 'react'
import { TiTick } from "react-icons/ti";
import Link from 'next/link';

function Login() {
  return (
    <main className='min-h-screen flex flex-col items-center py-2'>
        <h1 className='my-2 text-lg md:text-xl'>Login</h1>
        <div className='w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] border-b border-teal-600'></div>
        <h1 className='my-2 text-lg md:text-xl '>Choose Your Account Type</h1>
        <Link href={"/login/admin/gok"} className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] cursor-pointer hover:bg-slate-50 my-4  text-gray-700 p-3 border border-gray-800 hover:border-blue-500 rounded-lg flex justify-between items-center group'>
           <span>
                <h1 className='font-semibold mb-2'>GOK</h1>
                <p>For GOK Administration</p>
           </span>
            <p className='opacity-0 group-hover:opacity-100 duration-700 ease-in-out bg-green-500 p-1 rounded-full'>
                <TiTick color='white' />
            </p>
        </Link>
        <Link href={"/login/citizen"} className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] cursor-pointer hover:bg-slate-50 my-4  text-gray-700 p-3 border border-gray-800 hover:border-blue-500 rounded-lg flex justify-between items-center group'>
           <span>
                <h1 className='font-semibold mb-2'>Citizen</h1>
                <p>For Kenyan Citizen</p>
           </span>
            <p className='opacity-0 group-hover:opacity-100 duration-700 ease-in-out bg-green-500 p-1 rounded-full'>
                <TiTick color='white' />
            </p>
        </Link>
        <Link href={"/login/agency"} className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] cursor-pointer hover:bg-slate-50 my-4  text-gray-700 p-3 border border-gray-800 hover:border-blue-500 rounded-lg flex justify-between items-center group'>
           <span>
                <h1 className='font-semibold mb-2'>Agencies</h1>
                <p>For foreign Government Recruitment Agencies</p>
           </span>
            <p className='opacity-0 group-hover:opacity-100 duration-700 ease-in-out bg-green-500 p-1 rounded-full'>
                <TiTick color='white' />
            </p>
        </Link>
        <Link href={"/login/company"} className='w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] cursor-pointer hover:bg-slate-50 my-4  text-gray-700 p-3 border border-gray-800 hover:border-blue-500 rounded-lg flex justify-between items-center group'>
           <span>
                <h1 className='font-semibold mb-2'>Companies</h1>
                <p>For foreign companies with job requests</p>
           </span>
            <p className='opacity-0 group-hover:opacity-100 duration-700 ease-in-out bg-green-500 p-1 rounded-full'>
                <TiTick color='white' />
            </p>
        </Link>
       
    </main>
  )
}

export default Login