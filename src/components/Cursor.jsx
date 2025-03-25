import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none mix-blend-difference z-50"
      animate={{
        x: position.x - 12, // Centering effect
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 700, // Increased stiffness for faster movement
        damping: 20, // Reduced damping for a snappier effect
      }}
      style={{
        background: "rgba(180, 60, 255, 0.9)", // Vibrant glow color
        boxShadow: "0 0 15px rgba(180, 60, 255, 0.8)", // Glow effect
        filter: "blur(3px)", // Slight blur for a softer look
      }}
    />
  );
};

export default Cursor;
  