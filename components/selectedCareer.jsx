"use client"

import { useSearchParams } from "next/navigation";

const JobDetails = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('id')?.split("-")[0];

  // Filter job data to render based on jobId
  const jobToRender = vacancies.flatMap(vacancy =>
    Object.entries(vacancy.country).flatMap(([country, companies]) =>
      Object.entries(companies).filter(([, job]) => job?.jobId === jobId)
        .map(([company, jobDetails]) => ({
          country,
          company,
          title: vacancy.title,
          ...jobDetails
        })))
  );

  return (
    <div className="border p-5 border-gray-400 rounded-lg my-5">
      <h1 className=" sm:lg sm:text-xl font-bold">Job description</h1>
      <div>
        {jobToRender.length > 0 ? (
          jobToRender.map((job, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-blue-800 mt-4">{job.title}</h3>
              <p><span className="font-semibold">Country:</span> {job.country}</p>
              <p><span className="font-semibold">Company:</span> {job.company}</p>
              <p>{job.description}</p>
              <p><span className="font-semibold">Qualification:</span> {job.qualification}</p>
              <p className="text-red-500"><span className="font-semibold">Deadline:</span> {job.deadline}</p>
              <p><span className="font-semibold">Slots available:</span> {job.slots}</p>
            </div>
          ))
        ) : (
          <p>No job found with the given jobId.</p>
        )}
      </div>
    </div>
  );
};

export default JobDetails;