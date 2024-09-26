"use client";
import CustomFooter from "@/app/components/footer";
import CustomNavbar from "@/app/components/navbar";
import ContactBar from "@/app/components/contact-bar";

import Link from "next/link";

export default function Fabrication() {
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
            <Link href="/" className="lg:text-xs text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white lg:text-xs"> Fabrication</span>
          </span>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center bg-white pb-28 ">
        <div className="py-16 lg:w-[1080px] flex-col lg:flex-row flex items-start gap-12">
          <div className="flex flex-col lg:w-[60%] px-6 lg:px-0">
            <h2 className="lg:text-xl font-medium uppercase text-gray-700">
              Fabrication
            </h2>
            <div className="text-gray-700 mt-4">
              Our team expertise in welding and fabrication ensures precision
              and reliability, crafting custom solutions to meet clients&lsquo;
              needs, including sectional replacements.
            </div>
          </div>
          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/fabrication-pro.jpg"
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
