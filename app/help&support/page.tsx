// 'use client'
// import React, { useState } from 'react';

// const HelpAndSupport = () => {
//   const [activeSection, setActiveSection] = useState<'contact' | 'faq'>('contact');

//   const contactInfo = (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
//       <p className="mb-2">Email: support@example.com</p>
//       <p className="mb-2">Phone: +1 (555) 123-4567</p>
//       <p>Address: 123 Main Street, Anytown USA</p>
//     </div>
//   );

//   const faqItems = [
//     {
//       question: 'What is your return policy?',
//       answer: 'We accept returns within 30 days of purchase for a full refund.',
//     },
//     {
//       question: 'How long does shipping take?',
//       answer: 'Standard shipping usually takes 5-7 business days.',
//     },
//     {
//       question: 'Do you offer international shipping?',
//       answer: 'Yes, we offer international shipping to most countries.',
//     },
//   ];

//   const faqSection = (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
//       {faqItems.map((item, index) => (
//         <div key={index} className="mb-4">
//           <h3 className="text-lg font-bold">{item.question}</h3>
//           <p>{item.answer}</p>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-center mb-8">
//         <button
//           className={`mr-4 px-4 py-2 rounded-md ${
//             activeSection === 'contact'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveSection('contact')}
//         >
//           Contact
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md ${
//             activeSection === 'faq'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveSection('faq')}
//         >
//           FAQ
//         </button>
//       </div>
//       {activeSection === 'contact' ? contactInfo : faqSection}
//     </div>
//   );
// };

// export default HelpAndSupport;

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Csx2bvmsgaS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

'use client'
import { useState } from "react";

import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";



export default function Component() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number | null) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  const FAQs = [
    {
      question: "How do I register and apply for job on the KLES platform?",
      answer:
        "To register on KLES, visit our website and click on the Register button. Fill in your personal details, upload the required documents such as your CV/resume, certificates, health status, and language proficiency proof, and submit your registration. You will receive a confirmation email upon successful registration.",
    },
    {
      question: "What types of job opportunities are available through KLES?",
      answer:
        "KLES offers a wide range of job opportunities in various industries, including healthcare, engineering, hospitality, construction, and more. These jobs may range from entry-level positions to skilled professions, catering to different qualifications and experience levels.",
    },
    {
      question: "What is the process for applying to job vacancies listed on KLES?",
      answer:
        "Once registered, you can browse through the job listings on KLES and apply to positions that match your skills and interests. Follow the application instructions provided by each job posting, which may include submitting your CV/resume, cover letter, and additional documents as required.",
    },
    {
      question: "Is there a fee for registering or applying for jobs on KLES?",
      answer:
        "No, there are no registration fees or charges for applying to job vacancies on KLES. Our platform is free for both Kenyan workers and foreign companies looking to connect for labor export opportunities.",
    },
  ];

  return (
    <>
      <main className="mx-auto py-12 md:py-24 lg:py-32 px-5 md:px-10 min-h-screen">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold  sm:text-4xl md:text-5xl">Get in Touch</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <FaPhone className="h-6 w-6 text-gray-500 " />
                <div>
                  <div className="font-medium">Phone</div>
                  <a className="text-gray-500 hover:underline " href="#">
                    +254 729-144-533
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMail className="h-6 w-6 text-gray-500 " />
                <div>
                  <div className="font-medium">Email</div>
                  <a className="text-gray-500 hover:underline " href="#">
                    support@kles.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="h-6 w-6 text-gray-500 " />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <p className="text-gray-500 ">Monday - Friday, 9am - 5pm EST</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {FAQs.map((faq, index) => (
                <div key={index} className="border rounded-md overflow-hidden bg-gray-100 ">
                  <button
                    className="w-full px-4 py-3 font-medium flex justify-between items-center text-left focus:outline-none hover:bg-gray-200 "
                    onClick={() => toggleOpen(index)}
                  >
                    <span>{faq.question}</span>
                    <RiArrowDropDownLine className={`h-5 w-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 text-gray-500 ">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

