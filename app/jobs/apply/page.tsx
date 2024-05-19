"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
// import vacancies from "@/lib/jobs.json"
import { useSearchParams } from "next/navigation";



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

const Apply = () => {
  const router = useRouter();
  const [loading, setLoading]=useState(false)
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    institution: '',
    category: '',
    nationalID: '',
    kra: '',
    abstractFile: null,
  });

 const searchParams=useSearchParams()
 const jobId=searchParams.get('id')?.split("-")[0]



  const jobToRender = vacancies.flatMap(vacancy =>
    Object.entries(vacancy.country).flatMap(([country, companies]) =>
      Object.entries(companies).filter(([, job]) => job?.jobId === jobId)
        .map(([company, jobDetails]) => ({
          country,
          company,
          title: vacancy.title,
          ...jobDetails
        }))));
  // console.log(jobToRender);


  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'file' ? files?.[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
  

    } catch (error) {
      
    }
    finally{
      setLoading(false)
    }
  };


  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1E293B]">
      <div className="bg-gray-50 w-[96%] sm:w-3/4 my-4 min-h-screen items-center">
        <div className="bg-[#0E0E24] min-h-24 text-center p-7">
          <h1 className="text-xl md:text-3xl text-[#ffb74c] font-bold">
            Submit Your Aplication
          </h1>
          <p className="text-white">
            Thank you for considering Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ad natus omnis rem fuga harum, vero id placeat facilis officia!
          </p>
        </div>

        <div className="py-5 px-2 md:mx-20 rounded-md">

          <div className="border p-5 border-gray-400 rounded-lg">
            <h1 className="text-left sm:lg sm:text-xl font-bold">Guidelines When Applying</h1>
            <ul className="list-disc list-inside text-[#0E0E24]">
                <li>
                    {" "}
                    You must be 18 years of age or older to apply.
                </li>
                <li>
                    {" "}
                    You must be a Kenyan to apply.
                </li>
                <li>
                    {" "}
                    You must have a valid Kenyan ID to apply.
                </li>
                </ul>
          </div>

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
        

          <div className="flex justify-center ">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border-t-8 border-[#0e0e24] shadow-md shadow-[#29293f] w-full">
              <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
                {" "}
                Fill In the Required Details
              </h1>
              <span>
              <label htmlFor="fullname" className="block mb-2 text-gray-600">
                Full Name:
              </label>
              <input
                type="text"
                id="fullname"
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                placeholder="Full Name"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
              </span>

              <span>
              <label htmlFor="fullname" className="block mb-2 text-gray-600">
                National ID
              </label>
              <input
                type="text"
                id="nationalID"
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                placeholder="National ID"
                required
                value={formData.nationalID}
                onChange={handleChange}
              />
              </span>

              <span>
              <label htmlFor="fullname" className="block mb-2 text-gray-600">
                KRA PIN
              </label>
              <input
                type="text"
                id="kra"
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                placeholder="KRA"
                required
                value={formData.kra}
                onChange={handleChange}
              />
              </span>

              <span>
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              </span>
              <span>
              <label htmlFor="email" className="block mb-2 text-gray-600">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              </span>
            
            
             <span>
                <label htmlFor="email" className="block mb-2 text-gray-600">
                    Certificate
                  </label>
                  <input
                    type="file"
                    id="abstractFile"
                    className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                  />
             </span>
             <span>
                <label htmlFor="email" className="block mb-2 text-gray-600">
                    Curriculum Vitae
                  </label>
                  <input
                    type="file"
                    id="abstractFile"
                    className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                  />
             </span>
              <button
              type="submit"
                className={`w-full bg-[#0e0e24] text-white my-2 py-2 rounded ${loading ? 'cursor-not-allowed' : ''}  hover:bg-[#21213f] focus:outline-none`}
                disabled={loading}
              >
                {loading ? (
              <div role="status" className='flex justify-center gap-2'>
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="">Loading...</span>
              </div>
            ) : (
              <>
                Submit Your Application
              </>
            )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Apply;
