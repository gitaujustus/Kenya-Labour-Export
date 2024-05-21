import React from "react";
import StateNav from "@/components/states/state-navigation";
import { CountryContext } from "@/context/countryContext";

interface StateParams {
  country: string;
}
function State({params: StateParams}: {params: StateParams}) {

  const country = StateParams.country
  console.log(country);

  

  // const contry=params.country
  const handleSubmitToGovernment = () => {
    // Logic for submitting approved job requests to the Kenyan government
    console.log("Submitting approved job requests to the Kenyan government...");
  };

  return (
    // <CountryContext.Provider value={country}>
    <main className="min-h-screen">
      <StateNav />
      <div className="sm:ml-64 w-full sm:w-auto fixed sm:static top-0  bg-[#151515] h-14 border-b-2 flex justify-center items-center ">
        <h1 className="text-2xl font-bold text-white">Job Request Dashboard</h1>
      </div>
      <div className="sm:ml-64 mt-14 sm:mt-0">
        <div className="flex flex-col w-full min-h-screen">
          <section className="flex-1 px-2 py-3 md:p-5 lg:p-8 grid gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-blue-500 text-white px-4 py-3">
                    <h3 className="text-lg font-bold">Total Requests</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold">1,234</div>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-green-500 text-white px-4 py-3">
                    <h3 className="text-lg font-bold">Approved</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold">1200</div>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-yellow-300 text-white px-4 py-3">
                    <h3 className="text-lg font-bold">Pending</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold">18</div>
                  </div>
                </div>
              </div>
            </div>

              <div className="flex justify-end my-4">
                  <button
                    // onClick={handleSubmitToGovernment}
                    className="bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Submit Approved Jobs to Kenyan Government
                  </button>    
              </div>
            <h2 className="text-xl font-bold mb-4">New Requests</h2>
            <div className="overflow-x-auto  relative">
              <table className="w-full  bg-white border border-gray-200 ">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2 border-b-2 border-gray-300">
                      Company
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-300">
                      Job&nbsp;Requests
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-300">
                      Details
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">United States</td>
                    <td className="px-4 py-2">500</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 flex md:flex-row flex-col gap-2">
                      <button className="text-blue-500 border px-2 rounded-md border-green-400">
                        Approve
                      </button>
                      <button className="text-blue-500 border px-2 rounded-md border-red-400">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Canada</td>
                    <td className="px-4 py-2">250</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 flex md:flex-row flex-col gap-2">
                      <button className="text-blue-500 border px-2 rounded-md border-green-400">
                        Approve
                      </button>
                      <button className="text-blue-500 border px-2 rounded-md border-red-400">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">United Kingdom</td>
                    <td className="px-4 py-2">175</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 flex md:flex-row flex-col gap-2">
                      <button className="text-blue-500 border px-2 rounded-md border-green-400">
                        Approve
                      </button>
                      <button className="text-blue-500 border px-2 rounded-md border-red-400">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Australia</td>
                    <td className="px-4 py-2">120</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 flex md:flex-row flex-col gap-2">
                      <button className="text-blue-500 border px-2 rounded-md border-green-400">
                        Approve
                      </button>
                      <button className="text-blue-500 border px-2 rounded-md border-red-400">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Germany</td>
                    <td className="px-4 py-2">90</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 flex md:flex-row flex-col gap-2">
                      <button className="text-blue-500 border px-2 rounded-md border-green-400">
                        Approve
                      </button>
                      <button className="text-blue-500 border px-2 rounded-md border-red-400">
                        Reject
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
    // </CountryContext.Provider>
  );
}

export default State;
