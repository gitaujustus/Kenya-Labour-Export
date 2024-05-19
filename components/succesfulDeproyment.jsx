import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { IoMdArrowDropdown } from "react-icons/io";

const SuccesfulDeproyment = () => {
  const barData = {
    labels: ["2020","2021", "2022", "2023"],
    datasets: [
      {
        label: "people exported",
        data: [30267, 46912, 62983, 98467],
        backgroundColor: ["#111827",'#293c65','#344d82',"#4d72c2"],
      }
    //   {
    //     label: "Airtel",
    //     data: [1.0],
    //     backgroundColor: ["#ea1821"],
    //   },
    ],
  };

  const options = {
    responsive: true, // Enable responsive resizing
    maintainAspectRatio: false, // Don't maintain aspect ratio
    plugins: {
     
    },
  };

  return (
    <div className="mx-2 sm:mx-20 md:mx-40 lg:mx-72 h-86 bg-gray-200  p-4 text-xl rounded-xl">
    <div className="flex justify-center my-2">
      <h1 className="text-sm lg:text-xl ml-4 font-bold uppercase text-gray-800">Deployment Success</h1>
    </div>
    <div className="h-[50vh] ">
       <Bar data={barData} options={options} />
    </div>
  </div>
  );
};

export default SuccesfulDeproyment;