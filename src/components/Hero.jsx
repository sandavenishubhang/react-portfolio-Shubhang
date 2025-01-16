import React, { useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const imageAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Hero = () => {
  const [roles] = useState([
    "Data Analyst",
    "Business Analyst",
    "Data Scientist",
    "Data Engineer",
    "Machine Learning Engineer",
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Function to change role every few seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Shubhang Yadav
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/shubhang-yadav-sandaveni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <i className="fab fa-linkedin fa-2x"></i> {/* Replace with your LinkedIn SVG/FontAwesome icon */}
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/sandavenishubhang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-github fa-2x"></i> {/* Replace with your GitHub SVG/FontAwesome icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex justify-center"
            variants={imageAnimation}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img src={profilePic} alt="Shubhang Yadav" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
