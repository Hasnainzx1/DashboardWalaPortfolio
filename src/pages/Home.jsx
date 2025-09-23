import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white text-gray-900 custom-scrollbar">
      {/* Banner */}
      <div className="h-48">
        <img
          src="/Images/Banner5.webp"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile */}
      <div className="relative -mt-16 px-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center gap-6">
          <img
            src="/Images/User.jpeg"
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">Ali Huzaifa </h1>
            <p className="text-gray-600">
              Full/Mern Stack Developer | React Specialist
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <a
            href="/CBV-React.pdf" 
            download 
            className="flex items-center gap-2 bg-white hover:bg-gray-200 text-black px-5 py-2 rounded shadow-md border border-black"
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </div>


      <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">About me</h2>
          <p className="text-gray-700">
            I’m Ali Huzaifa, a passionate Front-End Developer with over 2 years of experience creating modern, responsive web applications. I specialize in React.js, Next.js, Tailwind CSS, and Material UI, and have collaborated with clients from UAE, Germany, and Bangladesh. Beyond development, I have a keen eye for UI/UX design and graphics, with experience in Photoshop, Illustrator, and LRN-certified design skills.
          </p>
          <p className="text-gray-700">
            I enjoy bringing interfaces to life using GSAP, Framer Motion, and have a basic knowledge of Three.js for interactive designs. Always eager to learn, I’m open to remote opportunities and love working in tech-driven, collaborative teams.
          </p>


          <Link to="/about" className="text-gray-800 font-medium">
            Read more...
          </Link>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Work Experience
              </h3>
              <Link
                to="/experience"
                className="text-sm text-teal-600 hover:underline"
              >
                Other Eperiences
              </Link>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 shadow rounded">
              <FaBriefcase className="text-black text-2xl" />
              <div>
                <p className="font-medium">Frontend Developer
                </p>
                <p className="text-gray-600">ITG Technologies</p>
                <p className="text-gray-500 text-sm">July 2025 – Present</p>
              </div>
            </div>
          </div>
        </div>


        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold text-gray-900">My Skills</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Full Stack Development",
                "Front-End UI Development",
                "React Developer",
                "MERN STACK",
                "Git & Version Control",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="text-gray-800 border px-3 py-1 text-sm 
                   hover:text-white hover:bg-gray-800 
                   transition-colors duration-300 ease-in-out"
                >
                  {skill}
                </span>

              ))}
              <button className="text-gray-800 border px-3 py-1 text-sm 
                   hover:text-white hover:bg-gray-800 
                   transition-colors duration-300 ease-in-out">Other..</button>
            </div>
          </div>


          {/* Most Recent Project */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Most recent project
              </h3>
              <Link to="/projects" className="text-teal-600 text-sm">
                See all projects
              </Link>
            </div>

            {/* First Project - Visible */}
            <div className="p-4 bg-gray-50 shadow rounded mb-4">
              <div className="flex items-center gap-3">
                <FaProjectDiagram className="text-teal-600 text-xl" />
                <p className="font-medium">AI Chatbot With Next & Typeascript
                </p>

              </div>
              <p className="text-gray-700 mt-2 text-sm">
                Interactive AI ChatBot using Next.js & TypeScript, allowing users to ask questions and get instant responses with a clean, professional interface.
              </p>
              <a href="https://chat-bot-by-huzaifa313-vbzi.vercel.app/" target="_blank" className="text-sm mt-2 underline">View</a>
            </div>

            {/* Second Project - Blurred */}
            <div className="p-4 bg-gray-100 shadow rounded relative opacity-60 blur-[1px] pointer-events-none">
              <div className="flex items-center gap-3">
                <FaProjectDiagram className="text-gray-500 text-xl" />
                <p className="font-medium text-gray-500">See All Projects</p>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                This project is locked. View all projects to explore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 text-sm border-t">
        © 2025 Ali Huzaifa . All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
