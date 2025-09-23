import React from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 text-gray-900 custom-scrollbar p-6">

      {/* Header Section */}
      <div className="text-center mb-8">
        <img
          src="/Images/User2.jpeg"
          alt="ahk"
          className="w-30 h-30 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-900">Ali Huzaifa </h1>
        <p className="text-gray-600">Full/Mern Stack Developer | React Specialist</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <FaMapMarkerAlt className="text-gray-500" />
          <span className="text-gray-600">Karāchi, Sindh, Pakistan</span>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Main About Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-gray-700">
              I’m Ali Huzaifa, a passionate Front-End Developer with over 2 years of experience building modern, responsive web applications. I specialize in React.js, Next.js, Tailwind CSS, and Material UI, delivering clean, interactive, and user-friendly interfaces. Throughout my career, I have collaborated with clients from UAE, Germany, and Bangladesh, helping them transform ideas into real-world web solutions with a strong focus on usability and aesthetics.
            </p>
            <p className="text-gray-700">
              Beyond coding, I am deeply interested in UI/UX design and graphics, holding experience in Photoshop, Illustrator, and LRN-certified design skills. I enjoy bringing interfaces to life with GSAP and Framer Motion, and have foundational knowledge of Three.js to create interactive 3D experiences. My work also includes freelance projects, team collaborations, and problem-solving in dynamic environments.
            </p>
            <p className="text-gray-700">
              Constantly eager to learn and adopt new technologies, I thrive in collaborative, tech-driven teams and open to remote opportunities that challenge me to grow further. Outside of development, I find inspiration in design, creativity, and exploring innovative ways to enhance user experiences across web applications.
            </p>




          </div>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Intermediate In ICS Department</h3>
              <p className="text-gray-600">NCS - National College Of Science</p>
              <p className="text-gray-500 text-sm">2020 - 2022</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FaCertificate className="text-green-600" />
            Certifications
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">Mern/Full Stack Developer</h3>
              <p className="text-gray-600">IT Center - Bano Qabil </p>
              <p className="text-gray-500 text-sm">Issued March 2023</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">Graphics Designer</h3>
              <p className="text-gray-600">IT Center - Bano Qabil </p>
              <p className="text-gray-500 text-sm">Issued March 2022</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-700">
            <p><span className="font-medium">Location:</span> Karāchi, Sindh, Pakistan</p>
            <p><span className="font-medium">Professional Status:</span> Available for opportunities</p>
            <p><span className="font-medium">Focus Areas:</span> Flutter Development, Mobile Apps, UI/UX</p>
          </div>
        </div> */}

      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 text-sm mt-8">
        © 2025 Abdullah Chauhan. All Rights Reserved.
      </footer>
    </div>
  );
};

export default About;