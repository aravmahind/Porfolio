import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaPhp, FaDatabase, FaAndroid } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

const TechPage = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    { icon: FaReact, name: "React" }, { icon: FaNodeJs, name: "Node.js" }, { icon: FaPython, name: "Python" },
    { icon: FaJava, name: "Java" }, { icon: FaCss3Alt, name: "CSS" }, { icon: FaHtml5, name: "HTML" },
    { icon: FaGitAlt, name: "Git" }, { icon: FaJs, name: "JavaScript" }, { icon: FaPhp, name: "PHP" },
    { icon: FaDatabase, name: "Databases" }, { icon: SiFirebase, name: "Firebase" },
    { icon: SiMongodb, name: "MongoDB" }, { icon: SiExpress, name: "Express.js" },
    { icon: FaAndroid, name: "Android" }
  ];

  return (
    <section className="relative overflow-hidden h-screen bg-gradient-to-r from-[#0f0c29] via-[#1c1938] to-[#15132b] text-white flex flex-col items-center justify-center px-8">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-50px] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
      >
        My Tech Stack
      </motion.h1>

      {/* Tech Description */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-2xl mb-8 text-gray-300 text-center"
      >
        These are the technologies I work with to build robust and scalable applications.
      </motion.p>

      {/* Tech Icons */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-6xl"
      >
        {techStack.map(({ icon: Icon, name }, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
            dragElastic={0.2}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-gray-800 rounded-full shadow-lg hover:bg-purple-500 transition-all cursor-pointer"
            onMouseEnter={() => setHoveredTech(name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <Icon className="text-white" />
          </motion.div>
        ))}
      </motion.div>

      {/* Hovered Tech Name Display */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute bottom-16 text-2xl font-semibold text-purple-300 bg-gray-900 px-4 py-2 rounded-lg shadow-md"
        >
          {hoveredTech}
        </motion.div>
      )}

    </section>
  );
};

export default TechPage;
