import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // LocalStorage se theme yaad rakho
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      {/* yahan class add karo */}
      <div className={darkMode ? "dark" : ""}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
