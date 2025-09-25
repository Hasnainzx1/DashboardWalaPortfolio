import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaCertificate, FaSpinner } from "react-icons/fa";

const About = () => {
  // State for initial component loading
  const [isLoading, setIsLoading] = useState(true); 

  // Effect to simulate initial data fetching/loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second initial loading delay

    return () => clearTimeout(timer);
  }, []);

  // --- Start of Initial Loading Screen Logic ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <FaSpinner className="text-4xl text-gray-900 animate-spin" />
        <span className="ml-3 text-xl font-medium text-gray-900">Loading Profile...</span>
      </div>
    );
  }
  // --- End of Initial Loading Screen Logic ---

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 text-gray-900 custom-scrollbar p-4 sm:p-6"> {/* Adjusted padding for smaller screens */}

      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8"> {/* Adjusted margin for smaller screens */}
        <img
          src="/Images/User2.jpeg"
          alt="ahk"
          // Enhanced image responsiveness: w-24/h-24 on mobile, scales up on larger screens
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg" 
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ali Huzaifa </h1> {/* Adjusted text size */}
        <p className="text-sm sm:text-base text-gray-600">Full/Mern Stack Developer | React Specialist</p> {/* Adjusted text size */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <FaMapMarkerAlt className="text-gray-500 text-sm sm:text-base" />
          <span className="text-sm sm:text-base text-gray-600">Karāchi, Sindh, Pakistan</span> {/* Adjusted text size */}
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8"> {/* Adjusted spacing */}

        {/* Main About Section */}
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md"> {/* Adjusted padding and shadow */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">About Me</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base"> {/* Adjusted text size */}
            <p className="text-gray-700">
              I’m Ali Huzaifa, a passionate Front-End Developer with over **2 years of experience** building modern, responsive web applications. I specialize in **React.js, Next.js, Tailwind CSS, and Material UI**, delivering clean, interactive, and user-friendly interfaces. Throughout my career, I have collaborated with clients from UAE, Germany, and Bangladesh, helping them transform ideas into real-world web solutions with a strong focus on usability and aesthetics.
            </p>
            <p className="text-gray-700">
              Beyond coding, I am deeply interested in UI/UX design and graphics, holding experience in **Photoshop, Illustrator**, and LRN-certified design skills. I enjoy bringing interfaces to life with **GSAP and Framer Motion**, and have foundational knowledge of **Three.js** to create interactive 3D experiences. My work also includes freelance projects, team collaborations, and problem-solving in dynamic environments.
            </p>
            <p className="text-gray-700">
              Constantly eager to learn and adopt new technologies, I thrive in collaborative, tech-driven teams and open to remote opportunities that challenge me to grow further. Outside of development, I find inspiration in design, creativity, and exploring innovative ways to enhance user experiences across web applications.
            </p>
          </div>
        </div>

        
        {/* Education Section */}
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Intermediate In ICS Department</h3>
              <p className="text-gray-600 text-sm sm:text-base">NCS - National College Of Science</p>
              <p className="text-gray-500 text-xs sm:text-sm">2020 - 2022</p>
            </div>
          </div>
        </div>

        
        {/* Certifications Section */}
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FaCertificate className="text-green-600" />
            Certifications
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Mern/Full Stack Developer</h3>
              <p className="text-gray-600 text-sm sm:text-base">IT Center - Bano Qabil </p>
              <p className="text-gray-500 text-xs sm:text-sm">Issued March 2023</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Graphics Designer</h3>
              <p className="text-gray-600 text-sm sm:text-base">IT Center - Bano Qabil </p>
              <p className="text-gray-500 text-xs sm:text-sm">Issued March 2022</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 sm:py-8 text-xs sm:text-sm mt-6 sm:mt-8"> {/* Adjusted padding and text size */}
        © 2025 Ali Huzaifa. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;