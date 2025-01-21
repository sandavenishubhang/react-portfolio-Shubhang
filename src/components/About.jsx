import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
const ABOUT_TEXT = `
  My passion for data analytics stems from a desire to uncover meaningful patterns and insights hidden within datasets. With a Bachelor of Technology in Electrical and Electronics Engineering from Mahindra École Centrale and a Master of Science in Data Analytics Engineering from Northeastern University, I have cultivated a strong technical foundation that supports my expertise in Python, SQL, and R...
  
  Professionally, I have honed my skills as a Data Analyst, working on projects that involved optimizing workflows, creating interactive dashboards, and implementing data-driven strategies to solve business challenges. My tenure at Deep Red Ink Consulting and PSR Tech Hub has equipped me with the ability to process and analyze large datasets, automate workflows, and deliver insights that drive decision-making...
  
  In addition to my work experience, I have completed academic and independent projects such as designing ETL pipelines, implementing machine learning models, and conducting exploratory data analysis. These experiences have prepared me to tackle real-world challenges from multiple perspectives and deliver solutions that create value...
  
  My goal is to leverage data to tell compelling stories, empower decision-makers, and contribute to impactful innovations in the field of data analytics and engineering.
`;
  

  const paragraphs = ABOUT_TEXT.trim().split("...");

  return (
    <div className="border-b border-neutral-900 pb-4 lg:pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img src={aboutImg} alt="About Me" className="rounded-lg shadow-lg" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="max-w-xl mx-auto">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify text-neutral-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
