export default function Component() {
    return (
      <div className="flex flex-col items-center justify-center gap-6 p-8 md:flex-row md:items-start md:gap-12 min-h-[90vh]">
        <div className="h-20 w-20 bg-gray-900 text-white rounded-full flex items-center justify-center dark:bg-gray-50 dark:text-gray-900">
          <span className="text-xl font-bold">JD</span>
        </div>
        <div className="grid w-full max-w-md gap-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-500 dark:text-gray-400">ID: 12345678</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400">Email:</p>
              <p>john.doe@example.com</p>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400">KRA Pin:</p>
              <p>A123456789X</p>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400">Contacts:</p>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
            Apply for Jobs
          </button>
        </div>
      </div>
    );
  }
  