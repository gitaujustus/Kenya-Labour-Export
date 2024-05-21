import React, { useState } from 'react';
import createCitizenAccount from '@/app/actions/createCitizenAccount';
import { CgAsterisk } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyLoginSchema, CompanyLoginSchemaType } from '@/lib/types';



function CompanyLogin() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CompanyLoginSchemaType>({
    resolver: zodResolver(CompanyLoginSchema),
  });

  const onSubmit = async (data: CompanyLoginSchemaType) => {
   // Logic to handle form submission
    
  };

  return (
    <div className='min-h-[90vh] py-10 bg-slate-50 flex items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] mx-4 sm:mx-auto text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'
      >
        <h1 className='text-2xl flex justify-between text-gray-700'>
          <p>Login</p>
          <p>Company</p>
        </h1>

        {/* {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )} */}

        <div className='mt-5'>
          <label htmlFor="companyName" className='flex gap-2'>
            Company Name <span><CgAsterisk color='red' size={12} /></span>
          </label>
          <input
            {...register("companyName")}
            type="text"
            id="companyName"
            className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700'
          />
          {errors.companyName && (
            <p className="text-red-500">
              {errors.companyName.message?.toString()}
            </p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="password" className='flex gap-2'>
            Password <span><CgAsterisk color='red' size={12} /></span>
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
          disabled={isSubmitting}
          className='bg-[#3d935c] hover:bg-[#48AF6E] text-white py-2 px-4 rounded float-right w-full'
        >
          {isSubmitting ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default CompanyLogin;
