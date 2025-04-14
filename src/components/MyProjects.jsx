import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import smartpack from "../assets/smartpack-ai.png";
import skillx from "../assets/skillx.png";

const projects = [
  {
    title: "SmartPack AI",
    description: "An intelligent packing assistant that suggests items based on weather and location.",
    image: smartpack,
    link: "https://github.com/aravmahind/SmartPack"
  },
  {
    title: "SkillX",
    description: "A skill-building platform with an interactive UI to explore.",
    image: skillx,
    link: "https://github.com/aravmahind/SkillXPlatforms"
  }
  
];

const MyProjects = () => {
  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#1c1938] to-[#15132b] text-white px-8 sm:px-16 md:px-24 lg:px-32 py-20">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-xl"
      >
        My Projects
      </motion.h2>

      {/* Project Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`bg-[#1c1938] p-6 rounded-xl shadow-xl border border-violet-400 transition-transform duration-300 hover:scale-105 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-violet-300"
            />
            <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
            <p className="text-gray-300 mt-2 mb-4">{project.description}</p>
            <a href={project.link} className="inline-block mt-2">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                View Project
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;