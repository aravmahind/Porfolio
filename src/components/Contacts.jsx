import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white h-screen px-8 sm:px-16 md:px-24 lg:px-32 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold mb-12 text-center text-violet-300"
      >
        Get in Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-violet-500 text-3xl" />
            <div>
              <h4 className="text-xl font-semibold">Email</h4>
              <p className="text-lg text-gray-300">aravmahind7@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-violet-500 text-3xl" />
            <div>
              <h4 className="text-xl font-semibold">Phone</h4>
              <p className="text-lg text-gray-300">(+91) 8928396948</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-violet-500 text-3xl" />
            <div>
              <h4 className="text-xl font-semibold">Location</h4>
              <p className="text-lg text-gray-300">Koparkhairane, Navi Mumbai, India</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          action="https://formspree.io/f/xqapbjoq"
          method="POST"
          className="bg-[#2a2550] p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300"
          >
            <FaEnvelope />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
