import { RiArrowUpSLine, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiLinkedinFill, RiTwitterXFill, RiWhatsappFill, RiYoutubeFill } from '@remixicon/react'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center max-[600px]:p-0 bg-[url('/images/SAT1600/Benefits.webp')] bg-cover">
      <div
        id="footer"
        className="h-full flex flex-col gap-10 w-full p-5 px-10 max-[600px]:p-5"
      >
        <div className="footer-wrapper flex max-[600px]:flex-col lg:justify-evenly max-[600px]:gap-10 pl-5 max-[600px]:pl-0">
          <div className="text-white w-[30%] max-[600px]:w-full flex flex-col h-fit max-[600px]:grid max-[600px]:grid-cols-1 lg:mt-8">
            <div className="image-wrapper w-[300px]">
              <img
                className="max-[600px]:w-[60%] max-[600px]:mt-6 w-1/2"
                src="/Images/login_signup/Logo cts.png"
                alt=""
              />
              <div>
                <p className="text-sm font-light mt-10 max-[600px]:mt-5 text-white">
                  Let’s cross the skylimits
                </p>
              </div>
            </div>
            <div className="max-[600px]:flex max-[600px]:items-center">
              <div className="flex flex-col gap-4 max-[600px]:w-[50%] max-[600px]:h-full">
                <div className="about space-y-5 mt-12">
                  <h1 className="text-lg font-medium text-white">About Us</h1>
                  <p className="text-sm font-light max-[600px]:w-[80%] text-white">
                    Helping students in their college application journey
                  </p>
                </div>
              </div>
              <div className="mt-5 max-[600px]:mt-0 max-[600px]:h-full flex flex-col gap-4">
                <div className="about mt-12">
                  <h1 className="text-lg font-medium text-white">Contact Us</h1>
                  <div className="text-sm font-light mt-5 flex gap-3">
                    <img
                      className="size-5"
                      src="/Images/footer/callicon.png"
                      alt=""
                    />{" "}
                    <span className="text-sm text-white">+91 9171902209</span>
                  </div>
                  <div className="text-sm font-light flex gap-3 mt-1">
                    <img
                      className="size-5"
                      src="/Images/footer/emailicon.png"
                      alt=""
                    />{" "}
                    <span className="text-sm pr-3 text-white">
                      info@crosstheskylimits.org
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="links-wrapper max-[600px]:pl-0 pl-10 w-[70%] max-[600px]:w-full grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-12 md:ml-10 lg:ml-20 lg:mt-10 lg:grid-cols-4">
            <div className="section">
              <h2 className="text-white font-semibold mb-2">ROADMAP</h2>
              <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3">
                <a
                  href="/"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  Home
                </a>
                <a
                  href="/signup"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  Start for free
                </a>
                <a
                  href="/login"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  Login now
                </a>
              </div>
            </div>
            <div className="section">
              <h2 className="text-white font-semibold mb-2">FEATURES</h2>
              <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3">
                <Link
                  href="/services"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  Exclusive Services
                </Link>
                <Link
                  href="/services/essay-editing"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  Essay Editing
                </Link>
                <Link
                  href="/services/common-app-review"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  Common App Review
                </Link>
                <Link
                  href="/apply-internship-form"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  CTS Internships
                </Link>
                <Link
                  href="/services/css-profile"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  CSS Profile Help
                </Link>
                <Link
                  href="/services/exam-prepration/sat-prepration"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  DSAT Crash Course
                </Link>
                <a
                  href="#cts-graduate"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  CTS Graduate
                </a>
                <Link
                  href="/portfolio"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  Personalized Portfolio
                </Link>
                <Link
                  href="/services/exam-prepration"
                  className="text-zinc-50 block font-light text-sm hover:text-zinc-300"
                >
                  Exam Prepration
                </Link>
              </div>
            </div>

            <div className="section">
              <h2 className="text-white font-semibold mb-2">USE CASES</h2>
              <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3">
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  For UnderGrade Students
                </a>
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  For High School Students
                </a>
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  For Graduate Students
                </a>
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  For Aspiring Parents
                </a>
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  For Networking
                </a>
                <a
                  href="#"
                  className="text-zinc-50 block text-sm font-light hover:text-zinc-300"
                >
                  Aspiring Communities
                </a>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                {/* <h2 className="text-white font-semibold mb-2">
                  Subscribe for more
                </h2> */}
                {/* <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(Subscribemail(email));
                    toast.success("Subscribed Successfully");
                    setemail("");
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    // value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setemail(e.target.value)}
                    className="p-2 text-xs rounded-md focus:border-[#3498DB] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#008BDC] w-fit text-white text-xs px-2 py-2 rounded-md mt-4"
                  // disabled={!email}
                  >
                    Subscribe
                  </button>
                </form> */}
              </div>
            </div>

            <div className="section flex flex-col justify-between">
              <h2 className="text-white font-semibold">ORGANIZATION</h2>
              <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3 h-[90%]">
                <Link
                  href="/about-us"
                  className="text-zinc-50 text-sm font-light block hover:text-zinc-300"
                >
                  About Us
                </Link>
                <a
                  href="#"
                  className="text-zinc-50 text-sm font-light block hover:text-zinc-300"
                >
                  Partner With Us
                </a>
                <Link
                  href={"/privacy-policy"}
                  className="text-zinc-50 text-sm font-light block hover:text-zinc-300"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-50 text-sm font-light block hover:text-zinc-300"
                >
                  Privacy-policy
                </Link>
                <a
                  href="#"
                  className="text-zinc-50 text-sm font-light block hover:text-zinc-300"
                >
                  Contact Us
                </a>
              </div>
              <div className="btm-top-btn w-full flex items-end justify-end pr-5">
                <div className="size-10 bg-black p-2">
                  <a
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-white text-xs font-light mt-10 cursor-pointer"
                  >
                    <RiArrowUpSLine />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper max-[600px]:flex-col-reverse py-5 flex gap-4 items-center justify-between mt-10 border-t-[1px] border-zinc-400 bg-transparent">
          <span className="w-[20%]"></span>
          <div className="socials-wrapper flex gap-6 text-3xl">
            <a
              href="https://www.instagram.com/krishna_mit_"
              className="text-zinc-300 hover:text-zinc-50"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-mit"
              className="text-zinc-300 hover:text-zinc-50"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              href="https://wa.link/wbwwp2"
              className="text-zinc-300 hover:text-zinc-50"
            >
              <RiWhatsappFill />
            </a>
            <a
              href="https://youtube.com/@krishnamit"
              className="text-zinc-300 hover:text-zinc-50"
            >
              <RiYoutubeFill />
            </a>
          </div>
          <div className="">
            <p className="text-zinc-50 text-sm font-light">
              © 2024 Cross The Skylimits. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer