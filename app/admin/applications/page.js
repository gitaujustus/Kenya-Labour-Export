'use client'
import { useState } from "react";
import React  from 'react';
import Topbar from "@/components/gok/topbar";
import { IoMdClose } from "react-icons/io";
const Applications = () => {

    const applications = [
        {
          id: 1,
          applicantName: "John Doe",
          jobTitle: "Software Engineer",
          companyName: "TechCo Ltd.",
          applicationDate: "2024-05-15",
          category: "Technology",
          country: "Canada",
          status: "Pending",
        },
        {
          id: 2,
          applicantName: "Jane Smith",
          jobTitle: "Graphic Designer",
          companyName: "Creative Designs Inc.",
          applicationDate: "2024-05-20",
          category: "Technology",
          country: "Canada",
          status: "Approved",
        },
        {
          id: 3,
          applicantName: "Alice Johnson",
          jobTitle: "Marketing Manager",
          companyName: "MarketMasters Ltd.",
          applicationDate: "2024-05-25",
          category: "Technology",
          country: "Canada",
          status: "Rejected",
        },
        {
          id: 4,
          applicantName: "Michael Brown",
          jobTitle: "Data Analyst",
          companyName: "Data Insights Co.",
          applicationDate: "2024-05-30",
          category: "Engineering",
          country: "Canada",
          status: "Pending",
        },
        {
          id: 5,
          applicantName: "David Clark",
          jobTitle: "Customer Support Specialist",
          companyName: "SupportPro Solutions",
          applicationDate: "2024-06-05",
          category: "Technology",
          country: "Canada",
          status: "Approved",
        },
        {
          id: 6,
          applicantName: "John Doe",
          jobTitle: "Software Engineer",
          companyName: "TechCo Ltd.",
          applicationDate: "2024-05-15",
          category: "Technology",
          country: "Canada",
          status: "Pending",
        },
        {
          id: 7,
          applicantName: "Jane Smith",
          jobTitle: "Graphic Designer",
          companyName: "Creative Designs Inc.",
          applicationDate: "2024-05-20",
          category: "Technology",
          country: "Canada",
          status: "Approved",
        },
        {
          id: 8,
          applicantName: "Alice Johnson",
          jobTitle: "Marketing Manager",
          companyName: "MarketMasters Ltd.",
          applicationDate: "2024-05-25",
          category: "Technology",
          country: "Canada",
          status: "Rejected",
        },
        {
          id: 9,
          applicantName: "Michael Brown",
          jobTitle: "Data Analyst",
          companyName: "Data Insights Co.",
          applicationDate: "2024-05-30",
          category: "Engineering",
          country: "Canada",
          status: "Pending",
        },
      ];

    const [currentPage, setCurrentPage] = useState(1);
    const [showRequirements, setShowRequirements] = useState(false);
    const [entriesPerPage] = useState(10);

    const showModel=()=>{
        setShowRequirements(true)
    }
    

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
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div className='flex justify-around flex-col md:flex-row w-full items-center'>
                            <div className="">
                                <label for="table-search" className="sr-only">Search</label>
                                <div className="relative -z-10 ">
                                    <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-60 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items"/>
                                </div>
                            </div>

                            <div>
                            <select className="p-3  md:w-60 w-80  text-sm text-gray-700 bg-gray-200 rounded-md m-3 border-none focus:ring-0" aria-labelledby="dropdownRadioButton">
                                <option value="1" className="flex items-center p-2 rounded hover:bg-gray-100">
                                    <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                                    <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Categories</span>
                                </option>
                                <option value="2" className="flex items-center p-2 rounded hover:bg-gray-100" selected>
                                    <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                                    <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
                                </option>
                                <option value="3" className="flex items-center p-2 rounded hover:bg-gray-100">
                                    <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                                    <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
                                </option>
                                <option value="4" className="flex items-center p-2 rounded hover:bg-gray-100">
                                    <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                                    <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
                                </option>
                                <option value="5" className="flex items-center p-2 rounded hover:bg-gray-100">
                                    <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                                    <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering </span>
                                </option>
                                </select>
                        </div>
                    </div>
                    </div>
                    
                <div className='overflow-x-auto  relative'>
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Application&nbsp;ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Applicant&nbsp;Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job&nbsp;Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Company&nbsp;Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Application&nbsp;Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Country
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          {currentEntries.map((application, index) => (
                              <tr key={application.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white' }>
                                  <td className="px-6 py-4">{application.id}</td>
                                  <td className="px-6 py-4">{application.applicantName}</td>
                                  <td className="px-6 py-4">{application.jobTitle}</td>
                                  <td className="px-6 py-4">{application.companyName}</td>
                                  <td onClick={()=>setShowRequirements(true)} className="px-6 py-4 cursor-pointer">click me</td>
                                  <td className="px-6 py-4">{application.category}</td>
                                  <td className="px-6 py-4">{application.country}</td>
                                  <td className="px-6 py-4">{application.status}</td>
                                  <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
                              </tr>
                          ))}

                           
                        </tbody>
                          {/* display requirements of each job as a pop up */}
                    </table>
                    <div className={`fixed top-[25vh] left-[5vw] sm:left-[35vw] w-[86vw] sm:w-[50vw] h-[50vh] ${showRequirements ? 'scale-1':'scale-0'} transition-all duration-500 ease-in-out bg-white z-20 shadow-xl shadow-black p-2 rounded-md`}> 
                    <div className="flex justify-end">
                        <IoMdClose  onClick={()=>setShowRequirements(false)} className="cursor-pointer" size={26} />
                    </div>
                    <h1 className="font-semibold">Job Requirements</h1>
                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, doloremque non! Reiciendis ad tempora ab! Natus maiores esse tenetur quidem dicta est reiciendis porro! Fugit doloribus sit voluptatum illo minima repellendus enim in eos, minus laudantium! Impedit sapiente illo ullam laborum ab. Ducimus hic voluptas earum? Veniam repellendus aliquam accusamus?</h1>
                    </div>
                    <div onClick={()=>setShowRequirements(false)} className={`w-full h-full top-0 fixed ${showRequirements ? 'scale-1':'scale-0'} duration-300 ease-in-out bg-black opacity-80 z-10`}></div>
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
export default Applications;


