"use client";
import React from "react";
import { CgAsterisk } from "react-icons/cg";
import z from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AgencySignUpSchema, AgencySignUpSchemaType } from "@/lib/types";

function Agency() {
   const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AgencySignUpSchemaType>({
    resolver: zodResolver(AgencySignUpSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Logic for submitting data to the server

    
  };

  
  return (
    <div className="min-h-[100vh] py-10 bg-slate-50 flex items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-blue-700 px-5 md:px-10 py-8 rounded-lg">
        <h1 className=" text-lg md:text-xl lg:text-2xl flex justify-between text-gray-700">
          <p>Register</p>
          <p>Foreign Agency</p>
        </h1>
        <div className="mt-5">
          <label htmlFor="country" className="flex gap-2">
            Country{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
          {...register("country")}
            type="text"
            className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="code" className="flex gap-2">
            ISO Code{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("iso")}
            type="text"
            className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
          />
          {errors.iso && (
            <p className="text-red-500 text-sm">{errors.iso.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="contractID" className="flex gap-2">
            Contract ID
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("contractID")}
            type="text"
            placeholder="ID issued after sucessful contract agreement"
            className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
          />
          {errors.contractID && (
            <p className="text-red-500 text-sm">{errors.contractID.message?.toString()}</p>
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
            className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message?.toString()}</p>
          )}

        </div>

        <div className="my-5">
          <label htmlFor="confirmPassword" className="flex gap-2">
            Confirm Password{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message?.toString()}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded  float-right"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Agency;
