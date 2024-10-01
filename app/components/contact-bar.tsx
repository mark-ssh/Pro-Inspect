"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContactBar() {
  return (
    <>
      <section className="w-full bg-white hidden lg:flex justify-center">
        <div className="flex items-center justify-between lg:w-[85%]">
          <Link href="/" className="-m-1.5 p-1.5 flex items-start gap-4">
            <span className="sr-only">Your Company</span>
            <img
              className="lg:h-24 h-16 w-fit -ms-4 lg:-ms-0"
              src="/img/pro inpect logo.jpg"
              width={40}
              height={40}
              alt=""
            />
          </Link>
          <div className="flex items-center gap-10">
            <div className="flex gap-3">
              <span className="text-5xl text-gray-700">
                <i className="bx bxs-phone-call"></i>
              </span>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-[#C00202]">
                  Call us from 8:00 am - 5:00pm
                </p>
                <p className="text-xl text-gray-800">(+234)8068-807-064</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-5xl text-gray-700">
                <i className="bx bxs-time-five"></i>
              </span>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-[#C00202]">
                  Open Monday to Friday
                </p>
                <p className="text-xl text-gray-800">8:00am - 5:00pm</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-5xl text-gray-700">
                <i className="bx bxs-envelope"></i>
              </span>
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-[#C00202]">Email Us</p>
                <a
                  href="mailto:info@pro-inspect.com.ng"
                  className="text-xl text-gray-800"
                >
                  info@pro-inspect.com.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
