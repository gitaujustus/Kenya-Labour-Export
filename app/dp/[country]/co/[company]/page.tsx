import CompanyNav from "@/components/states/company-navigation";
interface CompanyParams {
    company: string;
}

export default function Component({params: CompanyParams}: {params: CompanyParams}) {
    const company = CompanyParams.company;
    return (
        <main>
            <CompanyNav  />
            <div className="sm:ml-64 w-full sm:w-auto fixed sm:static top-0  bg-[#13161E] h-14 border-b-2 flex justify-center items-center ">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>
            <div className=" sm:ml-64 mx-auto py-12 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Request Labor</h2>
                    <form className="space-y-4 min-w-[20vw]">
                    <div>
                        <label className="block font-medium mb-1" htmlFor="job-type">
                            Industry
                        </label>
                        <select className="w-full border border-gray-300 rounded-md p-2" id="job-type">
                        <option value="" disabled selected>Select Industry type</option>
                        <option value="software-engineer">Technology</option>
                        <option value="graphic-designer">Fasion and Textile</option>
                        <option value="data-analyst">Engineering</option>
                        <option value="customer-service">Food Processing</option>
                        <option value="customer-service">Chemical</option>
                        <option value="customer-service">Medicine</option>
                        <option value="customer-service">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="skills">
                        Job Title
                        </label>
                        <input
                        className="w-full border border-gray-300 rounded-md p-2"
                        id="skills"
                        placeholder="Enter job title"
                        type="text"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="skills">
                        Skills & Qualifications Needed
                        </label>
                        <input
                        className="w-full border border-gray-300 rounded-md p-2"
                        id="skills"
                        placeholder="Enter required skills"
                        type="text"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="vacancies">
                        Number of Vacancies
                        </label>
                        <input
                        className="w-full border border-gray-300 rounded-md p-2"
                        id="vacancies"
                        min="1"
                        type="number"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded-md" type="submit">
                        Submit Request
                    </button>
                    </form>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 ">
                    <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
                    <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4 ">
                        <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Labor Application Opening Soon</span>
                        {/* <span className="text-sm text-gray-500 ">5 vacancies</span> */}
                        </div>
                        <p className="text-gray-500 ">
                            Labor applications will open from June. Prepare your requests.
                        </p>
                        <span className="text-sm text-gray-500 flex justify-end ">13th June</span>
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-4 ">
                        <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Upcoming Labor Disbursement</span>
                        </div>
                        <p className="text-gray-500 ">
                            Requested labor is ready and will be disbursed in two weeks.
                        </p>
                        <span className="text-sm text-gray-500 flex justify-end ">13th June</span>
                    </div>
                    </div>
                    <div className="mt-4 bg-green-100 rounded-lg p-4 text-green-700 ">
                    {/* <CheckIcon className="h-5 w-5 mr-2 inline-block" /> */}
                    The system is currently receiving labor requests.
                    </div>
                </div>
                </div>
            </div>
      </main>
    );
  }
 