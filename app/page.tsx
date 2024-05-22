"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuSchool2 } from "react-icons/lu";
import { RiFundsFill } from "react-icons/ri";
import { FcRules } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
import SuccesfulDeproyment from "@/components/succesfulDeproyment";

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef:any = useRef(null);
  const images = [
    "/images/GRADUATES.jpeg",
    "/images/labor.jpg",
    "/images/image.png",
  ];

  useEffect(() => {
    const swipeInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(swipeInterval);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = images[imageIndex];
    }
  }, [imageIndex]);

  return (
    <main className="bg-[#111827]">
      {/* hero section */}
      <div className="bg-gray-200 min-h-[60vh] md:min-h-[80vh] relative overflow-hidden">
        <Image
          width={1920}
          height={1080}
          ref={imageRef}
          src={images[imageIndex]}
          className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out"
          alt="research"
        />
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h2 className=" w-[70vw] md:w-[50vw] text-3xl md:text-5xl mb-5 font-bold">
            KENYA LABOR EXPORT SYSTEM
          </h2>
          <p className="mb-10">Opportunity Beyond Boundaries.</p>
          <Link
            href={"/"}
            className="text-[#ffffff]  rounded-md px-10 py-4 my-12 bg-gradient-to-r from-[#192F59] to-[#0f59e2]"
          >
            Get Started
          </Link>
        </div>
      </div>
      <section>
        <div className="w-[90vw] hidden md:block md:w-[80vw] h-[30vh] sm:h-[20vh] m-auto bg-slate-300 rounded-md mt-[-40px] relative">
          <img
            src="/images/from-kenya.jpg"
            className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out rounded-md"
            alt="research"
          />
          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full rounded-md bg-[#192F59] opacity-90 z-10"></div>
          <div className="rounded-sm flex flex-col justify-center items-center p-4 z-20 relative text-md md:text-lg w-[80vw] text-white text-sm sm:text-md md:text-center">
            <p className="">
              {" "}
              Partnering with 20+ countries across Asia, Europe, Africa, and the
              Americas, we&apos;re dedicated to creating employment opportunities for
              Kenyan citizens. With over 3000 vacancies monthly, we offer
              diverse job options, fostering career growth and economic
              prosperity.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-slate-800 text-gray-100 px-5 md:px-20 py-10 my-7 mx-2 md:mx-10 rounded-xl">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
          <img src="/images/prezo.jpg" className="h-72 md:h-96 rounded-xl" alt=""  />
          <div className="">
            <FaQuoteLeft size={76} />
            <p className="text-lg font-bold ">
              We want to get at least one million export from Kenya. We must be
              intentional and deliberate in creating job opportunities for
              Kenyans so that we can improve their incomes and drive our
              progress.
            </p>
            <p className="pt-5">
              <span className="font-bold text-gray-400">H.E Willian Ruto</span>
              -President of Kenya
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="bg-slate-800 text-gray-300 mx-2 md:mx-10 my-10 rounded-xl px-5 py-10 md:px-20 ">
        <h2 className="text-center font-bold text-gray-100 text-xl md:text-2xl my-5">Our Services</h2>
        <div className="flex flex-wrap gap-3">
          <div className="md:w-1/3 p-5 hover:bg-slate-700 transition duration-500 ease-in-out  md:mx-auto border border-gray-600 rounded-xl ">
            <ul className=" space-y-2">
              <li className="text-gray-100 font-semibold">
                Job Matching and Placement:
              </li>
            </ul>
            <p className="">
              Connects skilled Kenyan workers with international job
              opportunities that match their qualifications.
            </p>
          </div>
          <div className="md:w-1/3 hover:bg-slate-700 transition duration-500 ease-in-out  p-5 md:mx-auto border border-gray-600 rounded-xl">
            <ul className="space-y-2">
              <li className="text-gray-100 font-semibold">
                Pre-Departure Training and Orientation:
              </li>
            </ul>
            <p>
              Provides cultural orientation, language training, and information
              on labor laws of the destination country.
            </p>
          </div>
          <div className="md:w-1/3 hover:bg-slate-700 transition duration-500 ease-in-out  p-5 md:mx-auto border  border-gray-600 rounded-xl">
            <ul className="space-y-2">
              <li className="text-gray-100 font-semibold">
                Legal and Documentation Assistance:
              </li>
            </ul>
            <p>
              Assists with visa applications, work permits, and other necessary
              legal documentation for overseas employment.
            </p>
          </div>
          <div className="md:w-1/3 hover:bg-slate-700 transition duration-500 ease-in-out p-5 md:mx-auto border border-gray-600 rounded-xl">
            <ul className="space-y-2">
              <li className="text-gray-100 font-semibold">
                Worker Welfare and Support Services:
              </li>
            </ul>
            <p>
              Offers ongoing support to Kenyan workers abroad, including
              emergency assistance, counseling, and well-being checks.
            </p>
          </div>
          <div className="md:w-1/3 hover:bg-slate-700 transition duration-500 ease-in-out p-5 md:mx-auto border border-gray-600 rounded-xl">
            <ul className="space-y-2">
              <li className="text-gray-100 font-semibold">
                Feedback and Grievance Readressal:
              </li>
            </ul>
            <p>
              Facilitates a platform for workers to provide feedback on their
              employment experience and seek help in resolving any grievances.
            </p>
          </div>
        </div>
      </section>
        
        {/* Our contracts */}
      <section className=" h-[60vh] md:h-[70vh] bg-slate-200 relative pt-6 md:pt-14">
        <img src="/images/continents.jpeg" className="w-full object-cover h-full absolute top-0 left-0" alt="" />
          <div className="overlay bg-black opacity-80 absolute top-0 left-0 w-full h-full"></div>
          <div className="relative text-white">
            <h2 className="text-xl font-bold md:text-2xl text-center py-5">Contracts</h2>
            {/* px-8 sm:px-16 md:px-20 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                  <div className="space-y-1 md:space-y-3">
                      <h1 className="text-lg font-bold mb-0 md:mb-7">America</h1>
                      <p>Canada</p>
                      <p>Brazil</p>
                      <p>Mexico</p>
                      <p>USA</p>
                  </div>
                  <div className="space-y-1 md:space-y-3">
                      <h1 className="text-lg font-bold mb-0 md:mb-7">America</h1>
                      <p>Canada</p>
                      <p>Brazil</p>
                      <p>Mexico</p>
                      <p>USA</p>
                  </div>
                  <div className="space-y-1 md:space-y-3">
                      <h1 className="text-lg font-bold mb-0 md:mb-7">America</h1>
                      <p>Canada</p>
                      <p>Brazil</p>
                      <p>Mexico</p>
                      <p>USA</p>
                  </div>
                  <div className="space-y-1 md:space-y-3">
                      <h1 className="text-lg font-bold mb-0 md:mb-7">America</h1>
                      <p>Canada</p>
                      <p>Brazil</p>
                      <p>Mexico</p>
                      <p>USA</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Success rate */}
      <section className=" bg-slate-200 relative py-10 my-10 ">
        <img src="/images/tragectory.png" className="w-full object-cover h-full absolute top-0 left-0" alt="" />
          <div className="overlay bg-black opacity-90 absolute top-0 left-0 w-full h-full"></div>
          <div className="relative text-white">
            {/* <h2 className="text-lg md:text-2xl text-center py-5">Annual labor export success in Kenya</h2> */}
          <SuccesfulDeproyment/>
          </div>
      </section>

    </main>
  );
}
