import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const Home = ({ onViewProjectsClick }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen bg-gradient-to-r from-[#0f0c29] via-[#1c1938] to-[#15132b] text-white flex flex-col lg:flex-row items-center justify-between px-8 sm:px-16 md:px-24 lg:px-32 overflow-hidden">
      
      {/* Floating Neon Blobs */}
      <div className="absolute top-[-80px] left-[-50px] w-55 h-55 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-50px] w-77 h-77 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Left Content */}
      <div className="z-10 text-center lg:text-left max-w-2xl w-full lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-xl"
        >
          Hey, I'm Arav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 text-gray-300 drop-shadow-md"
        >
          I craft immersive web experiences that blend creativity with
          performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animate ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center lg:justify-start gap-6"
        >
          <a
            href="/resume.pdf"
            download
            className="border border-violet-400 bg-transparent hover:bg-violet-700 hover:text-white text-violet-200 px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full lg:w-1/2 flex justify-center relative"
      >
        <div className="relative group rounded-full p-2 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
          {/* Subtle Glassmorphism Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm rounded-full"></div>

          {/* Profile Image */}
          <div className="relative p-2 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-blue-400 transition-all duration-300">
            <img
              src="/AravPhoto.jpg"
              alt="Arav Mahind"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-md transition-all duration-300"
              loading="lazy"
            />
          </div>

          {/* Subtle Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 blur-xl transition-all duration-300 group-hover:opacity-20"></div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-40"
    preserveAspectRatio="none"
  >
    <path
      fill="#15132b" /* Match the next section background */
      fillOpacity="1"
      d="M0,288L48,261.3C96,235,192,181,288,149.3C384,117,480,107,576,112C672,117,768,139,864,160C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64V320H0Z"
    ></path>
  </svg>
</div>

    </section>
  );
};

export default Home;
