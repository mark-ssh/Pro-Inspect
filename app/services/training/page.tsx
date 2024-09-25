"use client";

import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import ContactBar from "@/app/components/contact-bar";
import Link from "next/link";

import { useEffect, useState } from "react";

import { FloatingLabel } from "flowbite-react";

export default function Training() {
  // State to track the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const [isViewed, setIsHidden] = useState(false);

  // Function to toggle the state of the mobile menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the state of the enquiry form
  const toggleForm = () => {
    setIsHidden(!isViewed);
  };

  return (
    <main className="bg-white relative">
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
            Services
          </h2>
          <span>
            <Link href="/" className="text-xs  text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white text-xs"> Training Services</span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28 ">
        <div className="lg:w-[1080px] lg:pt-14 flex flex-col lg:flex-row items-start justify-between lg:mt-12 mt-8 px-6 lg:px-0">
          <div className="flex flex-col lg:w-[60%] w-full  lg:px-0">
            <h2 className="lg:text-xl font-medium uppercase text-gray-700">
              Training Services
            </h2>
            <div className="text-gray-700 mt-4 text-sm lg:text-base">
              Our training programs are designed to equip professionals with the
              skills and knowledge necessary to thrive in the ever-evolving
              industries of NDT, API standards and Piping Engineering Design.
            </div>
            <p className="text-gray-700 font-medium text-sm lg:text-base list-disc mt-8">
              Non-Destructive Testing (NDT) Training
            </p>
            <div className="text-gray-700 mt-4 text-sm lg:text-base">
              Our Non-Destructive Testing (NDT) training is based on the ASNT
              Recommended Practice No. SNT-TC-1A. Each NDT method consists of
              theoretical and practical lessons with strict adherence to best
              practices, reference guidelines and standards. We provide
              comprehensive training in various NDT techniques, including:
            </div>
            <ul className="text-gray-700 list-disc ms-5 mt-2 text-sm lg:text-base">
              <li>Visual Testing (VT) </li>
              <li>Magnetic Testing (MT) </li>
              <li>Penetrant Testing (PT)</li>
              <li>Radiographic Film Interpretation (RFI)</li>
              <li>Ultrasonic Testing (UT)</li>
            </ul>
            <button
              className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-6 hover:bg-[#bb1f11]"
              onClick={toggleForm}
            >
              Click to Enroll
            </button>

            <p className="text-gray-700 font-medium list-disc mt-20 text-sm lg:text-base">
              American Petroleum Institute (API) Training
            </p>
            <div className="text-gray-700 mt-4 text-sm lg:text-base">
              Our API trainings are designed to prepare professionals in oil and
              gas industry to sit and pass the API Individual Certification
              Program (ICP). Our preparatory courses cover the following API
              standards:
            </div>
            <ul className="text-gray-700 list-disc ms-5 mt-2 text-sm lg:text-base">
              <li>API 510 (Pressure Vessel Inspector) </li>
              <li>API 570 (Piping Inspector) </li>
              <li>API 653 (Aboveground Storage Tank Inspector)</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm lg:text-base">
              Our instructors are experienced with in-depth knowledge of API
              standards and industry best practices.
            </p>
            <button
              onClick={toggleForm}
              className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-6 hover:bg-[#bb1f11]"
            >
              Click to Enroll
            </button>

            <p className="text-gray-700 font-medium list-disc mt-20 text-sm lg:text-base">
              Piping Engineering Design
            </p>
            <div className="text-gray-700 mt-4 text-sm lg:text-base">
              We provide a rigorous training in the fundamentals of piping
              design, layout, and engineering and helping students achieve
              software proficiency in industry standard tools such as AutoCAD
              P&ID, AutoCAD Plant 3D and AVEVA E3D.
            </div>
            <button
              onClick={toggleForm}
              className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-6 hover:bg-[#bb1f11]"
            >
              Click to Enroll
            </button>
          </div>

          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/training-photo5.jpg"
              alt=""
              className="w-64 h-64 object-cover absolute mt-12"
            />
          </div>
        </div>
      </section>

      <CustomFooter />

      {/* Enquiry form */}
      <div
        className={`w-full h-full fixed top-0 z-40 ${
          isViewed ? "flex" : "hidden"
        } `}
      >
        <div className="absolute w-full h-full bg-[#000000b5] flex justify-center">
          <div className="lg:w-[700px] h-fit bg-white mt-24 mx-6 lg:mx-0">
            <div className="lg:px-10 px-6 py-6 bg-gray-200 text-gray-800 lg:text-lg font-medium">
              Enquiry form
            </div>
            <p className="text-sm italic mt-7 mb-3 px-10 text-gray-700">
              Please fill the required informations and submit. Label marked (*)
              are compulsory fields
            </p>
            <form action="">
              <div className="flex flex-col lg:gap-3 gap-2 text-gray-700 px-10 w-full mt-7">
                <FloatingLabel
                  variant="standard"
                  label="Name*"
                  color="success"
                  className="bg-transparent"
                />
                <FloatingLabel
                  variant="standard"
                  label="Email*"
                  color="success"
                  className="bg-transparent"
                />

                {/* Dropdown */}
                <div className="relative inline-block text-left mb-2 mt-1">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full justify-between gap-x-1.5 rounded-0 bg-white border-b-2 border-gray-500 py-2 text-sm font-normal text-gray-600 shadow-sm hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      Select Training*
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`absolute ${
                      isOpen ? "flex" : "hidden"
                    }  left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        Non-Destructive Testing (NDT) Training
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                        role="menuitem"
                        id="menu-item-1"
                      >
                        American Petroleum Institute (API) Training
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                        role="menuitem"
                        id="menu-item-2"
                      >
                        Piping Engineering Design
                      </a>
                    </div>
                  </div>
                </div>

                <FloatingLabel
                  variant="standard"
                  label="Enter Remark"
                  color="success"
                  className="bg-transparent mb-12"
                />
              </div>
            </form>
            <div className="flex gap-3 items-center px-10 mb-10">
              <button className="py-3 px-6 bg-blue-700 hover:bg-blue-800 text-white text-sm">
                Send
              </button>
              <button
                className="text-sm text-gray-800 px-6 py-3 bg-transparent hover:bg-slate-400"
                onClick={toggleForm}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
