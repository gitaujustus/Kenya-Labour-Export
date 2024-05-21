"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CgAsterisk } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { CitizenSignUpSchema, CitizenSignUpSchemaType } from "@/lib/types";
function Citizen() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CitizenSignUpSchemaType>({
    resolver: zodResolver(CitizenSignUpSchema),
  });


  const onSubmit = (data: CitizenSignUpSchemaType) => {
    console.log(data);
    const {
      nationalID,
      fullName,
      address,
      phone,
      email,
      password,
    } = data;
  
  };

  return (
    <div className="min-h-[100vh] py-10 bg-slate-50 flex items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[95vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] mx-4 sm:mx-auto  text-gray-800 bg-white shadow-md border-t-4 border-teal-700 px-5 md:px-10 py-8 rounded-lg"
      >
        <h1 className="text-2xl flex justify-between text-gray-700">
          <p>Register</p>
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
            type="text"
            {...register("nationalID")}
            id="nationalID"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.nationalID &&
           (
              <p className="text-red-500">{errors.nationalID.message?.toString()}</p>
            )}
        </div>

        <div className="my-5">
          <label htmlFor="FullName" className="flex gap-2">
            Full Name as per your ID{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            id="nationalID"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="kra" className="flex gap-2">
            KRA PIN{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("kra")}
            type="text"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.kra && (
            <p className="text-red-500">{errors.kra.message?.toString()}</p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="flex gap-2">
            Email{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("email")}
            type="email"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="address" className="flex gap-2">
            Address{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("address")}
            type="text"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="contact" className="flex gap-2">
            Contact Number{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message?.toString()}</p>
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
            <p className="text-red-500">{errors.password.message?.toString()}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="password" className="flex gap-2">
            Confirm Password{" "}
            <span>
              <CgAsterisk color="red" size={12} />
            </span>
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="border outline-teal-200 px-3 py-2 mt-2 rounded-md w-full focus:outline-teal-700"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">
              {errors.confirmPassword.message?.toString()}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#3d935c] hover:bg-[#48AF6E] text-white  py-2 px-4 rounded  float-right"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Citizen;
