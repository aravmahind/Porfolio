import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-r from-[#0f0c29] via-[#1c1938] to-[#15132b] text-white flex flex-col lg:flex-row items-center justify-between px-8 sm:px-16 md:px-24 lg:px-32 overflow-hidden">
      {/* Left Content */}
      <div className="z-10 text-center lg:text-left max-w-2xl w-full lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-xl"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 text-gray-300 drop-shadow-md"
        >
          Feel free to reach out for collaborations or just a friendly chat!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            animate ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center lg:justify-start gap-6"
        >
          {/* <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105">
            Send a Message
          </Button> */}
          <a
            href="mailto:aravmahind7@gmail.com"
            className="border border-violet-400 bg-transparent hover:bg-violet-700 hover:text-white text-violet-200 px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105"
          >
            Email Me
          </a>
        </motion.div>
      </div>

      {/* Right Section: Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full lg:w-1/2 flex justify-center relative"
      >
        <div className="p-8 rounded-3xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-300 mb-4">
            Send a Message
          </h2>
          <form action="https://formspree.io/f/xqapbjoq" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#15132b"
            fillOpacity="1"
            d="M0,288L48,261.3C96,235,192,181,288,149.3C384,117,480,107,576,112C672,117,768,139,864,160C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
