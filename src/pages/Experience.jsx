import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Work Experience</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 shadow rounded">
          <FaBriefcase className="text-orange-500 text-2xl" />
          <div>
            <p className="font-medium">Frontend Developer - Intern</p>
            <p className="text-gray-600">Genesys Tech Hub</p>
            <p className="text-gray-500 text-sm">May 2021 – Present</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 shadow rounded">
          <FaBriefcase className="text-orange-500 text-2xl" />
          <div>
            <p className="font-medium">Flutter Engineer</p>
            <p className="text-gray-600">Freelance</p>
            <p className="text-gray-500 text-sm">2020 – 2021</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 shadow rounded">
          <FaBriefcase className="text-orange-500 text-2xl" />
          <div>
            <p className="font-medium">Mobile App Developer</p>
            <p className="text-gray-600">Wildlife App Startup</p>
            <p className="text-gray-500 text-sm">2019 – 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
