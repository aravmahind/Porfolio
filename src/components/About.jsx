import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  const educationList = [
    {
      title: "Bachelor's in Computer Engineering",
      place: "Vidyalankar Institute of Technology, Mumbai (2024 – Present)",
      desc: "Exploring data structures, web development, and AI-driven solutions.",
    },
    {
      title: "Diploma in Computer Engineering",
      place: "Government Polytechnic Thane (2021 – 2024)",
      desc: "Gained hands-on experience in programming, networking, and projects.",
    },
  ];

  return (
    <section
    ref={ref}
    className="relative min-h-screen bg-gradient-to-b from-[#15132b] via-[#1a183a] to-[#0f0c29] text-white px-8 sm:px-16 md:px-24 lg:px-32 pt-20 pb-20 flex flex-col items-center overflow-hidden"
  >
  
      <motion.div
        className="text-center max-w-4xl mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 drop-shadow-lg">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-7 mt-4">
          Hey there! I'm{" "}
          <span className="text-purple-400 font-semibold">Arav Mahind</span>, a
          Computer Engineering student passionate about crafting modern web
          applications.
        </p>
      </motion.div>

      {/* Education Section */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {educationList.map((edu, i) => (
          <motion.div
            key={i}
            className="relative bg-[#241e4e] bg-opacity-80 rounded-xl p-6 shadow-lg flex items-start gap-4 transform transition-all hover:scale-[1.03] hover:shadow-violet-500/40 hover:shadow-2xl backdrop-blur-md"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: i * 0.2 }}
          >
            <FaGraduationCap className="text-4xl text-violet-400" />
            <div>
              <h3 className="text-2xl font-semibold text-white">{edu.title}</h3>
              <p className="text-gray-400">{edu.place}</p>
              <p className="text-gray-300 mt-2">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
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

export default About;
