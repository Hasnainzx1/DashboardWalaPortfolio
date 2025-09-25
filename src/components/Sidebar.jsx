import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaChevronRight,
  FaBriefcase,
  FaPalette,
  FaTimes,
  FaBars,
  FaTools
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass =
    "flex items-center justify-between py-4 px-6 transition-all duration-300 group hover:bg-gray-50";
  const linkInnerClass = "flex items-center gap-4";

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", icon: FaHome, text: "Home" },
    { to: "/about", icon: FaUser, text: "About Me" },
    { to: "/projects", icon: FaProjectDiagram, text: "My Projects" },
    { to: "/experience", icon: FaBriefcase, text: "Experience" },
     { to: "/skills", icon: FaTools, text: "Skills" }, 
    { to: "/contact", icon: FaEnvelope, text: "Contact Me" }

  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-900 text-white shadow-lg"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        w-72 bg-white text-gray-800 h-screen shadow-sm border-r border-gray-100 flex flex-col fixed lg:sticky top-0 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gray-900">
              <FaPalette className="text-xl text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Me.</h1>
              <p className="text-gray-500 text-sm">Portfolio</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {navLinks.map(({ to, icon: Icon, text }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `${linkClass} ${isActive
                  ? "bg-gray-50 text-gray-900 border-r-2 border-gray-900 font-medium"
                  : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              <div className={linkInnerClass}>
                <div className={`p-2 ${linkClass.includes('active') ? 'bg-gray-200' : 'bg-gray-100'}`}>
                  <Icon className="text-lg" />
                </div>
                <span>{text}</span>
              </div>
              <FaChevronRight
                size={14}
                className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          ))}
        </nav>

       
        <div className="p-6 border-t border-gray-100">
          <div className="text-center text-gray-400 text-xs">
            <p>© 2025 Portfolio</p>
          </div>
        </div>
      </aside>

    
      <div className={`
        lg:ml-0 transition-all duration-300
        ${isOpen ? 'ml-72' : 'ml-0'}
      `}>
       
      </div>
    </>
  );
}