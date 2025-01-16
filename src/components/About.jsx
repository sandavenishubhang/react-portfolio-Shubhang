import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  const ABOUT_TEXT = `
    My journey into the world of data analytics began with a deep curiosity for uncovering patterns and insights hidden within data. 
    With a Bachelor of Technology in Electrical and Electronics Engineering from Mahindra École Centrale, Hyderabad, I laid the foundation for my technical skills, which I have since refined through my Master of Science in Data Analytics Engineering at Northeastern University, Boston...
    
    Over the years, I have gained hands-on experience in Python, SQL, and R, alongside tools like Tableau and Power BI, allowing me to transform raw data into meaningful insights. My professional journey includes working as a Data Analyst at Deep Red Ink Digital Marketing Agency, where I optimized workflows, developed interactive dashboards, and delivered data-driven solutions that enhanced client satisfaction and performance...
    
    Through academic and professional projects, I have designed ETL pipelines, built predictive models, and implemented clustering techniques to solve real-world challenges. This journey has been shaped by a constant drive to learn, adapt, and innovate, equipping me with the skills to approach data challenges from multiple perspectives and deliver impactful results...
    
    I am passionate about leveraging data to tell compelling stories and empower decision-making, always aiming to make a positive impact through my work.
  `;

  const paragraphs = ABOUT_TEXT.trim().split("..."); // Splitting the text into paragraphs

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Image Section with Animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="About Me" />
          </div>
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
 