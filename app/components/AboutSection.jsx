"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillProgress from "./SkillProgress";
import CertificateModal from "./CertificateModal";

const skillData = [
    { skill: "React", percent: 80, color: "#8B5CF6" },
    { skill: "Node.js", percent: 70, color: "#EC4899" },
    { skill: "JavaScript", percent: 90, color: "#3B82F6" },
    { skill: "Database", percent: 85, color: "#10B981" },
    { skill: "Express", percent: 65, color: "#F97316" },
    { skill: "Sequelize", percent: 60, color: "#EF4444" },
    { skill: "DSA", percent: 85, color: "#8B5CF6" },
    { skill: "OS", percent: 70, color: "#10B981" },
    { skill: "PHP", percent: 80, color: "#F97316" },
];

const certificates = [
    {
        title: "AWS Educate Practitioner",
        issuer: "Amazon Web Services",
        date: "Jan 2023",
        logo: "/images/aws-logo.png",
        image: "/images/awsEducate.png",
    },
    {
        title: "Cisco Networking Academy",
        issuer: "Cisco",
        date: "Dec 2024",
        logo: "/images/cisco1.png",
        image: "/images/networking-basics.png",
    },
    {
        title: "Elements Of AI",
        issuer: "Udemy Online Courses",
        date: "Jul 2023",
        logo: "/images/udemy.png",
        image: "/images/Elements-of-AI.jpeg",
    },
    {
        title: "FullStack Developer Intern",
        issuer: "InnovationsHub Services pvt ltd",
        date: "May 2021",
        logo: "/images/innovation.jpg",
        image: "/images/innovationsHub.jpg",
    },
    {
        title: "Dr. D.Y. Patil Institute of Technology",
        issuer: "freeCodeCamp",
        date: "Aug 2024",
        logo: "/images/school-logo1.png",
        image: "/images/dpu.png",
    },
];

const experiences = [
    {
        title: "Specialist Programmer",
        company: "Infosys",
        duration: "2025 – Present",
        description: "works on complex projects and builds solutions to solve some of the world's most challenging business problems.",
    },
    {
        title: "Full Stack Intern",
        company: "InnovationsHub Services",
        duration: "May 2021 – Aug 2021",
        description: "Built internal tools and web modules as part of a cross-functional development team."
    }
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <div className="w-full max-w-full overflow-x-auto scrollbar-hide">
                    <div className="w-max flex gap-6 animate-skillSlider bg-gradient-to-br from-purple-800/30 via-pink-800/30 to-blue-800/30 p-6 rounded-2xl backdrop-blur-md shadow-md shadow-white/5">
                        {[...skillData, ...skillData].map((s, i) => (
                            <SkillProgress
                                key={i}
                                skill={s.skill}
                                percent={s.percent}
                                color={s.color}
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Education",
            id: "education",
            content: (
                <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4 bg-[#1f1f1f] p-4 rounded-xl shadow-md">
                        <img
                            src="/images/school-logo1.png"
                            alt="Institute Logo"
                            className="w-12 h-12 object-contain rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Bachelor of Engineering in Computer Science (9.7 SGPA)
                            </h3>
                            <p className="text-sm text-gray-300">
                                Dr. D.Y. Patil Institute of Technology, Pune
                            </p>
                            <p className="text-xs text-gray-400">2022 - 2025</p>
                            <p className="text-sm text-gray-400 mt-1">
                                Awarded First Class with Distinction; completed key academic projects focused on modern software development and real-world problem solving.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-[#1f1f1f] p-4 rounded-xl shadow-md">
                        <img
                            src="/images/school-logo2.png"
                            alt="Institute Logo"
                            className="w-12 h-12 object-contain rounded-full p-1 bg-white"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Diploma in Computer Engineering
                            </h3>
                            <p className="text-sm text-gray-300">
                                MET Bhujbal Knowledge City, Nashik
                            </p>
                            <p className="text-xs text-gray-400">2019 - 2022</p>
                            <p className="text-sm text-gray-400 mt-1">
                                Academic topper in all semesters; recipient of the MET Ratna Award for academic excellence.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-[#1f1f1f] p-4 rounded-xl shadow-md">
                        <img
                            src="/images/school-logo3.png"
                            alt="School Logo"
                            className="w-12 h-12 object-cover rounded-full bg-white p-1"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Secondary School SSC (87.20%)
                            </h3>
                            <p className="text-sm text-gray-300">
                                K.M.L.J Kanya Vidyalaya, Pimpalgoan(B), Nashik
                            </p>
                            <p className="text-xs text-gray-400">2013 – 2019</p>
                            <p className="text-sm text-gray-400 mt-1">
                                Scored 87.20% and actively participated in a range of extracurricular activities.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },

       {
  title: "Experience",
  id: "experience",
  content: (
    <div className="relative border-l border-purple-500 pl-10 ml-2"> {/* increased pl */}
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-10 relative">
          <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>
          <h3 className="text-lg font-bold text-white">{exp.title}</h3>
          <p className="text-sm text-gray-300 font-medium">{exp.company}</p>
          <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
          <p className="text-sm text-gray-400">{exp.description}</p>
        </div>
      ))}
    </div>
  ),
}


    ];

    return (
        <section className="text-white" id="about">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image
                            src="/images/about-image.png"
                            width={400}
                            height={400}
                            alt="About Image"
                            className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
                        />
                    </div>

                    <div className="text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-base lg:text-lg mb-4">
                            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git.
                            I am a quick learner and always looking to expand my knowledge and skill set. I am a team player and excited to work with others to create impactful applications. </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex flex-wrap gap-4 mt-4">
                                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                                <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                            </div>

                        </div>

                        <div className="mt-6">
                            {tab === "certifications" ? (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {certificates.map((cert, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#1f1f1f] p-4 rounded-xl shadow-md flex items-start gap-4"
                                            >
                                                <img
                                                    src={cert.logo}
                                                    alt={cert.title}
                                                    className="w-12 h-12 object-contain bg-white rounded-full p-1"
                                                />
                                                <div className="flex flex-col justify-between h-full flex-1">
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg">{cert.title}</h3>
                                                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                                                        <p className="text-xs text-gray-500">Issued: {cert.date}</p>
                                                    </div>

                                                    <button
                                                        onClick={() => {
                                                            setSelectedImage(cert.image);
                                                            setShowModal(true);
                                                        }}
                                                        className="mt-3 px-4 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 self-start"
                                                    >
                                                        View
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                    {/* Modal */}
                                    {showModal && (
                                        <CertificateModal
                                            imageUrl={selectedImage}
                                            onClose={() => setShowModal(false)}
                                        />
                                    )}
                                </>
                            ) : (
                                TAB_DATA.find((t) => t.id === tab)?.content
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
