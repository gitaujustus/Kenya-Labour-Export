'use client'
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FcOrganization } from "react-icons/fc";
import Link from 'next/link';

interface Job {
  id: number;
  title: string;
  country: {
    [key: string]: {
      [key: string]: {
        jobId: string;
        description: string;
        qualification: string;
        deadline: string;
        slots: string;
      }
    }
  }
}

const vacancies: Job[] = require('@/lib/jobs.json');

function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [model, setModel] = useState<boolean>(false);
  const [expandedCountries, setExpandedCountries] = useState<string[]>([]);
  const [expandedCompanies, setExpandedCompanies] = useState<Record<string, Record<string, boolean>>>({});

  const handleJobClick = (vacancy: Job) => {
    setModel(true);
    setSelectedJob(vacancy);
  }

  const handleCountryClick = (country: string) => {
    if (expandedCountries.includes(country)) {
      setExpandedCountries(expandedCountries.filter(c => c !== country));
    } else {
      setExpandedCountries([...expandedCountries, country]);
    }
  }

  const handleCompanyClick = (country: string, company: string) => {
    setExpandedCompanies(prevState => ({
      ...prevState,
      [country]: prevState[country] ? { ...prevState[country], [company]: !prevState[country][company] } : { [company]: true }
    }));
  }

  return (
    <main className='min-h-[90vh] relative'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 justify-items-center mx-2 md:mx-10 ">
        <h2 className="text-3xl font-bold mb-4 col-span-full my-5">Job Vacancies</h2>
        {vacancies.map((vacancy, index) => (
          <div key={index} className="bg-white hover:bg-gray-100 p-4 w-full cursor-pointer border-b border-gray-200 hover:border-blue-500 duration-500 ease-in-out ">
            <p onClick={() => handleJobClick(vacancy)}>
              <h3 className="text-xl font-semibold text-gray-800">{vacancy.title}</h3>
            </p>
          </div>
        ))}
      </div>
      {/* Job description */}
      <div className={`bg-gray-100 p-2 md:p-5 w-full h-full sm:w-[95vw] md:w-3/4 ${model ? 'translate-x-0' : '-translate-x-full'} duration-500 ease-in-out absolute top-0 left-0 z-10 overflow-auto`}>
        <IoMdClose size={32} className='cursor-pointer float-right' onClick={() => setModel(false)} />
        {selectedJob && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">{selectedJob.title}</h3>
            {Object.keys(selectedJob.country).map((country, index) => (
              <div key={index} className="border-b border-gray-300">
                <div className="flex my-3 justify-between items-center cursor-pointer" onClick={() => handleCountryClick(country)}>
                  <h4 className="text-lg font-semibold mt-4 uppercase flex items-center gap-2"><FaLocationDot size={26} color='#3B82F6'/>{country}</h4>
                  <span className='text-xl'>{expandedCountries.includes(country) ? '-' : '+'}</span>
                </div>
                {expandedCountries.includes(country) && (
                  <div className="ml-4">
                    {Object.keys(selectedJob.country[country]).map((company, companyIndex) => (
                      <div key={companyIndex} className="border-b border-gray-200  p-2">
                        <div className="flex justify-between my-4 items-center cursor-pointer" onClick={() => handleCompanyClick(country, company)}>
                          <h5 className="font-semibold flex items-center gap-2"> <FcOrganization size={26}/>{company}</h5>
                          <span className='text-xl'>{expandedCompanies[country] && expandedCompanies[country][company] ? '-' : '+'}</span>
                        </div>
                        {expandedCompanies[country] && expandedCompanies[country][company] && (
                          <div className="ml-4 my-2 bg-gray-50 hover:bg-white duration-500 ease-in-out p-2 rounded-md ">
                            <p>{selectedJob.country[country][company].description}</p>
                            <p><span className='font-semibold'>Qualification:</span> {selectedJob.country[country][company].qualification}</p>
                            <p> <span className='font-semibold'>Deadline:</span>{selectedJob.country[country][company].deadline}</p>
                            <p> <span className='font-semibold mb-4'>Slots available: </span>{selectedJob.country[country][company].slots}</p>
                            <p className="bg-blue-500 text-white px-4 py-2 my-6 w-32 mt-10 rounded-md ">
                              <Link href={`/jobs/apply?id=${selectedJob.country[country][company].jobId}-${selectedJob.title}`} >Apply Now</Link> 
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {model && <div onClick={() => setModel(false)} className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>}
    </main>
  )
}

export default Jobs
