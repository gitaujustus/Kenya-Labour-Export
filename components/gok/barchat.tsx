
'use client'
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement);

interface BarOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins?: {
    title: {
      display: boolean;
      text: string;
    };
  };
}
interface Props {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
  options: BarOptions;
  title: string;
}

const BarChart: React.FC<Props> = ({ data, options, title }) => {
  return (
    <div className="w-[85vw] sm:w-[50vw] mx-auto lg:w-[35vw] h-86 bg-white p-4 text-xl rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-sm lg:text-xl ml-4 font-bold uppercase">{title}</h1>
      </div>
      <div className="h-[50vh]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
