import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

// Component now accepts darkMode state as a prop
const Home = ({ darkMode }) => {
  // State to control the visibility and progress of the horizontal loading bar
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // 1. Start the progress immediately (simulating data fetch start)
    setLoadingProgress(30);

    // 2. Set the progress to 80% after 200ms
    const progressTimer1 = setTimeout(() => {
      setLoadingProgress(80);
    }, 200);

    // 3. Set a timeout for the full 1-second simulated load time
    const loadTimer = setTimeout(() => {
      // 4. Complete the progress bar (100%) and then hide it
      setLoadingProgress(100);
      setTimeout(() => setLoadingProgress(0), 300); // Wait 300ms for the animation to finish
    }, 1000); // Total simulated load time: 1 second

    // Cleanup function: Clear all timeouts if the component unmounts early
    return () => {
      clearTimeout(progressTimer1);
      clearTimeout(loadTimer);
    };
  }, []);

  // Define dynamic classes based on darkMode state
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const bgColor = darkMode ? 'bg-gray-900' : 'bg-white';
  const shadowColor = darkMode ? 'shadow-white/20' : 'shadow-black/50';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const textSecondary = darkMode ? 'text-gray-400' : 'text-gray-600';
  const buttonDarkBg = darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white border-white' : 'bg-white hover:bg-gray-200 text-black border-black';
  const linkHover = darkMode ? 'text-yellow-400 hover:underline' : 'text-teal-600 hover:underline';

  return (
    <div className={`w-full h-full overflow-y-auto custom-scrollbar ${bgColor} ${textColor}`}>

      {/* --- Horizontal Loading Bar --- */}
      {loadingProgress > 0 && loadingProgress < 100 && (
        <div 
          style={{ width: `${loadingProgress}%` }} 
          // Color is fixed (e.g., black) but could be dynamic too
          className={`fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out shadow-lg ${shadowColor}`} 
        />
      )}
      {loadingProgress === 100 && (
        <div 
          style={{ width: '100%' }} 
          className={`fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out opacity-0`} 
        />
      )}
      {/* ------------------------------------------- */}

      {/* Banner */}
      <div className="h-32 sm:h-40 md:h-48">
        <img
          src="/Images/Banner5.webp"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile */}
      <div className="relative -mt-12 md:-mt-16 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:justify-between items-start md:items-center">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">
          <img
            src="/Images/User.jpeg"
            alt="profile"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md"
          />
          <div className="text-center sm:text-left">
            {/* Name with contrasting background */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white bg-black/70 px-2 py-1 rounded-md inline-block">Ali Huzaifa Karimi</h1>
            <p className={`text-sm sm:text-base mt-2 ${textSecondary}`}>
              Full/Mern Stack Developer | React Specialist
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-4 md:mt-0 w-full md:w-auto flex justify-center md:justify-end">
          <a
            href="/CV.pdf" 
            download 
            className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2 rounded shadow-md border text-sm sm:text-base w-full md:w-auto transition-colors duration-200 ${buttonDarkBg}`}
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

        {/* Left Column - About Me & Work Experience */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">
          <h2 className={`text-xl font-semibold ${textColor}`}>About me</h2>
          <p className={`${textSecondary} text-sm sm:text-base`}>
            I'm Ali Huzaifa, a passionate Front-End Developer with over <strong>2 years of experience</strong> creating modern, responsive web applications. I specialize in <strong>React.js, Next.js, Tailwind CSS, and Material UI</strong>, and have collaborated with clients from UAE, Germany, and Bangladesh. Beyond development, I have a keen eye for UI/UX design and graphics, with experience in Photoshop, Illustrator, and LRN-certified design skills.
          </p>
          <p className={`${textSecondary} text-sm sm:text-base`}>
            I enjoy bringing interfaces to life using <strong>GSAP, Framer Motion</strong>, and have a basic knowledge of <strong>Three.js</strong> for interactive designs. Always eager to learn, I'm open to remote opportunities and love working in tech-driven, collaborative teams.
          </p>

          <Link to="/about" className={`${textColor} font-medium inline-block text-sm sm:text-base`}>
            Read more...
          </Link>

          {/* Work Experience */}
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
              <h3 className={`text-lg font-semibold ${textColor}`}>
                Work Experience
              </h3>
              <Link
                to="/experience"
                className={`text-sm ${linkHover}`}
              >
                Other Experiences
              </Link>
            </div>

            <div className={`flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 shadow rounded ${cardBg}`}>
              <FaBriefcase className={`text-xl sm:text-2xl mt-1 sm:mt-0 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-black'}`} />
              <div>
                <p className={`font-medium text-sm sm:text-base ${textColor}`}>Frontend Developer</p>
                <p className={`${textSecondary} text-sm`}>ITG Technologies</p>
                <p className={`${textSecondary} text-xs sm:text-sm`}>July 2025 – Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills & Projects */}
        <div className="space-y-6">

          {/* Skills Section */}
          <div>
            <h3 className={`text-lg font-semibold ${textColor}`}>My Skills</h3>
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
                  className={`border px-2 py-1 text-xs sm:text-sm inline-block rounded transition-colors duration-300 ease-in-out 
                    ${darkMode 
                      ? "text-gray-300 border-gray-600 hover:text-black hover:bg-yellow-400"
                      : "text-gray-800 border-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                >
                  {skill}
                </span>
              ))}
              
              {/* --- UPDATED LINK COMPONENT HERE --- */}
              <Link 
                to="/skills" 
                className={`border px-2 py-1 text-xs sm:text-sm inline-block rounded transition-colors duration-300 ease-in-out
                  ${darkMode 
                      ? "text-gray-300 border-gray-600 hover:text-black hover:bg-yellow-400"
                      : "text-gray-800 border-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
              >
                More..
              </Link>
              {/* ------------------------------------ */}
            </div>
          </div>

          {/* Most Recent Project */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
              <h3 className={`text-lg font-semibold ${textColor}`}>
                Most recent project
              </h3>
              <Link to="/projects" className={`text-sm ${linkHover}`}>
                See all projects
              </Link>
            </div>

            {/* First Project - Visible */}
            <div className={`p-3 sm:p-4 shadow rounded mb-4 ${cardBg}`}>
              <div className="flex items-start sm:items-center gap-3">
                <FaProjectDiagram className={`text-lg sm:text-xl mt-0.5 sm:mt-0 flex-shrink-0 ${darkMode ? 'text-yellow-400' : 'text-teal-600'}`} />
                <p className={`font-medium text-sm sm:text-base ${textColor}`}>AI Chatbot With Next & TypeScript</p>
              </div>
              <p className={`${textSecondary} mt-2 text-xs sm:text-sm`}>
                Interactive AI ChatBot using Next.js & TypeScript, allowing users to ask questions and get instant responses with a clean, professional interface.
              </p>
              <a 
                href="https://chat-bot-by-huzaifa313-vbzi.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-xs sm:text-sm mt-2 underline inline-block ${linkHover}`}
              >
                View
              </a>
            </div>

            {/* Second Project - Blurred */}
            <div className={`p-3 sm:p-4 shadow rounded relative opacity-60 blur-[1px] pointer-events-none ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="flex items-start sm:items-center gap-3">
                <FaProjectDiagram className={`${textSecondary} text-lg sm:text-xl mt-0.5 sm:mt-0 flex-shrink-0`} />
                <p className={`font-medium ${textSecondary} text-sm sm:text-base`}>See All Projects</p>
              </div>
              <p className={`${textSecondary} mt-2 text-xs sm:text-sm`}>
                This project is locked. View all projects to explore.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`text-center py-4 md:py-6 text-xs sm:text-sm border-t px-4 ${darkMode ? 'text-gray-500 border-gray-700' : 'text-gray-500 border-gray-200'}`}>
        © 2025 Ali Huzaifa. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;