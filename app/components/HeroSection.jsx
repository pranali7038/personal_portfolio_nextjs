"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "PRANALI JAHAGIRDAR",
                1000,
                "Design....",
                1000,
                "Develop....",
                1000,
                "Deliver!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a Specialist Programmer at Infosys, passionate about building
            smart, user-focused digital solutions. I recently graduated from Dr.
            D.Y. Patil Institute of Technology, Pune, where I built a strong
            foundation in core CS subjects like DSA, OS, CN, etc. Skilled in
            modern technologies like React, Next.js, and AI/ML, I love turning
            ideas into impactful digital experiences. I approach challenges with
            clarity, creativity, and a problem-solving mindset. Rooted in a
            business-driven family, I combine practical insight with strong
            technical skills.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Hire Me button */}
            <Link href="#contact" scroll={true}>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
              </button>
            </Link>

            {/* Download CV button */}
            <a
              href="/Pranali_Resume.pdf"
              download
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-10 sm:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
