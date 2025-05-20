import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        {/* Animated greeting */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gray-900 font-murs tracking-tight leading-none">
            Jorge Arcas
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-murs font-medium text-gray-800 mb-8 leading-tight">
            Programming <span className="text-primary">my future</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium tracking-wide">
            Frontend Developer passionate about creating beautiful, responsive, and user-friendly applications and APIs
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Link 
              to="projects" 
              smooth={true}
              duration={500}
              className="px-10 py-5 bg-primary text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer text-center font-murs font-semibold text-lg tracking-wider flex items-center justify-center gap-3"
            >
              View My Work
              <FiArrowDown className="animate-bounce" />
            </Link>
            <a 
              href="#contact" 
              className="px-10 py-5 border-2 border-primary text-primary rounded-xl hover:bg-blue-50 transition-all duration-300 text-center font-murs font-semibold text-lg tracking-wider"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/J0rgw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FiGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={28} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-600 hover:text-red-500 transition-all duration-300 transform hover:scale-125"
              aria-label="Email"
            >
              <FiMail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
