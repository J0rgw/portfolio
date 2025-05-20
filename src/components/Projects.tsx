// src/components/Projects.tsx
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Mathgeon",
    description: "A mathematical game built with TypeScript, React, and Node.js",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/J0rgw/mathgeon"
  },
  {
    title: "SoundTown",
    description: "A music discovery platform built with jQuery and Node.js",
    technologies: ["jQuery", "Node.js"],
    githubUrl: "https://github.com/J0rgw/SoundTown"
  },
  {
    title: "TDD Cypress",
    description: "Test Driven Development with Cypress and Tailwind CSS",
    technologies: ["Cypress", "Tailwind CSS"],
    githubUrl: "https://github.com/J0rgw/CypressTestForms"
  },
  {
    title: "RSS Atom Reader",
    description: "RSS/Atom feed reader built with JavaScript and CORS",
    technologies: ["JavaScript", "CORS"],
    githubUrl: "https://github.com/J0rgw/RssAtomReader"
  }
];

const Projects = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-murs text-gray-900">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs md:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                  <FaExternalLinkAlt className="ml-1 text-xs opacity-75" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;