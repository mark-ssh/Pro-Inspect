"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";

export default function CustomNavbar({ style = false }) {
  const [scrolled, setScrolled] = useState(false);

  // State to track the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const bgEffect = scrolled ? "fixed" : style ? "relative" : "relative";
  return (
    <Navbar
      className={`w-full  inset-x-0 top-0 z-50 lg:flex lg:justify-center ${bgEffect}  transition-all p-0 lg:flex-col items-center  h-fit`}
      id="navBar"
    >
      <nav
        className="flex items-center lg:justify-center justify-between px-10 lg:px-0 bg-white lg:bg-[#280612] py-5 lg:w-full w-full"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-24 lg:px-6 lg:py-1.5">
          <Link
            href="/"
            className={` leading-6 text-white relative hover:text-orange-500`}
          >
            Home
          </Link>
          <Link
            className={` leading-6 text-white relative cursor-pointer group hover:text-orange-500`}
            href="/about-us"
          >
            About Us
          </Link>

          <div
            className={` leading-6 text-white relative cursor-pointer group hover:text-orange-500`}
          >
            Services
            <span>
              <i className="bx bxs-down-arrow text-[12px] ms-1"></i>
            </span>
            <div className="bg-white absolute left-0 top-[105%] w-[22rem] h-fit flex-col hidden group-hover:flex shadow-md">
              <Link
                href="/services/ndt"
                className="text-gray-800 px-5 py-3 hover:bg-orange-500 hover:text-white w-full bg-white border-b border-gray-200"
              >
                NDT/Inspection Services
              </Link>
              <Link
                href="/services/tubular"
                className="text-gray-800 px-5 py-3 hover:bg-orange-500 hover:text-white w-full bg-white border-b border-gray-200"
              >
                Tubular Inspection Services
              </Link>
              <Link
                href="/services/pressure-testing"
                className="text-gray-800 px-5 py-3 hover:bg-orange-500 hover:text-white w-full bg-white border-b border-gray-200"
              >
                Pressure Testing Services
              </Link>
              <Link
                href="/services/fabrication"
                className="text-gray-800 px-5 py-3 hover:bg-orange-500 hover:text-white w-full bg-white border-gray-200"
              >
                Welding & Fabrication Services
              </Link>
              <Link
                href="/services/training"
                className="text-gray-800 px-5 py-3 hover:bg-orange-500 hover:text-white w-full bg-white"
              >
                Training Services
              </Link>
            </div>
          </div>
          <Link
            href="/careers"
            className={` leading-6  text-white relative hover:text-orange-500`}
          >
            Careers
          </Link>
          <Link
            href="/certificate"
            className={` leading-6 text-white relative hover:text-orange-500`}
          >
            Verify Certificate
          </Link>
          <Link
            href="/contact-us"
            className={` leading-6 text-white relative hover:text-orange-500`}
          >
            Contact Us
          </Link>
        </div>

        <Link
          href="/"
          className="-m-1.5 p-1.5 lg:hidden flex items-start gap-4"
        >
          <span className="sr-only">Your Company</span>
          <img
            className="h-16 w-fit -ms-4 lg:-ms-0 object-contain"
            src="/img/pro inpect logo.jpg"
            width={40}
            height={40}
            alt=""
          />
        </Link>
        {/* Navbar open menu icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div
        className={`lg:hidden  ${isOpen ? "flex" : "hidden"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-2/3 h-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto object-contain"
                src="/img/pro inpect logo.jpg"
                height={50}
                width={50}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </Link>
                <Link
                  href="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
