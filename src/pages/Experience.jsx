import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "ITG UAE",
      type: "Full-time",
      period: "Jul 2025 - Present · 3 mos",
      location: "Karachi · On-site",
      technologies: "React Js, Material UI, Node, Express, Mongo Db",
      icon: <FaCode className="text-gray-700" />
    },
    {
      title: "React Js Developer",
      company: "Aykays",
      type: "Internship",
      period: "Jun 2025 - Sep 2025 · 4 mos",
      location: "Karachi Division, Sindh, Pakistan · On-site",
      technologies: "Next Js + Typescript",
      icon: <FaCode className="text-gray-700" />
    },
   
    {
      title: "Frontend Developer",
      company: "Data Tronex",
      type: "Full Time",
      period: "Jan 2023 - Jan 2024 · 1 Year",
      location: "Karachi Division, Sindh, Pakistan · On-site",
      technologies: "HTML CSS JAVASCRIPT",
      icon: <FaCode className="text-gray-700" />
    }
  ];

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 text-lg">My professional journey and career growth</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 mt-2 w-4 h-4 rounded-full bg-white border-4 border-black z-10"></div>
                
                {/* Content Card */}
                <div className="ml-12 flex-1">
                  <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 rounded-lg bg-gray-100 border border-gray-300">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black">{exp.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="font-semibold text-gray-800">{exp.company}</span>
                              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full font-medium border border-gray-300">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <FaCalendarAlt className="text-gray-600" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <FaMapMarkerAlt className="text-gray-600" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-800 bg-gray-100 px-3 py-2 rounded border border-gray-300">
                            <span className="font-medium">Technologies: </span>
                            {exp.technologies}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-black">3+</div>
            <div className="text-sm text-gray-600">Companies</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-black">2+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-black">3</div>
            <div className="text-sm text-gray-600">Frontend Roles</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-black">React</div>
            <div className="text-sm text-gray-600">Specialization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;