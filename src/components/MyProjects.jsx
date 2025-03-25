import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const MyProjects = React.forwardRef((props, ref) => {
  const projects = [
    {
      title: "SmartPack AI",
      description:
        "An intelligent travel packing assistant that suggests items based on location, weather, and trip duration.",
      link: "#",
    },
    {
      title: "SkillX Platform",
      description:
        "A dynamic learning platform that offers personalized courses, skill assessments, and certification, built to empower learners and professionals.",
      link: "#",
    },
    {
      title: "Doctor Appointment Automation",
      description:
        "An automated system to streamline doctor appointment scheduling, patient reminders, and management, aimed at improving healthcare efficiency.",
      link: "#",
    },
    {
      title: "Smart Parking System",
      description:
        "A parking system that uses real-time data to manage available parking spots efficiently, developed with PHP and MySQL.",
      link: "#",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white h-screen px-8 sm:px-16 md:px-24 lg:px-32 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center text-violet-300"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#2a2550] p-6 rounded-xl shadow-lg flex items-start gap-4 transform transition-all hover:scale-[1.03] hover:shadow-violet-500/30 hover:shadow-2xl"
          >
            <FaLaptopCode className="text-3xl text-violet-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default MyProjects;
