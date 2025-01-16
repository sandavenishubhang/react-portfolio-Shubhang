import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { IoLogoTableau } from "react-icons/io5";
import { SiTensorflow, SiKubernetes, SiSnowflake } from "react-icons/si";
import { FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: duration,
      ease: "easeInOut",
    },
  },
});

const Technologies = () => {
  const techList = [
    { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    { name: "MySQL", icon: <DiMysql style={{ color: "#4479A1" }} /> },
    { name: "Tableau", icon: <IoLogoTableau style={{ color: "#E97627" }} /> },
    { name: "Power BI", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" className="w-12 h-12" /> },
    { name: "AWS", icon: <FaAws style={{ color: "#FF9900" }} /> },
    { name: "Docker", icon: <FaDocker style={{ color: "#2496ED" }} /> },
    { name: "Kubernetes", icon: <SiKubernetes style={{ color: "#326CE5" }} /> },
    { name: "Excel", icon: <RiFileExcel2Line style={{ color: "#217346" }} /> },
    { name: "Git", icon: <FaGitAlt style={{ color: "#F34F29" }} /> },
    { name: "Snowflake", icon: <SiSnowflake style={{ color: "#56B8E9" }} /> },
    { name: "TensorFlow", icon: <SiTensorflow style={{ color: "#FF6F00" }} /> },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      <motion.div className="flex flex-wrap justify-center gap-8">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-28 h-28 bg-neutral-900 border-2 border-neutral-700 rounded-xl shadow-lg"
            variants={iconVariants(0.5 + index * 0.2)} // Add staggered delay
            initial="initial"
            whileInView="animate"
          >
            <div className="text-5xl">{tech.icon}</div>
            <p className="mt-2 text-sm font-medium text-neutral-300">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
