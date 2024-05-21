"use client";
import React, { useState } from "react";
import createCitizenAccount from "@/app/actions/createCitizenAccount";
import { CgAsterisk } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CitizemSigninSchemaType, CizitenSigninSchema } from "@/lib/types";
function CitizenLogin() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CitizemSigninSchemaType>({
    resolver: zodResolver(CizitenSigninSchema),
  });


  const onSubmit = async (data: CitizemSigninSchemaType) => {
    const { nationalID, password } = data;
  
  }
 

  return (
    <div className="min-h-[90vh]  bg-slate-50 flex ">
      <div className="flex items-center w-full md:w-[50vw] ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[95vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg"
        >
          <h1 className="text-2xl flex justify-between text-gray-700">
            <p>Login</p>
            <p>Citizen</p>
          </h1>

          <div className="mt-5">
            <label htmlFor="nationalID" className="flex gap-2">
              ID Number{" "}
              <span>
                <CgAsterisk color="red" size={12} />
              </span>
            </label>
            <input
              {...register("nationalID")}
              type="text"
              className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
            />
            {errors.nationalID && (
              <p className="text-red-500">
                {errors.nationalID.message?.toString()}
              </p>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="password" className="flex gap-2">
              Password{" "}
              <span>
                <CgAsterisk color="red" size={12} />
              </span>
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
            />
            {errors.password && (
              <p className="text-red-500">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right w-full"
          >
            Login
          </button>

        </form>
      </div>
      <div className="w-[50vw] bg-slate-500 hidden md:block">
        <img
          src="/images/GRADUATES.jpeg"
          alt="Graduates"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CitizenLogin;
