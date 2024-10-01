"use client";

import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-white">
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
            <span className="text-white text-xs"> Services</span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28">
        <div className="lg:w-[1080px] lg:pt-14 flex flex-col lg:flex-row items-start justify-between lg:mt-12 mt-8 px-6 lg:px-0">
          <div className="flex flex-col lg:w-[60%] w-full  lg:px-0">
            <h2 className="text-xl font-medium uppercase text-gray-700">
              Our Services
            </h2>
            <div className="text-gray-700 mt-4">
              Pro-Inspect Limited offers a comprehensive range of services
              including:{" "}
            </div>
            <ul className="text-gray-700 list-disc  mt-4 flex flex-col gap-3">
              <Link
                href="/services/ndt"
                className="text-blue-600 font-semibold"
              >
                NDT/Inspection Services
              </Link>
              <Link
                href="/services/tubular"
                className="text-blue-600 font-semibold"
              >
                Tubular Inspection Services
              </Link>
              <Link
                href="/services/pressure-testing"
                className="text-blue-600 font-semibold"
              >
                Pressure Testing Services
              </Link>
              <Link
                href="/services/fabrication"
                className="text-blue-600 font-semibold"
              >
                Welding & Fabrication Services
              </Link>
              <Link
                href="/services/training"
                className="text-blue-600 font-semibold"
              >
                Training Services
              </Link>
            </ul>
          </div>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
