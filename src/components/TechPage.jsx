import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5, FaGitAlt, FaJs, FaPhp, FaDatabase, FaAndroid, FaLinux } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

const TechPage = () => {
  const [animate, setAnimate] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null); // Track hovered tech name

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const techStack = [
    { icon: FaReact, name: "React" }, { icon: FaNodeJs, name: "Node.js" }, { icon: FaPython, name: "Python" },
    { icon: FaJava, name: "Java" }, { icon: FaCss3Alt, name: "CSS" }, { icon: FaHtml5, name: "HTML" },
    { icon: FaGitAlt, name: "Git" }, { icon: FaJs, name: "JavaScript" }, { icon: FaPhp, name: "PHP" },
    { icon: FaDatabase, name: "Databases" }, { icon: SiFirebase, name: "Firebase" },
    { icon: SiMongodb, name: "MongoDB" }, { icon: SiExpress, name: "Express.js" },
    { icon: FaAndroid, name: "Android" }
  ];

  return (
    <section className="relative h-screen bg-gradient-to-r from-[#0f0c29] via-[#1c1938] to-[#15132b] text-white flex flex-col items-center justify-center px-8 sm:px-16 md:px-24 lg:px-32 overflow-hidden">
      
      <div className="absolute top-[-80px] left-[-50px] w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-50px] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-xl"
      >
        My Tech Stack
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-2xl mb-8 text-gray-300 drop-shadow-md text-center"
      >
        These are the technologies I work with to build robust and scalable applications.
      </motion.p>

      {/* Tech Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-6xl"
      >
        {techStack.map(({ icon: Icon, name }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-12 text-2xl font-semibold text-purple-300 bg-gray-900 px-4 py-2 rounded-lg shadow-md"
        >
          {hoveredTech}
        </motion.div>
      )}

    </section>
  );
};

export default TechPage;
