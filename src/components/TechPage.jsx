import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";

const TechIcon = ({ icon: Icon, position, scale, onHover }) => {
  const [hovered, setHovered] = useState(false);

  // Handle hover effects
  const handleHover = (state) => {
    setHovered(state);
    onHover(state);
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `calc(${position.y * 100}vh)`,
        left: `calc(${position.x * 100}vw)`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        cursor: "pointer",
        opacity: 0.8,
        pointerEvents: "auto",
        zIndex: hovered ? 2 : 1,
      }}
      whileHover={{ scale: 1.8, rotate: 20 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Icon size={hovered ? 70 : 50} color={hovered ? "#f56d91" : "#fff"} />
    </motion.div>
  );
};

const TechPage = () => {
  const [hovered, setHovered] = useState(false);

  // Tech stack with dynamic positioning and scaling
  const techStack = [
    { icon: FaReact, position: { x: 0.3, y: 0.2 }, scale: 1.3 },
    { icon: FaNodeJs, position: { x: 0.7, y: 0.4 }, scale: 1.3 },
    { icon: FaPython, position: { x: 0.5, y: 0.7 }, scale: 1.3 },
    { icon: FaJava, position: { x: 0.8, y: 0.8 }, scale: 1.3 },
    { icon: FaCss3Alt, position: { x: 0.2, y: 0.1 }, scale: 1.3 },
    { icon: FaHtml5, position: { x: 0.1, y: 0.6 }, scale: 1.3 },
    { icon: FaGitAlt, position: { x: 0.6, y: 0.2 }, scale: 1.3 },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white flex items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0" style={{ zIndex: -1 }}>
        <ambientLight intensity={0.6} />
        <Stars radius={200} depth={50} count={5000} factor={4} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>

      {/* Tech Icons */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {techStack.map((tech, index) => (
          <TechIcon
            key={index}
            icon={tech.icon}
            position={tech.position}
            scale={tech.scale}
            onHover={(state) => setHovered(state)}
          />
        ))}
      </div>

      {/* Floating Effect Indicator */}
      {hovered && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lg text-violet-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hovering Over a Tech Stack
        </motion.div>
      )}
    </div>
  );
};

export default TechPage;
