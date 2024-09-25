"use client";

import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import ContactBar from "@/app/components/contact-bar";
import Link from "next/link";

export default function NdtInspections() {
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
          <h2 className="lg:text-xl text-sm font-medium text-white ">
            Services
          </h2>
          <span>
            <Link
              href="/"
              className="lg:text-xs text-xs text-[#FDAE50] cursor-pointer"
            >
              Home {">"}
            </Link>
            <span className="text-white text-xs"> NDT/Inspection Services</span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28">
        <div className="lg:w-[1080px] lg:pt-14 flex flex-col lg:flex-row items-start justify-between lg:mt-12 mt-8 px-6 lg:px-0">
          <div className="flex flex-col lg:w-[60%] w-full  lg:px-0">
            <h2 className="text-xl font-medium uppercase text-gray-700">
              NDT/Inspection Services
            </h2>
            <div className="text-gray-700 mt-4">
              Pro-Inspect Limited offers a comprehensive range of
              Non-Destructive Testing services including:{" "}
            </div>
            <ul className="text-gray-700 list-disc ms-5 mt-2">
              <li>Visual Inspection</li>
              <li>Magnetic Particle Inspection</li>
              <li>Ultrasonic Testing</li>
              <li>Dye Penetrant Testing</li>
            </ul>
            <p className="text-gray-700 list-disc mt-4">
              Our certified NDT technicians use the latest equipment and
              techniques to identify defects, flaws, and other potential issues
              in materials and structures.
            </p>
          </div>
          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/inspection-photo1.jpg"
              alt=""
              className="w-64 h-64 object-cover absolute mt-12"
            />
          </div>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
