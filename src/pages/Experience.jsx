import React, { useState, useEffect } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaSpinner } from "react-icons/fa";

const Experience = () => {
  // State to manage the loading status (starts as true)
  const [isLoading, setIsLoading] = useState(true); 

  // useEffect to simulate a 2-second loading time
  useEffect(() => {
    // Set a timeout for 2000 milliseconds (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    // Cleanup function: Clear the timeout if the component unmounts early
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs only once after the initial render

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

  // --- Start of Loading Screen Logic ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <FaSpinner className="text-4xl text-black animate-spin" />
        <span className="ml-3 text-xl font-medium text-black">Loading Experience...</span>
      </div>
    );
  }
  // --- End of Loading Screen Logic ---

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen"> {/* Responsive padding and background */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Work Experience
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">My professional journey and career growth</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line - Adjusted to left-4 for mobile, left-8 for larger screens */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot - Adjusted to left-2 for mobile, left-6 for larger screens */}
                <div className="absolute left-2 sm:left-6 mt-2 w-4 h-4 rounded-full bg-white border-4 border-black z-10"></div>
                
                {/* Content Card - Adjusted ml-8 for mobile, ml-12 for larger screens */}
                <div className="ml-8 sm:ml-12 flex-1">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-4 sm:p-6"> {/* Responsive padding inside card */}
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3"> {/* Added items-start for better alignment on small screens */}
                          <div className="p-2 sm:p-3 rounded-lg bg-gray-100 border border-gray-300 flex-shrink-0">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-black">{exp.title}</h3> {/* Responsive text size */}
                            <div className="flex flex-wrap items-center gap-2 sm:space-x-2 mt-1"> {/* Use flex-wrap for small screens */}
                              <span className="font-semibold text-gray-800 text-sm">{exp.company}</span>
                              <span className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs rounded-full font-medium border border-gray-300">
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 mt-2 border-t pt-4 border-gray-100"> {/* Stacks on mobile */}
                        <div className="flex items-center space-x-2 text-gray-700">
                          <FaCalendarAlt className="text-gray-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{exp.period}</span> {/* Responsive text size */}
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <FaMapMarkerAlt className="text-gray-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{exp.location}</span> {/* Responsive text size */}
                        </div>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs sm:text-sm text-gray-800 bg-gray-100 px-3 py-2 rounded border border-gray-300">
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
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> {/* Adjusted gap for mobile */}
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-black">3+</div>
            <div className="text-xs sm:text-sm text-gray-600">Companies</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-black">2+</div>
            <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-black">3</div>
            <div className="text-xs sm:text-sm text-gray-600">Frontend Roles</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md">
            <div className="text-xl sm:text-2xl font-bold text-black">React</div>
            <div className="text-xs sm:text-sm text-gray-600">Specialization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;