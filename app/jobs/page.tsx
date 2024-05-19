import React from "react";
import Search from "@/components/search";
import Jobs from "@/components/jobs";

function jobs() {
  return (
    <main className="min-h-screen">
      <div className="bg-slate-200 w-full h-10 flex items-center justify-center">
        <h1 className="text-center">KLES: AVAILABLE JOBS FOR YOU</h1>
      </div>

      {/* Hero section */}
      <div className="h-[40vh] relative flex items-center justify-center">
        <img
          src="/images/labor.jpg"
          alt="labor"
          className="w-full object-cover h-full absolute "
        />
        <div className="bg-black opacity-70 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative">
          <Search/>
        </div>
      </div>

      <section>
        <Jobs/>
      </section>
    </main>
  );
}

export default jobs;
