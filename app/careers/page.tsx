"use client";
import CustomFooter from "../components/footer";
import CustomNavbar from "../components/navbar";
import ContactBar from "../components/contact-bar";

import Link from "next/link";

export default function Careers() {
  return (
    <>
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
              Careers
            </h2>
            <span>
              <Link href="/" className="text-xs  text-[#FDAE50] cursor-pointer">
                Home {">"}
              </Link>
              <span className="text-white text-xs"> Careers</span>
            </span>
          </div>
        </div>

        <section className="w-full flex justify-center px-6 lg:px-0 flex-col items-center lg:mt-28 mt-10 pb-10">
          <div className="lg:w-[1090px] flex flex-col lg:flex-row gap-6 justify-between items-center mb-28">
            <div className="lg:w-2/3 w-full flex flex-col">
              <h2 className="text-lg font-medium text-gray-800">Our Process</h2>
              <p className="text-[15px] text-gray-600 leading-6 mt-2">
                At Pro-Inspect Limited, we operate an open-door policy with
                employees and believes that its employees are its most valuable
                asset. We encourage innovative and creative contributions from
                employees and with our terms and conditions of employment being
                competitive, our compensation and benefits package are generous.
              </p>
              <p className="text-[15px] text-gray-600 leading-6 mt-4">
                If you are looking for a job in an organization that offers
                rewarding career opportunity, Pro Inspect is the place to be!
              </p>
              <Link
                href=""
                className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-10 hover:bg-[#bb1f11]"
              >
                See Open Positions
              </Link>
            </div>
            <div className="w-[14rem] p-12 bg-[#E67D1F] text-white hidden lg:flex flex-col items-start justify-center text-left">
              <p className="text-xs mb-2">Careers</p>
              <p className="text-3xl ">
                Join Our Team{" "}
                <span>
                  {" "}
                  <span className="mt-10 w-fit">
                    <span className="inline-block bg-white rounded-md w-[32px] h-[5px] p-0 mb-1 ms-2">
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
    </>
  );
}
