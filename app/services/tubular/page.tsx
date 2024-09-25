"use client";
import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import ContactBar from "@/app/components/contact-bar";

import Link from "next/link";

export default function Tubular() {
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
            <Link href="/" className="text-xs text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white text-xs">
              {" "}
              Tubular Inspection Services
            </span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28 ">
        <div className="lg:w-[1080px] lg:pt-14 flex flex-col lg:flex-row items-start justify-between lg:mt-12 mt-12 px-6 lg:px-0">
          <div className="flex flex-col lg:w-[60%] w-full">
            <h2 className="lg:text-xl font-medium uppercase text-gray-700">
              TUBULAR INSPECTION SERVICES
            </h2>
            <div className="text-gray-700 mt-4 text-sm lg:text-base">
              Our team is trained and certified in the most precise inspection
              techniques in the industry. We perform inspections compliant with
              API, DS-1, NS-2 and other industry standard requirements. Our
              tubular inspection services include:{" "}
            </div>
            <ul className="text-gray-700 list-disc ms-5 mt-2 text-sm lg:text-base">
              <li>Visual inspection of body & threads </li>
              <li>Thread cleaning & dope application</li>
              <li>UT wall thickness measurements & dimensional inspection</li>
              <li>MPI to identify cracks & other defects</li>
              <li>Hardness testing</li>
              <li>Internal inspection of upsets {"–"} MPI</li>
              <li>Tool joint inspections {"–"} VT & dimensional</li>
              <li>Drifting assessment</li>
              <li>Pad eye inspection {"–"} MPI</li>
              <li>Internal and External Cleaning.</li>
              <li>Internal and External Coating.</li>
              <li>Tallying</li>
              <li>Numbering</li>
            </ul>
          </div>
          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/tubular-photo1.jpg"
              alt=""
              className="w-64 h-64 object-cover absolute mt-12 border"
            />
          </div>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
