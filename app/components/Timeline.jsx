"use client";
import { motion } from "framer-motion";
import React from "react";

const timeline = [
    {
        year: "2019",
        title: "Secondary School Certification (SSC)",
        description: "Successfully completed SSC with a strong academic record.",
    },
    {
        year: "2022",
        title: "Diploma Graduation & Bachelor's Enrollment",
        description: "Graduated with a diploma in engineering and began pursuing a Bachelor's degree (B.E.).",
    },
    {
        year: "2024",
        title: "Industry Internship",
        description: "Completed a hands-on internship gaining practical exposure in real-world development.",
    },
    {
        year: "2025",
        title: "Placement at Infosys",
        description: "Selected as a Specialist Programmer at Infosys through campus recruitment.",
    },
];


const TimelineSection = () => {
    return (
        <section id="timeline" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">
                The Road So Far...
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-10">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-purple-500 pl-6 relative"
                        >
                            <div className="absolute top-0 left-[-10px] w-4 h-4 bg-purple-500 rounded-full" />
                            <h3 className="text-xl font-semibold text-white">{item.year}</h3>
                            <h4 className="text-purple-300 text-lg font-medium">{item.title}</h4>
                            <p className="text-[#ADB7BE] text-sm">{item.description}</p>

                        </motion.div>
                    ))}
                </div>

                {/* Right side animation */}
                <div className="hidden md:flex justify-center items-center relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="w-60 h-60 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
