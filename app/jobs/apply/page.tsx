
"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
// import { useSearchParams } from "next/navigation";
import { AplicationSchema, AplicationSchemaType } from "@/lib/types";
import { Suspense } from 'react';

// Interface for Job structure
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

// Importing job vacancies data
const vacancies: Job[] = require('@/lib/jobs.json');


const Apply = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const jobId = searchParams.get('id')?.split("-")[0];

  // useForm hook from react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<AplicationSchemaType>({
    resolver: zodResolver(AplicationSchema),
  });

  // // Filter job data to render based on jobId
  // const jobToRender = vacancies.flatMap(vacancy =>
  //   Object.entries(vacancy.country).flatMap(([country, companies]) =>
  //     Object.entries(companies).filter(([, job]) => job?.jobId === jobId)
  //       .map(([company, jobDetails]) => ({
  //         country,
  //         company,
  //         title: vacancy.title,
  //         ...jobDetails
  //       })))
  // );

  // Form submission handler
  const onSubmit = async (data: AplicationSchemaType) => {
   
  };

  return (
    <Suspense fallback={<div>Loading...</div>}> 
    <div className="flex flex-col items-center min-h-screen bg-[#1E293B]">
      <div className="bg-gray-50 w-[96%] sm:w-3/4 my-4 min-h-screen items-center">
        <div className="bg-[#0E0E24] min-h-24 text-center p-7">
          <h1 className="text-xl md:text-3xl text-[#ffb74c] font-bold">
            Submit Your Application
          </h1>
          <p className="text-white">
            Thank you for considering Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ad natus omnis rem fuga harum, vero id placeat facilis officia!
          </p>
        </div>

        <div className="py-5 px-2 md:mx-20 rounded-md">

          <div className="border p-5 border-gray-400 rounded-lg">
            <h1 className="text-left sm:lg sm:text-xl font-bold">Guidelines When Applying</h1>
            <ul className="list-disc list-inside text-[#0E0E24]">
              <li>You must be 18 years of age or older to apply.</li>
              <li>You must be a Kenyan to apply.</li>
              <li>You must have a valid Kenyan ID to apply.</li>
            </ul>
          </div>

          <div className="border p-5 border-gray-400 rounded-lg my-5">
            <h1 className=" sm:lg sm:text-xl font-bold">Job description</h1>
            {/* <div>
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
            </div> */}
          </div>

          <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg border-t-8 border-[#0e0e24] shadow-md shadow-[#29293f] w-full">
              <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
                Fill In the Required Details
              </h1>
              <div>
                <label htmlFor="fullname" className="block mb-2 text-gray-600">Full Name:</label>
                <input
                  type="text"
                  id="fullname"
                  {...register('fullname')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="Full Name"
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="nationalID" className="block mb-2 text-gray-600">National ID:</label>
                <input
                  type="text"
                  id="nationalID"
                  {...register('nationalID')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="National ID"
                />
                {errors.nationalID && <p className="text-red-500">{errors.nationalID.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="kra" className="block mb-2 text-gray-600">KRA PIN:</label>
                <input
                  type="text"
                  id="kra"
                  {...register('kra')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="KRA"
                />
                {errors.kra && <p className="text-red-500">{errors.kra.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-600">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-600">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="abstractFile" className="block mb-2 text-gray-600">Certificate:</label>
                <input
                  type="file"
                  id="abstractFile"
                  {...register('abstractFile')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                />
                {errors.abstractFile && <p className="text-red-500">{errors.abstractFile.message?.toString()}</p>}
              </div>

              <div>
                <label htmlFor="curriculumVitae" className="block mb-2 text-gray-600">Curriculum Vitae:</label>
                <input
                  type="file"
                  id="curriculumVitae"
                  {...register('curriculumVitae')}
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  {errors.curriculumVitae && <p className="text-red-500">{errors.curriculumVitae.message?.toString()}</p>}
                </div>
  
                <button
                  type="submit"
                  className="bg-[#0E0E24] text-white px-4 py-2 rounded-lg w-full hover:bg-blue-800 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      </Suspense>
    );
  };
  
  export default Apply;
  
