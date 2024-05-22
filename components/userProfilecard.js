// UserProfileCard.js
import React from 'react';
import Link from 'next/link';



const UserProfileCard = () => {

 return (
  <div
  className="absolute z-10 right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
>
  <div className="flex flex-col items-center space-y-4 p-6">
    {/* <FaUserCircle size={32} className='text-2xl text-[#48af6e] hover:text-[#54ca7f]' /> */}
    <div className="h-20 w-20 bg-gray-900 text-white rounded-full flex items-center justify-center dark:bg-gray-50 dark:text-gray-900">
          <span className="text-xl font-bold">JG</span>
    </div>
    <div className="space-y-1 text-center">
      <h4 className="text-lg font-semibold text-slate-800">Justus Gitau</h4>
      <p className="text-sm text-gray-500">jgathiru@vercel.app</p>
    </div>
    <div className="grid w-full gap-2">
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        href="/user/profile"
      >
        View Profile
      </Link>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-red-600 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-red-500  focus:outline-none focus:ring-2 focus:ring-red-500"
        href="/user/profile/signout"
      >
        Logout
      </Link>
    </div>
  </div>
  </div>
  );
};

export default UserProfileCard;
