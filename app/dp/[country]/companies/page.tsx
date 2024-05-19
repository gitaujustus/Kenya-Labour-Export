import StateNav from '@/components/states/state-navigation';
import React from 'react';

const Company = () => {
  const companies = [
    { id: 1, name: 'Acme Inc.', industry: 'Technology', employees: 5000 },
    { id: 2, name: 'Globex Corp.', industry: 'Finance', employees: 2500 },
    { id: 3, name: 'Stark Industries', industry: 'Manufacturing', employees: 8000 },
    { id: 4, name: 'Stark Industries', industry: 'Manufacturing', employees: 8000 },
  ];

  return (
    <main>
      <StateNav />
      <div className="sm:ml-64 w-full sm:w-auto fixed sm:static top-0  bg-[#151515] h-14 border-b-2 flex justify-center items-center ">
        <h1 className="text-2xl font-bold text-white">Companies</h1>
      </div>
    <div className="sm:ml-64 mt-14 sm:mt-0 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registered Companies</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Industry</th>
              <th className="px-4 py-2">Employees</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{company.name}</td>
                <td className="border px-4 py-2">{company.industry}</td>
                <td className="border px-4 py-2">{company.employees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </main>
  );
};

export default Company;