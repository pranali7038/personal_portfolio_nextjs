"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase personal projects and skills. Focused on clean UI, smooth navigation, and mobile-first design principles.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/portfolio",
    previewUrl: "https://delightful-mud-0a8cca900.2.azurestaticapps.net/",
  },
  {
    id: 2,
    title: "Online Quize Portal",
    description: "Built a dynamic online quiz portal using PHP, HTML, CSS, and MySQL. Enabled user authentication, real-time scoring, and question management with a clean and responsive interface.",
    image: "/images/projects/quize.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/Online-Quize",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Built a dynamic Amazon-inspired e-commerce platform with product listings, cart functionality, and responsive UI — replicating real-world shopping experiences.",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/AmazonClone",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Developed a responsive food ordering platform featuring menu browsing, cart management, and seamless order placement for an intuitive user experience.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/websites",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 5,
    title: "Springboot",
    description: "Built a robust web application using Spring Framework with integrated authentication, role-based access control, and secure API endpoints, ensuring reliable user management and backend security.",
    image: "/images/projects/project5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/SpringProject",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Developed a full stack web applications with seamless integration of frontend and backend technologies, enabling dynamic data handling, responsive UI, and efficient user interactions.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pranali7038/FullStackDev",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 7,
    title: "Drowsiness Detection System",
    description: "Built an Android application that detects driver drowsiness in real-time using facial monitoring and alerts, enhancing road safety through timely warnings.",
    image: "/images/projects/drowsiness.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/pranali7038/drowsiness-detection-system",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
  {
    id: 8,
    title: "A Library Management System",
    description: "Library Management System is a Java-based desktop application developed using Advanced Java technologies like Swing and JDBC. It enables efficient management of books, members, and transactions with features such as book issuance, return tracking, and real-time inventory updates.",
    image: "/images/projects/library.jpg",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/pranali7038/library-management-system",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
   {
    id: 9,
    title: "Stress Detection of IT Employees",
    description: "Developed an intelligent system that analyzes facial expressions and physiological data to detect stress levels in IT professionals. Integrated Python and computer vision techniques with a user-friendly interface to support mental well-being monitoring",
    image: "/images/projects/stress.jpg",
    tag: ["All", "AIML"],
    gitUrl: "https://github.com/pranali7038/Stress-Detection",
    previewUrl: "https://gentle-piroshki-0f83da.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Desktop"
            isSelected={tag === "Desktop"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="AIML"
            isSelected={tag === "AIML"}
          />
        </div>
        <ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
