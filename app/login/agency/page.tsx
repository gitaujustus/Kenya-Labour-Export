'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CgAsterisk } from 'react-icons/cg';
import { AgencyLoginSchema, AgencyLoginSchemaType } from '@/lib/types';

function AgencyLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AgencyLoginSchemaType>({
    resolver: zodResolver(AgencyLoginSchema),
  });

  const onSubmit = async (data: AgencyLoginSchemaType) => {
    // Logic to handle form submission
    console.log(data);
  };

  return (
    <div className='min-h-[90vh] py-10 bg-slate-50 flex items-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[30vw] mx-4 sm:mx-auto text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg'
      >
        <h1 className='text-2xl flex justify-between text-gray-700'>
          <p>Login</p>
          <p>Country</p>
        </h1>

        <div className='mt-5'>
          <label htmlFor='countryName' className='flex gap-2'>
            Country Name <CgAsterisk color='red' size={12} />
          </label>
          <input
            {...register('countryName')}
            type='text'
            id='countryName'
            className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700'
          />
          {errors.countryName && (
            <p className='text-red-500'>
              {errors.countryName.message?.toString()}
            </p>
          )}
        </div>

        <div className='my-5'>
          <label htmlFor='password' className='flex gap-2'>
            Password <CgAsterisk color='red' size={12} />
          </label>
          <input
            {...register('password')}
            type='password'
            id='password'
            className='border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700'
          />
          {errors.password && (
            <p className='text-red-500'>
              {errors.password.message?.toString()}
            </p>
          )}
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-[#3d935c] hover:bg-[#48AF6E] text-white py-2 px-4 rounded float-right w-full'
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default AgencyLogin;
