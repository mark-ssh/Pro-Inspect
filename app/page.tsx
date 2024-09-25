"use client";
import CustomNavbar from "./components/navbar";
import CustomFooter from "./components/footer";
import Link from "next/link";
import { HomeCarousel } from "./components/carousel";
import ContactBar from "./components/contact-bar";
import HomeSlider from "./components/home-slider";

export default function Home() {
  return (
    <main className="bg-white">
      <ContactBar />
      <CustomNavbar style={true} />
      <HomeCarousel />

      {/* <!-- Quicklinks --> */}
      <section className="w-full flex justify-center flex-col items-center lg:-mt-20 mt-6 pb-10">
        <div className="lg:w-[1090px] w-full flex-col lg:flex-row flex px-6 lg:px-0 lg:gap-6 gap-3">
          <div className="lg:w-[370px] lg:h-[240px] w-full relative group overflow-hidden">
            <img
              src="/img/training-photo2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="w-full absolute opacity-0 lg:opacity-100 group-hover:translate-y-2  group-hover:opacity-0 ease-in-out transition-all bottom-0 bg-[#000000ad]  py-4 px-8 flex items-center gap-6">
              <img
                src="/img/training.png"
                alt="training"
                className="w-12 object-contain"
              />
              <p className="text-white font-semibold text-[1rem]">
                Non-Destructive Testing (NDT) Training
              </p>
            </div>
            <div className="lg:hidden  group-hover:flex gap-6 group-hover:animate-slide-down  bg-[#000000ad] h-full w-full py-6 px-8 absolute top-0 border-t-2 border-solid border-orange-500 items-start">
              <img
                src="/img/training.png"
                alt="training"
                className="w-12 object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="text-white font-semibold text-[1rem]">
                  Non-Destructive Testing (NDT) Training
                </p>
                <p className="text-gray-300 text-sm hidden lg:flex">
                  Our Non-Destructive Testing (NDT) training is based on the
                  ASNT Recommended Practice No. SNT-TC-1A. Each NDT method
                </p>
                <Link
                  href="/services/training"
                  className="text-[#E67D1F] text-sm"
                >
                  Read more...{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[370px] lg:h-[240px] w-full relative group overflow-hidden">
            <img
              src="/img/training-photo3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="w-full absolute opacity-0 lg:opacity-100 group-hover:translate-y-2  group-hover:opacity-0 ease-in-out transition-all bottom-0 bg-[#000000ad]  py-4 px-8 flex items-center gap-6">
              <img
                src="/img/training.png"
                alt="training"
                className="w-12 object-contain"
              />
              <p className="text-white font-semibold text-[1rem]">
                American Petroleum Institute (API) Training
              </p>
            </div>
            <div className="lg:hidden  group-hover:flex gap-6 group-hover:animate-slide-down  bg-[#000000ad] h-full w-full py-6 px-8 absolute top-0 border-t-2 border-solid border-orange-500 items-start">
              <img
                src="/img/training.png"
                alt="training"
                className="w-12 object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="text-white font-semibold text-[1rem]">
                  American Petroleum Institute (API) Training
                </p>
                <p className="text-gray-300 text-sm hidden lg:flex">
                  Our API trainings are designed to prepare professionals in oil
                  and gas industry to sit and pass the API Individual
                </p>
                <Link
                  href="/services/training"
                  className="text-[#E67D1F] text-sm"
                >
                  Read more...{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-[370px] lg:h-[240px] w-full relative group overflow-hidden">
            <img
              src="/img/verified.png"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="w-full absolute opacity-0 lg:opacity-100 group-hover:translate-y-2  group-hover:opacity-0 ease-in-out transition-all bottom-0 bg-[#000000ad]  py-4 px-8 flex items-center gap-6">
              <img
                src="/img/certificate.png"
                alt="training"
                className="w-12 object-contain"
              />
              <p className="text-white font-semibold text-[1rem]">
                Certificate Verification
              </p>
            </div>
            <div className="lg:hidden  group-hover:flex gap-6 group-hover:animate-slide-down  bg-[#000000ad] h-full w-full py-6 px-8 absolute top-0 border-t-2 border-solid border-orange-500 items-start">
              <img
                src="/img/certificate.png"
                alt="training"
                className="w-12 object-contain"
              />
              <div className="flex flex-col gap-3">
                <p className="text-white font-semibold text-[1rem]">
                  Certificate Verification
                </p>
                <p className="text-gray-300 text-sm hidden lg:flex">
                  Verify certificates issued by us thereby proving its
                  athenticity.
                </p>
                <Link href="/certificate" className="text-[#E67D1F] text-sm">
                  Get Started...{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-fit">
          <span className="inline-block bg-[#FE5A0E] rounded-md w-[28px] h-[5px] p-0">
            {" "}
          </span>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full flex justify-center px-6 lg:px-0 flex-col items-center lg:mt-28 mt-10 pb-10">
        <div className="lg:w-[1090px] flex flex-col lg:flex-row gap-6 justify-between items-center mb-28">
          <div className="lg:w-2/3 w-full flex flex-col">
            <h2 className="text-lg font-medium text-gray-800">About Us</h2>
            <p className="text-[15px] text-gray-600 leading-6 mt-2">
              At Pro-Inspect Limited, we are a dynamic and innovative company
              dedicated to revolutionizing the way businesses manage their
              assets. With an unwavering commitment to service excellence and a
              fresh perspective on solutions, we are your trusted partner in
              ensuring the safety, reliability, and efficiency of your business
              operations.
            </p>
            <Link
              href="/about-us"
              className="text-sm w-fit py-3 px-5 bg-[#EB3223] mt-10 hover:bg-[#bb1f11]"
            >
              Read More
            </Link>
          </div>
          <div className="w-[35%] hidden lg:flex justify-end">
            <div className="w-64 h-64 bg-[#E67D1F] relative me-12"></div>
            <img
              src="/img/about-us_img.png"
              alt=""
              className="w-64 h-64 object-cover absolute mt-12"
            />
          </div>
        </div>
      </section>

      {/* Why chose us */}
      <section className="w-full">
        <HomeSlider />
      </section>

      {/* Our Clients Seesion */}
      <section className="w-full overflow-hidden lg:mb-20">
        <div className="flex justify-center lg:mt-20  ">
          <p className="lg:text-xl text-sm font-medium mb-4 text-gray-700">
            Some of Our Clients
          </p>
        </div>
        {/* <!-- Slider --> */}
        <div className="flex overflow-hidden whitespace-nowrap gap-2 relative">
          <div className="lg:my-12 flex flex-shrink-0 gap-4 items-center pb-3 animate-clients-slide">
            <img
              src="/img/Agip_logo_PNG.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px]"
            />
            <img
              src="/img/Nigerian_National_Petroleum_Company_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/ng-notore-logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-2"
            />
            <img
              src="/img/total_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px]"
            />
            <img
              src="/img/belema-oil_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-8"
            />
            <img
              src="/img/Saipem_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/lng_gas-logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/yinson.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
          </div>
          <div className="lg:my-12 my-6 flex gap-4 items-center flex-shrink-0 pb-3 animate-clients-slide">
            <img
              src="/img/Agip_logo_PNG.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px]"
            />
            <img
              src="/img/Nigerian_National_Petroleum_Company_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/ng-notore-logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-2"
            />
            <img
              src="/img/total_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px]"
            />
            <img
              src="/img/belema-oil_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-8"
            />
            <img
              src="/img/Saipem_logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/lng_gas-logo.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
            <img
              src="/img/yinson.png"
              alt=""
              className="lg:w-[12rem] w-24 h-24 lg:h-[12rem] object-contain border-s-gray-100 border-solid border-[2px] p-6"
            />
          </div>
          <style>
            {/* .whitespace-nowrap:hover .flex-shrink-0 {
              animation-play-state: paused;
            } */}
          </style>
        </div>
      </section>

      <CustomFooter />
    </main>
  );
}
