// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-xl font-bold text-primary"
          >
            Jorge Arcas
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {['home', 'projects', 'about', 'skills'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  activeSection === item 
                    ? 'text-primary bg-blue-50' 
                    : 'text-gray-600 hover:text-primary hover:bg-blue-50'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/J0rgw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jorge-arcas-verdejo-18ba29255" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:jorgearcasverdejo@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-blue-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {['home', 'projects', 'about', 'skills'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                activeSection === item
                  ? 'text-primary bg-blue-50'
                  : 'text-gray-600 hover:text-primary hover:bg-blue-50'
              }`}
            >
              {item}
            </a>
          ))}
          <div className="flex space-x-4 px-3 py-2">
            <a 
              href="https://github.com/J0rgw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jorge-arcas-verdejo-18ba29255" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:jorgearcasverdejo@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;