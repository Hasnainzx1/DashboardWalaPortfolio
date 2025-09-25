import React, { useState, useEffect } from 'react';
import { FaCode, FaDatabase, FaPaintBrush, FaTools, FaCloud, FaSpinner } from 'react-icons/fa';

const Skills = () => {

  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1500);

   
    return () => clearTimeout(timer);
  }, []); 

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-gray-700" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Material UI", level: 75 },
        { name: "Framer Motion", level: 70 },
        { name: "Shadcn", level: 65 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaDatabase className="text-gray-700" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "EJS", level: 85 }
      ]
    },
    {
      title: "Design & Graphics",
      icon: <FaPaintBrush className="text-gray-700" />,
      skills: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Canva", level: 90 },
        { name: "UI/UX Design", level: 75 }
      ]
    },
    {
      title: "Productivity Tools",
      icon: <FaTools className="text-gray-700" />,
      skills: [
        { name: "Microsoft Office", level: 95 },
        { name: "Graphics Design Tools", level: 85 }
      ]
    }
  ];

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-black font-medium">{skill}</span>
        <span className="text-gray-600 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-black h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  // 3. Conditional rendering based on the loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        {/* Simple loading spinner using a Font Awesome icon */}
        <FaSpinner className="text-4xl text-black animate-spin" />
        <span className="ml-3 text-xl font-medium text-black">Loading Skills...</span>
      </div>
    );
  }

  // 4. Render the full component once loading is complete (isLoading is false)
  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 text-lg">My technical proficiencies and creative abilities</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-lg bg-gray-100 border border-gray-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-black">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-black mb-6 text-center">
              Technical Proficiencies Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-3">
                  <FaCloud className="text-3xl text-gray-700 mx-auto" />
                </div>
                <h4 className="font-bold text-black mb-2">Web Technologies</h4>
                <p className="text-gray-600 text-sm">
                  Full-stack development with modern frameworks and libraries
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-3">
                  <FaPaintBrush className="text-3xl text-gray-700 mx-auto" />
                </div>
                <h4 className="font-bold text-black mb-2">Design Skills</h4>
                <p className="text-gray-600 text-sm">
                  Professional graphic design and UI/UX implementation
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-3">
                  <FaTools className="text-3xl text-gray-700 mx-auto" />
                </div>
                <h4 className="font-bold text-black mb-2">Productivity</h4>
                <p className="text-gray-600 text-sm">
                  Efficient workflow with office and design tools
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-black mb-1">10+</div>
              <div className="text-gray-600 text-sm">Technologies</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-black mb-1">4</div>
              <div className="text-gray-600 text-sm">Categories</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-black mb-1">85%</div>
              <div className="text-gray-600 text-sm">Average Skill</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-black mb-1">2+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;