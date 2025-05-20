import React from 'react';
import { FaNodeJs, FaGitAlt, FaReact, FaLanguage } from 'react-icons/fa';
import { FiCode, FiDatabase, FiServer, FiLayers, FiCpu, FiTerminal, FiGlobe } from 'react-icons/fi';
import { SiJavascript, SiTypescript, SiCss3, SiJquery, SiJest, SiTestinglibrary } from 'react-icons/si';

type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Testing';

interface Skill {
  name: string;
  icon: React.ReactElement<{ className?: string }>;
  level: number;
  years: string;
  category: SkillCategory | 'Language';
  description?: string;
  keywords?: string[];
}

const skills: Skill[] = [
  // Frontend - Ordered by proficiency and relevance
  { 
    name: 'JavaScript', 
    icon: <SiJavascript className="text-yellow-500" />, 
    level: 90, 
    years: '3+ years',
    category: 'Frontend',
    description: 'Modern JavaScript (ES6+) development',
    keywords: ['ES6+', 'ES2020', 'Vanilla JS', 'DOM Manipulation']
  },
  { 
    name: 'React', 
    icon: <FaReact className="text-blue-500" />, 
    level: 85, 
    years: '2+ years',
    category: 'Frontend',
    description: 'Building interactive UIs with React',
    keywords: ['Hooks', 'Context API', 'React Router', 'Component Lifecycle']
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript className="text-blue-600" />, 
    level: 80, 
    years: '1+ years',
    category: 'Frontend',
    description: 'Type-safe JavaScript development',
    keywords: ['Type System', 'Interfaces', 'Generics', 'Type Inference']
  },
  { 
    name: 'CSS & Styling', 
    icon: <SiCss3 className="text-blue-400" />, 
    level: 88, 
    years: '3+ years',
    category: 'Frontend',
    description: 'Responsive and modern CSS',
    keywords: ['CSS3', 'Flexbox', 'Grid', 'Animations', 'Tailwind CSS']
  },
  { 
    name: 'jQuery', 
    icon: <SiJquery className="text-blue-700" />, 
    level: 82, 
    years: '3+ years',
    category: 'Frontend',
    description: 'DOM manipulation and AJAX',
    keywords: ['AJAX', 'Event Handling', 'Plugins']
  },
  
  // Backend - Ordered by proficiency
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="text-green-500" />, 
    level: 82, 
    years: '2+ years',
    category: 'Backend',
    description: 'Server-side JavaScript runtime',
    keywords: ['Express', 'REST APIs', 'Middleware', 'NPM']
  },
  { 
    name: 'Python', 
    icon: <FiTerminal className="text-blue-700" />, 
    level: 78, 
    years: '2+ years',
    category: 'Backend',
    description: 'Python development',
    keywords: ['Flask', 'Scripting', 'Automation']
  },
  { 
    name: 'Database', 
    icon: <FiDatabase className="text-purple-600" />, 
    level: 75, 
    years: '2+ years',
    category: 'Backend',
    description: 'Database management',
    keywords: ['MongoDB', 'NoSQL', 'Mongoose', 'Data Modeling']
  },
  { 
    name: 'API Development', 
    icon: <FiServer className="text-gray-600" />, 
    level: 85, 
    years: '3+ years',
    category: 'Backend',
    description: 'Designing and implementing APIs',
    keywords: ['REST', 'GraphQL', 'JSON:API', 'Authentication']
  },
  
  // Tools - Most used first
  { 
    name: 'Git & GitHub', 
    icon: <FaGitAlt className="text-orange-600" />, 
    level: 90, 
    years: '3+ years',
    category: 'Tools',
    description: 'Version control and collaboration',
    keywords: ['Git Flow', 'Pull Requests', 'CI/CD']
  },
  
  // Testing - Most relevant first
  { 
    name: 'Testing', 
    icon: <SiTestinglibrary className="text-red-500" />, 
    level: 75, 
    years: '1+ years',
    category: 'Testing',
    description: 'Test-driven development',
    keywords: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing']
  }
];

