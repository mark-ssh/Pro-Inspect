"use client";
import Link from "next/link";

export default function CustomFooter() {
  return (
    <>
      <section className="w-full bg-[#280612] flex justify-center">
        <div className="lg:py-16 py-8 lg:w-[1080px] w-full px-6 lg:px-0 flex flex-col lg:flex-row gap-5 justify-between">
          <div className="flex flex-col lg:gap-7 gap-4 w-full lg:w-[28%] text-[#E5E0E0]">
            <div className="">
              <p className="lg:text-lg uppercase text-[#E5E0E0] font-semibold">
                Contact Us
              </p>

              <p className="mb-0 lg:text-base text-xs text-[#E5E0E0] mt-4">
                Visit our office at the location below, contact us through our
                official phone number or send us an email.
              </p>
            </div>

            <div className="flex lg:gap-6 gap-4 items-start">
              <img
                src="/img/PlaceMarker.png"
                alt="img"
                className="lg:w-5 lg:h-5 h-4 w-4 object-cover"
              />
              <p className="mb-0 text-[#E5E0E0] text-xs lg:text-[15px]">
                31 Emelu Street, Rumunduru, Port Harcourt, Rivers State, Nigeria
              </p>
            </div>
            <div className="flex lg:gap-6 gap-4 items-start">
              <img
                src="/img/Phone.png"
                alt="img"
                className="lg:w-5 lg:h-5 h-4 w-4  object-cover"
              />
              <p className="mb-0 text-[#E5E0E0] text-xs lg:text-[15px]">
                (+234)8068-807-064
              </p>
            </div>
            <div className="flex lg:gap-6 gap-4 items-start">
              <img
                src="/img/Email.png"
                alt="img"
                className="lg:w-5 lg:h-5 h-4 w-4  object-cover"
              />
              <a
                href="mailto:info@permel.com.ng"
                className="mb-0 text-[#E5E0E0] text-xs lg:text-[15px]"
              >
                info@pro-inspect.com.ng
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:gap-7 gap-4 w-full mt-8 lg:mt-0 lg:w-[28%] lg:ps-12 ps-5">
            <p className="lg:text-lg uppercase text-[#E5E0E0] font-semibold">
              Quick Links
            </p>
            <Link
              href="/"
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="about-us"
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              href="services"
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="careers"
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
            >
              Careers
            </Link>
            <Link
              href="contact-us"
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col lg:gap-7 gap-4 w-full mt-8 lg:mt-0 lg:w-[28%] text-[#E5E0E0]">
            <p className="text-lg uppercase text-[#E5E0E0] font-semibold">
              Services
            </p>
            <Link
              href=""
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
              target="_blank"
            >
              Certificate Verification
            </Link>
            <Link
              href=""
              className="mb-0 text-[#E5E0E0] lg:text-[15px] text-xs hover:text-blue-600"
              target="_blank"
            >
              Training
            </Link>
            <div className="mb-0 flex gap-1 items-center mt-32">
              <div className="text-[#E5E0E0] text-xs lg:text-[15px] ">
                Socials:
              </div>
              <div className="">
                <Link href="" target="blank">
                  <img
                    src="/img/icons8-linkedin-480.png"
                    alt=""
                    className="w-8 h-8 -mt-2 ms-3"
                  />
                </Link>
                <Link href="" target="blank">
                  <img
                    src="/img/icons8-facebook-96.png"
                    alt=""
                    className="w-8 h-8 -mt-2 ms-3"
                  />
                </Link>
                <Link href="" target="blank">
                  <img
                    src="/img/icons8-google-plus-96.png"
                    alt=""
                    className="w-8 h-8 -mt-2 ms-3"
                  />
                </Link>
                <Link href="" target="blank">
                  <img
                    src="/img/icons8-twitter-100.png"
                    alt=""
                    className="w-8 h-8 -mt-2 ms-3"
                  />
                </Link>
                <Link href="" target="blank">
                  <img
                    src="/img/icons8-whatsapp-144.png"
                    alt=""
                    className="w-8 h-8 -mt-2 ms-3"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
