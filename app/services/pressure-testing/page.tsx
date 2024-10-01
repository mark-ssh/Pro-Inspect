"use client";
import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import ContactBar from "@/app/components/contact-bar";

import Link from "next/link";

export default function PressureTesting() {
  return (
    <main className="bg-white">
      <ContactBar />
      <CustomNavbar />
      <div className="w-full lg:h-36 h-48 relative overflow-hidden">
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
            <Link href="/" className="lg:text-xs text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white lg:text-xs">
              {" "}
              Pressure Testing Services
            </span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28 ">
        <div className="py-16 lg:w-[1080px] flex-col lg:flex-row flex items-start gap-12">
          <div className="flex flex-col w-[60%]">
            <h2 className="text-xl font-medium uppercase text-gray-700">
              Pressure Testing Services
            </h2>
            <div className="text-gray-700 mt-4">Our service include: </div>
            <ul className="text-gray-700 list-disc ms-5 mt-2">
              <li>Hydrostatic Testing </li>
              <li>Pneumatic Testing</li>
              <li>Pressure Relief Valve (PRV) Testing</li>
              <li>Leak Testing</li>
            </ul>
            <p className="text-gray-700 list-disc mt-8">
              Our team are skilled in performing pressure testing, guaranteeing
              the reliability and safety of your pressure vessels, pipelines and
              systems.
            </p>
          </div>
          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/inspection-photo1.png"
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
