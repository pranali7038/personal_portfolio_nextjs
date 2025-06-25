"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Award from "./award"; 


const TopperCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [
    "/images/achievment/Topper.jpeg",
    "/images/achievment/Topper1.jpg",
    "/images/achievment/Topper2.jpg",
    "/images/achievment/Topper3.jpeg",
  ];

  return (
    <div className="w-full max-w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Achievement ${index + 1}`}
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      title: "MET Ratna Award",
      image: "/images/achievment/METRatna.jpeg",
      description: "Awarded for academic excellence by MET Institute.",
    },
    {
      title: "Hall of Achievement",
      customCarousel: true,
      description: "Consistently ranked among top students in degree & diploma.",
    },
    {
      title: "Problem Solving",
      image: "/images/achievment/coding1.jpg",
      description: "Active on GFG, LeetCode & Coding Ninjas.",
    },
  ];

  const platforms = [
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/jahagirdarpranali3409/",
      logo: "/images/achievment/leetcode.png",
    },
    {
      name: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/user/jahagirdarpxscf/",
      logo: "/images/achievment/gfgf.jpg",
    },
    {
      name: "Coding Ninjas",
      link: "https://www.naukri.com/code360/profile/pranali7038",
      logo: "/images/achievment/codingNinjas.png",
    },
  ];

  const mentions = [
    {
      title: "Alumni Recognition by MET",
      link: "https://metbhujbalknowledgecity.ac.in/MET%20DATA/IOT-P/comp/News%20&%20Events/Alumni_Meet_12.8.24.pdf",
    },
    {
      title: "Distinguished by MET Honors",
      link: "https://metbhujbalknowledgecity.ac.in/MET%20DATA/IOT-P/comp/News-Letter/News%20Letter%202022-23%20Volume%203%20Issue%201.pdf",
    },
    {
      title: "The MET League",
      link: "https://metbhujbalknowledgecity.ac.in/MET%20DATA/IOT-P/Institute%20Committee/Local%20Committee%2021-22.pdf",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0f0f0f] text-white overflow-x-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400">
          Achievements
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
className="bg-[#18191E] rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-700"
            >
              {item.customCarousel ? (
                <TopperCarousel />
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-[#ADB7BE] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-4 text-purple-400">
          Problem Solving Platforms
        </h3>
        <div className="flex flex-wrap gap-4">
          {platforms.map((platform, idx) => (
            <Link
              key={idx}
              href={platform.link}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-purple-500 text-white text-sm shadow-md hover:scale-105 hover:shadow-purple-500 transition duration-300"
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={20}
                height={20}
              />
              <span>{platform.name}</span>
            </Link>
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-4 text-purple-400">
          Mentions
        </h3>
        <div className="space-y-4">
          {mentions.map((mention, idx) => (
            <Link
              key={idx}
              href={mention.link}
              target="_blank"
              className="block underline text-purple-300 hover:text-purple-500 transition"
            >
              {mention.title}
            </Link>
          ))}
        </div>

        <Award />
      </div>
    </section>
  );
};

export default AchievementsSection;
