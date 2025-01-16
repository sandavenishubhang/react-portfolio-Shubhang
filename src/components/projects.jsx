import { PROJECTS } from "../constants"; // Import the PROJECTS array
import { motion } from "framer-motion"; // Import framer-motion for animations

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Projects Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 + index * 0.2 }} // Adding cascading delay
              className="w-full lg:w-1/3 flex-shrink-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded w-full h-auto"
              />
            </motion.div>

            {/* Project Details Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="w-full lg:w-2/3"
            >
              <h6 className="mb-2 font-semibold text-white text-xl">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies Section */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links Section */}
              <div className="mt-4">
                {/* Live Demo Link */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 mr-4"
                  >
                    View Live Demo
                  </a>
                )}
                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
