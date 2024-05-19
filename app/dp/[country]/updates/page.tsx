import StateNav from '@/components/states/state-navigation';
import React from 'react';

export default function Component() {
  return (
    <main>
         <StateNav />
      <div className="sm:ml-64 w-full sm:w-auto fixed sm:static top-0  bg-[#151515] h-14 border-b-2 flex justify-center items-center ">
        <h1 className="text-2xl font-bold text-white">Updates</h1>
      </div>
            <div className="sm:ml-64 mt-14 sm:mt-0 flex flex-col gap-8 p-6 md:p-8">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Post Job Application Update</h1>
                <p className="text-gray-500 dark:text-gray-400">
                Update applicants on the status of their job application.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 lg:w-[50vw]">
                <form action="" className="grid gap-6 ">
                <div className="grid gap-2">
                    <label htmlFor="title" className="font-medium text-gray-700">Update Title</label>
                    <input
                    id="title"
                    type="text"
                    placeholder="Enter update title"
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="description" className="font-medium text-gray-700">Update Description</label>
                    <textarea
                    id="description"
                    placeholder="Enter update description"
                    className="px-4 py-2 border rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    {/* <label htmlFor="allow-applications" className="flex items-center gap-2 font-medium text-gray-700">
                    Allow Applications
                    <input
                        type="checkbox"
                        id="allow-applications"
                        className="toggle-checkbox h-6 w-11 rounded-full bg-gray-200 focus:outline-none"
                    />
                    </label> */}
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900">Allow Applications</span>
                        </label>
                    <button className="bg-teal-500 text-white px-2 md:px-6 py-2 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    Post Update
                    </button>
                </div>
                </form>
            </div>
            </div>
    </main>
  );
}
