import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}



const About: React.FC = () => {
  const experience: ExperienceItem[] = [
    {
      role: "Fullstack Developer",
      company: "Grupo Fuertes",
      period: "March 2025 - June 2025",
      description: "Developed and maintained web applications using modern technologies."
    },
    {
      role: "Google Developer Group Organizer",
      company: "Google Developer Group",
      period: "Nov 2022 - Current",
      description: "Organizing tech events and workshops for the developer community."
    },
    {
      role: "Google Developer Student Club Lead",
      company: "Google Developer Student Clubs",
      period: "Jun 2023 - June 2024",
      description: "Leading a team of students to learn and build solutions for local businesses."
    }
  ];

  const education: EducationItem[] = [
    {
      degree: "Web Development",
      institution: "UCAM",
      period: "2023 - 2025"
    },
    {
      degree: "Computer Engineering",
      institution: "UCAM",
      period: "2021 - 2023"
    }
  ];



  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-murs text-gray-900">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-blue-600 mr-3 text-xl" />
              <h3 className="text-2xl font-bold text-gray-900">My Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-600">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1"></div>
                  <h4 className="text-xl font-semibold text-gray-900">{exp.role}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-green-600 mr-3 text-xl" />
              <h3 className="text-2xl font-bold text-gray-900">My Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-green-600">
                  <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-1"></div>
                  <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-green-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;