  'use client'
  import React from 'react';
  import { CgAsterisk } from "react-icons/cg";
  import { useForm } from 'react-hook-form';
  import { zodResolver } from '@hookform/resolvers/zod';
  import { CompanySignUpSchema, CompanySignUpType } from '@/lib/types';
  function Company() {
    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<CompanySignUpType>({
      resolver: zodResolver(CompanySignUpSchema),
    });

  const onSubmit = (data:any) => {
    console.log(data)
    // Logic for submitting data to the server
    // call server actions

  } 

    return (
      <div className='min-h-[100vh] py-10 bg-slate-50 flex items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'>
          <h1 className='text-2xl flex justify-between text-gray-700'>
            <p>Register</p>
            <p>Company</p>
          </h1>
          <div className='mt-5'>
            <label htmlFor="nationalID" className='flex gap-2'>Company Name <span><CgAsterisk color='red' size={12} /></span></label>
            <input 
            {...register("companyName")}
            type="text" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
            {errors.companyName && <p className='text-red-500'>{errors.companyName.message?.toString()}</p>}
          </div>

          <div className='my-5'>
            <label htmlFor="country" className='flex gap-2'>Country <span><CgAsterisk color='red' size={12} /></span></label>
            <select 
            {...register("country")}
            className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500'>
              <option value="">Select Country</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="arabia">Arabia</option>
              <option value="nethelands">Nethelands</option>
            </select>
            {errors.country && <p className='text-red-500'>{errors.country.message?.toString()}</p>}
          </div>

          <div className='my-5'>
            <label htmlFor="companyWebsite" className='flex gap-2'>Company Website <span><CgAsterisk color='red' size={12} /></span></label>
            <input
            {...register("companyWebsite")}
            placeholder='https://'
            type="text" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
            {errors.companyWebsite && <p className='text-red-500'>{errors.companyWebsite.message?.toString()}</p>}
          </div>

          <div className='my-5'>
            <label htmlFor="companyAddress" className='flex gap-2'>Company Address <span><CgAsterisk color='red' size={12} /></span></label>
            <input 
            {...register("companyAddress")}
            type="text" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
            {errors.companyAddress && <p className='text-red-500'>{errors.companyAddress.message?.toString()}</p>}
          </div>

          <div className='my-5'>
            <label htmlFor="email" className='flex gap-2'>Company Email<span><CgAsterisk color='red' size={12} /></span></label>
            <input 
            {...register("companyEmail")}
            type="email" className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
            {errors.companyEmail && <p className='text-red-500'>{errors.companyEmail.message?.toString()}</p>}
          </div>

          <div className='my-5'>
            <label htmlFor="industry" className='flex gap-2'>Industry<span><CgAsterisk color='red' size={12} /></span></label>
            <input 
            {...register("companyIndustry")}
            type="text"  className='border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500' />
            {errors.companyIndustry && <p className='text-red-500'>{errors.companyIndustry.message?.toString()}</p>}
          </div>

          <div className="my-5">
                <label htmlFor="password" className='flex gap-2'>Password <span><CgAsterisk color='red' size={12} /></span></label>
                <input
                  {...register("password")}
                  type="password"
                  className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
                />
                {errors.password && <p className='text-red-500'>{errors.password.message?.toString()}</p>}
          </div>

          <div className="my-5">
                <label htmlFor="confirmPassword" className='flex gap-2'>Confirm Password <span><CgAsterisk color='red' size={12} /></span></label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  className="border outline-blue-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-blue-500"
                />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message?.toString()}</p>}
          </div>
          <button type="submit" className='bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right'>Submit</button>
        </form>
      </div>
    )
  }

  export default Company
