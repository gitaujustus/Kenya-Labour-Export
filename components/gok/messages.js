"use client";
import React from "react";

const Messages = ({ message:user, handleDelete }) => {
    const handleReplyClick = (email, username) => {
    
        const emailSubject = `Re: Regarding the message you sent on Innovation-UEAB`;
        const emailBody = `Hi ${username},\n\n`;
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
      };

  const createdAtDate = new Date();

  return (
    <div className="flex items-start justify-center gap-2.5 bg-white ">
      <div className="flex flex-col gap-1 w-full max-w-[90%] md:max-w-[50%] mt-7">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900">
            {user.username}
          </span>
          <span className="text-sm font-normal text-gray-500">
            {`${createdAtDate.toLocaleDateString("en-US", {
              weekday: "long",
            })} ${createdAtDate.getDate()} ${createdAtDate.toLocaleDateString(
              "en-US",
              { month: "short" }
            )} ${createdAtDate.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}`}
          </span>
        </div>
        <div className="flex flex-col leading-1.5 p-4 border-gray-200 mb-2 bg-gray-100 rounded-e-xl rounded-es-xl">
          <p className="text-sm font-normal text-gray-900">{user.message}</p>
          <div className="flex justify-between mt-2">
            <span onClick={()=>handleReplyClick(user.email, user.username)} className="text-sm font-semibold cursor-pointer text-gray-900 border border-green-600 px-2 rounded-md">
              Reply
            </span>
            <span onClick={()=>{handleDelete(user.id)}} className="text-sm cursor-pointer font-semibold text-gray-900 border border-red-500 rounded-md px-2">
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