const SkillCategory = ({ category, skills }: { category: string; skills: Skill[] }) => {
  const getCategoryIcon = () => {
    switch(category) {
      case 'Frontend': return <FiCpu className="text-blue-500" />;
      case 'Backend': return <FiServer className="text-green-500" />;
      case 'Tools': return <FiTerminal className="text-orange-500" />;
      case 'Testing': return <SiTestinglibrary className="text-red-500" />;
      default: return <FiCode className="text-gray-500" />;
    }
  };

  return (
    <section className="mb-12" aria-labelledby={`${category.toLowerCase()}-heading`}>
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mr-3">
          {getCategoryIcon()}
        </div>
        <h2 id={`${category.toLowerCase()}-heading`} className="text-2xl font-bold text-gray-900">
          {category} Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <article 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            itemScope
            itemType="https://schema.org/Thing"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900" itemProp="name">
                  {skill.name}
                </h3>
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                {skill.years}
              </span>
            </div>
            
            {skill.description && (
              <p className="text-gray-600 text-sm mb-4" itemProp="description">
                {skill.description}
              </p>
            )}
            
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                ></div>
              </div>
            </div>
            
            {skill.keywords && skill.keywords.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.keywords.map((keyword, i) => (
                  <span 
                    key={i}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
  description?: string;
  keywords?: string[];
}

// Other skills (combining Tools, Testing, and Languages)
const otherSkills: Skill[] = [
  ...skills.filter(skill => skill.category === 'Tools'),
  ...skills.filter(skill => skill.category === 'Testing'),
  {
    name: 'Spanish',
    icon: <FaLanguage className="text-blue-500" />,
    level: 100,
    years: 'Native',
    category: 'Language',
    description: 'Fluent in both spoken and written Spanish',
    keywords: ['Native Speaker', 'Fluent', 'Bilingual']
  },
  {
    name: 'English',
    icon: <FaLanguage className="text-green-500" />,
    level: 80,
    years: 'Professional',
    category: 'Language',
    description: 'Professional working proficiency',
    keywords: ['Business Level', 'Technical Documentation']
  }
];

const Skills = () => {
  const categories = ['Frontend', 'Backend'] as const;
  
  // Responsive grid columns
  const getGridCols = (length: number) => {
    if (length <= 2) return 'grid-cols-1 sm:grid-cols-2';
    if (length <= 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };
  
  // Truncate long descriptions on mobile
  const TruncatedText = ({ text, maxLength = 100 }: { text: string; maxLength?: number }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const shouldTruncate = text.length > maxLength;
    
    if (!shouldTruncate) return <p className="text-gray-600 text-sm mb-4">{text}</p>;
    
    return (
      <div className="relative">
        <p className="text-gray-600 text-sm mb-4 transition-all duration-300">
          {isExpanded ? text : `${text.substring(0, maxLength)}...`}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-200 rounded px-2 py-1 -ml-2"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    );
  };
  
  const getLanguageColor = (level: string) => {
    switch(level) {
      case 'Native': return 'from-blue-500 to-blue-600';
      case 'Professional': return 'from-green-500 to-green-600';
      case 'Intermediate': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };
  
  // Group skills by category
  const skillsByCategory = categories.map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category)
  }));
  
  return (
    <section id="skills" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            A collection of my technical skills and areas of expertise
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return categorySkills.length > 0 ? (
              <div 
                key={category} 
                className="scroll-mt-20" 
                id={`${category.toLowerCase()}-skills`}
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ItemList"
              >
                <meta itemProp="name" content={`${category} Skills`} />
                <SkillCategory category={category} skills={categorySkills} />
              </div>
            ) : null;
          })}
        </div>
        
        {/* Other Skills Section */}
        <div className="space-y-6 mt-12 sm:mt-16">
          <div 
            className="scroll-mt-20"
            id="other-skills"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ItemList"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <FiLayers className="text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Other Skills
              </h2>
            </div>
            <div className={`grid ${getGridCols(otherSkills.length)} gap-4 sm:gap-6`}>
              {otherSkills.map((skill, index) => (
                <article 
                  key={index}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Thing"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                        {React.cloneElement(skill.icon, { className: 'w-4 h-4 sm:w-5 sm:h-5' })}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight" itemProp="name">
                        {skill.name}
                      </h3>
                    </div>
                    {skill.years && (
                      <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 sm:px-2.5 rounded-full whitespace-nowrap ml-2">
                        {skill.years}
                      </span>
                    )}
                  </div>
                  
                  {skill.description && (
                    <div className="mb-3 sm:mb-4 flex-grow">
                      <TruncatedText text={skill.description} maxLength={80} />
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    <div className="mb-2 sm:mb-3">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          role="progressbar"
                        />
                      </div>
                    </div>
                    
                    {skill.keywords && skill.keywords.length > 0 && (
                      <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                        {skill.keywords.map((keyword, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] xs:text-xs font-medium bg-gray-100 text-gray-800 leading-none"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
