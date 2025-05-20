// src/components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/J0rgw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jorge-arcas-verdejo-18ba29255" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:jorgearcasverdejo@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jorge Arcas Verdejo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;