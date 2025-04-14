import React, { useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5, FaGitAlt,
  FaJs, FaPhp, FaDatabase, FaAndroid
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

// Tech stack array
const techStack = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaPython, name: "Python" },
  { icon: FaJava, name: "Java" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaHtml5, name: "HTML" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaPhp, name: "PHP" },
  { icon: FaDatabase, name: "Databases" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiExpress, name: "Express.js" },
  { icon: FaAndroid, name: "Android" },
];

// Infinite scrolling component
const InfiniteScrollRow = ({ items, speed = 50 }) => {
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    baseX.set(baseX.get() - (speed * delta) / 1000);
  });

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-10 items-center"
        style={{ x: baseX }}
      >
        {[...items, ...items].map(({ icon: Icon, name }, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center p-5 bg-[#1c1a35]/60 backdrop-blur-md border border-violet-500 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer min-w-[100px]"
          >
            <Icon className="text-4xl sm:text-5xl text-purple-300 mb-2" />
            <span className="text-sm sm:text-base text-gray-200">{name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechPage = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#0f0c29] text-white overflow-hidden px-6 py-24 flex flex-col items-center justify-center">
      {/* Blurred Background Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 mb-6"
      >
        Tech Stack I Love 💻
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-14"
      >
        A showcase of the tools and technologies I use to build powerful web and mobile experiences.
      </motion.p>

      {/* Infinite Scroll Row */}
      <div
        onMouseLeave={() => setHoveredTech(null)}
        className="w-full max-w-6xl relative"
      >
        <InfiniteScrollRow
          items={techStack.map((tech) => ({
            ...tech,
            onHover: () => setHoveredTech(tech.name),
            onLeave: () => setHoveredTech(null),
          }))}
        />
      </div>

      {/* Hover Tooltip */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-10 bg-[#1f1b36] px-6 py-2 rounded-lg shadow-xl text-lg font-semibold text-purple-300 border border-purple-500"
        >
          {hoveredTech}
        </motion.div>
      )}
    </section>
  );
};

export default TechPage;
