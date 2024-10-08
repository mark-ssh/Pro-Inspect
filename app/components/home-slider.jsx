"use client";
import { useState, useRef, useEffect } from "react";

export default function HomeSlider() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="carousel lg:w-[1090px] w-full flex flex-col items-center">
        <h2 className="lg:text-xl font-medium mb-8 text-gray-700">
          Why chose us
        </h2>
        <div className="relative  w-full mb-28">
          {/* Controllers */}
          <div className="flex justify-between absolute w-full h-full items-center ">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 bg-gray-500 text-white rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 lg:px-2 lg:py-6 py-3 px-1 m-0 transition-all ease-in-out duration-300 lg:-ml-12"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-12 lg:w-20 h-6 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 bg-gray-500 text-white rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-10 disabled:cursor-not-allowed z-10 lg:px-2 lg:py-6 py-3 px-1 m-0 transition-all ease-in-out duration-300 lg:-mr-12"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-12 lg:w-20 pl-1 h-6 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>

          <div
            ref={carousel}
            className="carousel-container w-full relative flex gap-2 lg:gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            <div
              // key={index}
              className="carousel-item text-left relative min-w-72 max-w-72 lg:min-w-80  lg:max-w-80 lg:h-64 h-48 snap-start bg-[#D9D9D9]"
            >
              <div className="flex flex-col gap-4 lg:py-10 lg:px-10 py-4 px-4 text-left absolute top-0">
                <p className="lg:text-lg  font-medium text-gray-900">
                  Unyielding Dedication
                </p>
                <p className="text-gray-600 text-sm">
                  Pro-Inspect Limited is committed to providing you with
                  top-tier services. Our dedication to excellence means your
                  satisfaction is not just a goal but a guarantee.
                </p>
              </div>
            </div>
            <div
              // key={index}
              className="carousel-item text-left relative min-w-72 max-w-72 lg:min-w-80  lg:max-w-80 lg:h-64 h-48 snap-start bg-[#BCC8F5]"
            >
              <div className="flex flex-col gap-4 lg:py-10 lg:px-10 py-4 px-4 text-left absolute top-0">
                <p className="lgtext-lg font-medium text-gray-900">
                  Safety First
                </p>
                <p className="text-gray-600 text-sm">
                  Our commitment to safety is unwavering, and we prioritize the
                  wellbeing of our team and clients.
                </p>
              </div>
            </div>
            <div
              // key={index}
              className="carousel-item text-left relative min-w-72 max-w-72 lg:min-w-80  lg:max-w-80 lg:h-64 h-48 snap-start bg-[#DAF6B7]"
            >
              <div className="flex flex-col gap-4 lg:py-10 lg:px-10 py-4 px-4 text-left absolute top-0">
                <p className="text-lg font-medium text-gray-900">
                  Fresh Perspective
                </p>
                <p className="text-gray-600 text-sm">
                  As a new company, we bring innovative approaches to every
                  project. We are unencumbered by tradition, ready to tailor our
                  services to your unique requirements.
                </p>
              </div>
            </div>
            <div
              // key={index}
              className="carousel-item text-left relative min-w-72 max-w-72 lg:min-w-80  lg:max-w-80 lg:h-64 h-48 snap-start bg-[#f6c8b7]"
            >
              <div className="flex flex-col gap-4 lg:py-10 lg:px-10 py-4 px-4 text-left absolute top-0">
                <p className="text-lg font-medium text-gray-900">
                  Customer-Centric
                </p>
                <p className="text-gray-600 text-sm">
                  Your needs drive our solutions. We work closely with you to
                  understand your goals and deliver results that exceed your
                  expectations.
                </p>
              </div>
            </div>
            <div
              // key={index}
              className="carousel-item text-left relative min-w-72 max-w-72 lg:min-w-80  lg:max-w-80 lg:h-64 h-48 snap-start bg-[#45ecde]"
            >
              <div className="flex flex-col gap-4 lg:py-10 lg:px-10 py-4 px-4 text-left absolute top-0">
                <p className="text-lg font-medium text-gray-900">Reliability</p>
                <p className="text-gray-600 text-sm">
                  Trust is the foundation of our business. We are unwavering in
                  our commitment to delivering reliable, cost-effective, and
                  high-quality services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
