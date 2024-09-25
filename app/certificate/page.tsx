"use client";
import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import { FloatingLabel } from "flowbite-react";
import ContactBar from "../components/contact-bar";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Certificate() {
  const [isViewed, setIsHidden] = useState(false);

  // Function to toggle the state of the enquiry form
  const toggleForm = () => {
    setIsHidden(!isViewed);
  };

  return (
    <main className="bg-white">
      <ContactBar />
      <CustomNavbar />
      <div className="w-full lg:h-36 h-28 relative overflow-hidden">
        <img
          src="/img/banner-img.png"
          alt="img"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="bg-gray-950 opacity-50 w-full h-full absolute z-40"></div>
        <div className="w-full absolute z-40 lg:left-[6.5rem] left-6 lg:bottom-14 bottom-10">
          <h2 className="lg:text-xl text-xs font-medium text-white ">
            Certificate Verification
          </h2>
          <span>
            <Link href="/" className="text-xs  text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white text-xs">
              {" "}
              Certificate Verification
            </span>
          </span>
        </div>
      </div>

      <section className="w-full flex justify-center px-6 lg:px-0 flex-col items-center lg:mt-28 mt-10 pb-10">
        <div className="lg:w-[1090px] flex flex-col lg:flex-row gap-6 justify-between items-start mb-28">
          <div
            className={`lg:w-2/3 ${
              isViewed ? "hidden" : "blcok"
            } w-full  flex-col"`}
          >
            <h2 className="text-lg font-medium text-gray-800">Welcome</h2>
            <p className="text-[15px] text-gray-600 leading-6 mt-2">
              Please complete the fields below, all information can be found on
              the delegate{"’"}s certificate and must be entered exactly as
              written.
            </p>
            <p className="text-[15px] text-gray-600 leading-6 mt-4">
              Alternatively, you can scan the QR code to verify the certificate.
            </p>
            <p className="text-sm italic mt-7 mb-3 text-gray-700">
              All fields are mandatory(*). Text fields are case sensitive.
            </p>

            <form action="">
              <div className="flex flex-col gap-6 text-gray-700 lg:w-3/4 w-full mt-2">
                <FloatingLabel
                  variant="standard"
                  label="Candidate’s Name as Shown on Certificate*"
                  color="success"
                  className="bg-transparent"
                />
                <FloatingLabel
                  variant="standard"
                  label="Certificate Number*"
                  color="success"
                  className="bg-transparent"
                />
              </div>
            </form>

            <button
              onClick={toggleForm}
              className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-10 hover:bg-[#bb1f11]"
            >
              Verify
            </button>
          </div>
          <div
            className={`lg:w-2/3 ${
              isViewed ? "block" : "hidden"
            } w-full flex-col"`}
          >
            <p className="text-[15px] text-green-700 font-semibold leading-6 mt-2">
              Congratulations!! This Certificate is issued by us!
            </p>
            <p className="text-[15px] text-gray-600 leading-6 mt-2">
              Please find certificate details below:
            </p>
            <div className="block mt-7">
              <p className="text-sm italic font-medium text-gray-700">
                Recipient Name
              </p>
              <p className="text-lg  font-light  text-gray-700">Jude Ighalo</p>
            </div>
            <div className="block mt-7">
              <p className="text-sm italic font-medium text-gray-700">
                Certificate Number
              </p>
              <p className="text-lg  font-light  text-gray-700">
                Pro-2300-322424rf
              </p>
            </div>
            <div className="block mt-7">
              <p className="text-sm italic font-medium text-gray-700">
                Issued Date
              </p>
              <p className="text-lg  font-light  text-gray-700">
                23rd October 2024
              </p>
            </div>

            <button
              onClick={toggleForm}
              className="text-sm w-fit py-3 px-5 bg-transparent border text-gray-700 border-gray-500 mt-10 hover:text-white hover:bg-[#bb1f11]"
            >
              Back
            </button>
          </div>
          <div className="w-[16rem] px-10 py-12 bg-[#E67D1F] text-white hidden lg:flex flex-col items-start justify-center text-left">
            <p className="text-xs mb-2">Training</p>
            <p className="text-3xl ">
              Certificate Verification{" "}
              <span>
                {" "}
                <span className="mt-10 w-fit">
                  <span className="inline-block bg-white rounded-md w-[30px] h-[5px] p-0 mb-1 ms-2">
                    {" "}
                  </span>
                </span>
              </span>{" "}
            </p>
          </div>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
