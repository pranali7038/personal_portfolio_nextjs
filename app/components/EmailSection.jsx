"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full max-w-screen-xl mx-auto grid md:grid-cols-2 my-12 py-24 gap-8 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      {/* Static Glowing Background (responsive) */}
      <div className="absolute top-10 left-1 w-48 h-48 sm:w-72 sm:h-72 bg-purple-700 opacity-30 blur-3xl rounded-full -z-10" />

      {/* LEFT SIDE */}
      <div className="relative flex flex-col justify-center z-10">
        {/* Animated Blob Glow (responsive) */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

        <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/pranali7038" target="_blank">
            <Image
              src="/github-icon.svg"
              alt="GitHub Icon"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://linkedin.com/in/pranali7038" target="_blank">
            <Image
              src="/linkedin-icon.svg"
              alt="LinkedIn Icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="z-10">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form
            action="https://formspree.io/f/movwkdzl"
            method="POST"
            className="flex flex-col"
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="xyz@gmail.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
