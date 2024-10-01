"use client";

import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    <div className="overflow-hidden lg:relative lg:h-[90vh] h-60 w-full object-cover -mt-2">
      <Carousel>
        <div className="flex overflow-hidden w-full h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/img/TEE-2.jpg"
            className="block absolute w-full h-full object-cover animate-slow-scale"
            alt="..."
          />
          <div className="w-full h-full absolute z-[1500] flex flex-col items-center justify-start lg:mt-80 mt-40">
            <h2 className="lg:text-5xl text-lg font-medium text-white lg:mb-6 mb-2 ">
              Quality Assured, Excellence Delivered
            </h2>
            <p className="lg:text-[17px] text-sm font-normal text-gray-300 lg:w-[40%] text-center">
              We deliver top-tier inspections and trainings, ensuring quality
              drives our excellence
            </p>
          </div>
          {/* <!-- Overlay --> */}
          <div className="bg-gray-950 opacity-25 w-full h-full absolute z-40"></div>
        </div>
        <div className="flex overflow-hidden h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/img/tubular-photo2.jpg"
            className="block absolute w-full  h-full object-cover animate-slow-scale "
            alt="..."
          />
          <div className="w-full h-full absolute z-[1500] flex flex-col items-center justify-start lg:mt-80 mt-40">
            <h2 className="lg:text-5xl text-lg font-medium text-white lg:mb-6 mb-2">
              Trustworthy
            </h2>
            <p className="lg:text-[17px] text-sm font-normal text-gray-300 lg:w-[40%] text-center">
              At Pro-Inspect, we provide the best to meet international
              standard.
            </p>
          </div>
          {/* <!-- Overlay --> */}
          <div className="bg-gray-950 opacity-25 w-full h-full absolute z-40"></div>
        </div>
        <div className="flex overflow-hidden h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="/img/tubular-photo1.png"
            className="block absolute  w-full h-full -translate-x-1/2 -translate-y-1/2 animate-slow-scale object-cover"
            alt="..."
          />
          <div className="w-full h-full absolute z-[1500] flex flex-col items-center justify-start lg:mt-80 mt-40">
            <h2 className="lg:text-5xl text-lg font-medium text-white lg:mb-6 mb-2">
              Our Clients are our Priority
            </h2>
            <p className="lg:text-[17px] text-sm font-normal text-gray-300 lg:w-[40%] text-center">
              At Pro-Inspect, we provide the best to meet international
              standard.
            </p>
          </div>
          {/* <!-- Overlay --> */}
          <div className="bg-gray-950 opacity-30 w-full h-full absolute z-40"></div>
        </div>
      </Carousel>
    </div>
  );
}
