import Link from "next/link";
import CustomFooter from "../components/footer";
import CustomNavbar from "../components/navbar";
import ContactBar from "../components/contact-bar";
export default function About() {
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
            About Us
          </h2>
          <span>
            <Link
              href="/"
              className="lg:text-xs text-xs text-[#FDAE50] cursor-pointer"
            >
              Home {">"}
            </Link>
            <span className="text-white text-xs"> About Us</span>
          </span>
        </div>
      </div>
      <section className="w-full flex justify-center flex-col items-center overflow-hidden">
        <div className="lg:w-[1080px] lg:pt-14 flex flex-col lg:flex-row items-start justify-between lg:mt-12 mt-8 px-6 lg:px-0">
          <div className="lg:w-[62%] w-full flex flex-col">
            <div className="w-full">
              <p className="text-lg text-gray-700 mb-2 font-medium">
                Brief Overview
              </p>
              <p className="text-gray-700 lg:text-base leading-6 text-sm">
                At Pro-Inspect Limited, we are a dynamic and innovative company
                dedicated to revolutionizing the way businesses manage their
                assets. With an unwavering commitment to service excellence and
                a fresh perspective on solutions, we are your trusted partner in
                ensuring the safety, reliability, and efficiency of your
                business operations.
              </p>
            </div>
            <div className="w-full my-16">
              <p className="text-base text-gray-700 mb-2 font-medium">
                Mission Statement
              </p>
              <p className="text-gray-700 lg:text-base leading-6 text-sm">
                At Pro-Inspect, our mission is to be the steadfast partner
                transforming challenges into opportunities for our clients. Our
                pledge is to consistently exceed client expectations, offering
                reliable, innovative, and client-focused solutions for enduring
                success.
              </p>
            </div>
            <div className="w-full">
              <p className="text-base text-gray-700 mb-2 font-medium">
                Vision Statement
              </p>
              <p className="text-gray-700 lg:text-base leading-6 text-sm">
                To be a leading provider of industrial solutions, delivering
                excellence through innovation and steadfast commitment to safety
                and reliability.
              </p>
            </div>
          </div>
          <div className="w-[18rem] p-10 bg-[#E67D1F] text-white hidden lg:flex flex-col items-start justify-center text-left">
            <p className="text-xs mb-2">Our Story</p>
            <p className="text-3xl ">
              Coporate Overview & Values{" "}
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
        <div className="flex justify-center w-full lg:mt-20 mt-14  lg:pt-14">
          <p className="lg:text-xl text-base font-medium lg:mb-4 text-gray-700">
            Our Core Values
          </p>
        </div>
        <div className="lg:w-[1080px]  flex flex-col lg:flex-row gap-10 items-start justify-center lg:mb-20 lg:mt-8 mt-4 px-6 lg:px-0">
          <div className="w-56 h-56 bg-[#D9D9D9] px-12 pt-8 pb-12 flex flex-col gap-2 items-center justify-center">
            <img
              src="/img/Handshake.png"
              alt="png"
              className="w-24 h-w-24 object-contain"
            />
            <p className="text-xl text-medium text-gray-800">Integrity</p>
          </div>
          <div className="w-56 h-56 bg-[#D9D9D9] px-12 pt-8 pb-12 flex flex-col gap-2 items-center justify-center">
            <img
              src="/img/Increase.png"
              alt="png"
              className="w-24 h-w-24 object-contain"
            />
            <p className="text-xl text-medium text-gray-800">Performance</p>
          </div>
          <div className="w-56 h-56 bg-[#D9D9D9] px-12 pt-8 pb-12 flex flex-col gap-2 items-center justify-center">
            <img
              src="/img/Project-Management.png"
              alt="png"
              className="w-24 h-w-24 object-contain"
            />
            <p className="text-xl text-medium text-gray-800">Innovation</p>
          </div>
          <div className="w-56 h-56 bg-[#D9D9D9] px-12 pt-8 pb-12 mb-20 lg:mb-0 flex flex-col gap-2 items-center justify-center">
            <img
              src="/img/Delivery.png"
              alt="png"
              className="w-24 h-w-24 object-contain"
            />
            <p className="text-xl text-center text-medium text-gray-800">
              Service Delivery
            </p>
          </div>
        </div>
      </section>
      <CustomFooter />
    </main>
  );
}
