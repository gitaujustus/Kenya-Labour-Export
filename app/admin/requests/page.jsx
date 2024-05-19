
'use client'

import { useState } from "react";
import React from 'react';
import Topbar from "@/components/gok/topbar";
import { IoMdClose } from "react-icons/io";

const Requests = () => {
    const applications = [
        {
            id: 1,
            country: "Canada",
            workersNeeded: 2250,
        },
        {
            id: 2,
            country: "Germany",
            workersNeeded: 3022,
        },
        {
            id: 3,
            country: "Australia",
            workersNeeded: 2220,
        },
        {
            id: 4,
            country: "United States",
            workersNeeded: 4220,
        },
        {
            id: 5,
            country: "United Kingdom",
            workersNeeded: 2225,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage] = useState(5);

    // Get the current entries based on the current page
    const indexOfLastEntry = Math.min((currentPage * entriesPerPage), applications.length);
    const indexOfFirstEntry = Math.max(indexOfLastEntry - entriesPerPage, 0);
    const currentEntries = applications.slice(indexOfFirstEntry, indexOfLastEntry);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="sm:ml-64  min-h-screen">
            <Topbar/>
            <div className="mt-14 sm:mt-0 shadow-md sm:rounded-lg">
                <h1 className="text-center  text-xl my-2 text-gray-800 font-semibold">Job Requests</h1>
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Country
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Workers&nbsp;Needed
                                </th>
                                <th scope="col" className="px-6 py-3">
                                   Details
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEntries.map((application, index) => (
                                <tr key={application.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white' }>
                                    <td className="px-6 py-4">{application.country}</td>
                                    <td className="px-6 py-4">{application.workersNeeded}</td>
                                    <td className="px-6 py-4"><a href="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" className="text-blue-600 hover:underline">View Details</a></td>
                                    <td className="px-6 flex py-4">
                                        <button className="text-blue-600 border border-gray-800 px-2 rounded-md ">Accept</button>
                                        <button className="text-red-600 border border-red-800 px-2 rounded-md  ml-2">Reject</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-center mt-4 pb-4">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        Showing{' '}
                        <span className="font-semibold text-gray-900 ">
                            {indexOfFirstEntry + 1}
                        </span>{' '}
                        to{' '}
                        <span className="font-semibold text-gray-900 ">
                            {indexOfLastEntry > applications.length
                                ? applications.length
                                : indexOfLastEntry}
                        </span>{' '}
                        of{' '}
                        <span className="font-semibold text-gray-900 ">
                            {applications.length}
                        </span>{' '}
                        Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <button
                            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={indexOfLastEntry >= applications.length}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Requests;
