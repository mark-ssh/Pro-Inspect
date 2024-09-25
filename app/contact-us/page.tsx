"use client";
import CustomFooter from "../components/footer";
import CustomNavbar from "../components/navbar";
import ContactBar from "../components/contact-bar";

import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="bg-white">
      <ContactBar />
      <CustomNavbar />
      {/* <!-- Banner --> */}
      <div className="w-full lg:h-36 h-28 relative overflow-hidden">
        <img
          src="/img/banner-img.png"
          alt="img"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="bg-gray-950 opacity-50 w-full h-full absolute z-40"></div>
        <div className="w-full absolute z-40 lg:left-[6.5rem] left-6 lg:bottom-14 bottom-10">
          <h2 className="lg:text-xl text-xs font-medium text-white ">
            Contact Us
          </h2>
          <span>
            <Link href="/" className="text-xs  text-[#FDAE50] cursor-pointer">
              Home {">"}
            </Link>
            <span className="text-white text-xs"> Contact Us</span>
          </span>
        </div>
      </div>

      {/* <!-- Contact Us --> */}
      <section className="w-full flex flex-col items-center justify-center bg-white">
        <div className="py-24 lg:w-[1080px] flex flex-col lg:flex-row items-start gap-12 px-6 lg:px-0">
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="text-gray-700 bg-[#F4F0F0] border border-solid border-[#E3E2E2] py-4"
              />
              <input
                type="text"
                placeholder="Your Email*"
                className="text-gray-700 bg-[#F4F0F0] border border-solid border-[#E3E2E2] py-4"
              />
              <input
                type="text"
                placeholder="Your Phone Number*"
                className="text-gray-700 bg-[#F4F0F0] border border-solid border-[#E3E2E2] py-4"
              />
              <input
                type="text"
                placeholder="Subject"
                className="text-gray-700 bg-[#F4F0F0] border border-solid border-[#E3E2E2] py-4"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter message..."
              className="bg-[#F4F0F0] border border-solid border-[#E3E2E2] py-4 mt-6 w-full"
            ></textarea>
            <button className="py-2 px-6 border-0 w-fit bg-[#F29D38] mt-8 hover:text-white transition-all hover:bg-[#d1882f] hover:scale-[1.1]">
              Send Message
            </button>
          </div>
          <div className="flex flex-col gap-7 w-full lg:w-[28%] text-[#383434]">
            <div className="">
              <p className="mb-0 text-[#383434]">
                Visit our office at the location below, contact us through our
                official phone number or send us an email.
              </p>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src="img/PlaceMarker.png"
                alt="img"
                className="w-5 h-5 object-cover"
              />
              <p className="mb-0 text-[#383434] text-[15px]">
                31 Emelu Street, Rumunduru, Port Harcourt, Rivers State, Nigeria
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <img
                src="img/Phone.png"
                alt="img"
                className="w-5 h-5 object-cover"
              />
              <p className="mb-0 text-[#383434] text-[15px]">
                (+234)8068-807-064
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <img
                src="img/Email.png"
                alt="img"
                className="w-5 h-5 object-cover"
              />
              <a
                href="mailto:info@permel.com.ng"
                className="mb-0 text-[#383434] text-[15px]"
              >
                info@pro-inspect.com.ng
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Map --> */}
        <div className="w-full h-1/3 lg:h-[23rem] mt-10">
          <img
            src="img/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
