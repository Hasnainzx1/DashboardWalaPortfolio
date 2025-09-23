import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImage, setModalImage] = useState(null); // <-- modal state

  const projects = [
    {
      id: 1,
      title: "Chatbot Application",
      description: "Interactive AI ChatBot using Next.js & TypeScript...",
      fullDescription: "This advanced chatbot application uses modern AI technologies...",
      technologies: ["Next JS", "Typescript", "Gemini Api", "Tailwind CSS", "MUI"],
      images: [
        "/Images/Chat.png",
        "/Images/Chat2.png",
      ],
      githubLink: "https://github.com/Hasnainzx1/chatBotByHuzaifa313",
      liveDemoLink: "https://chat-bot-by-huzaifa313-vbzi.vercel.app/",
      features: [
        "Real-time AI-powered chat responses",
        "Multi-language support for global users",
        "Context-aware conversation using Gemini API",
        "Sentiment analysis for understanding user mood",
        "User authentication and session management",
        "Rich message formatting (text, links, images)",
        "Typing indicators and chat history",
        "Scalable architecture with Next.js & TypeScript"
      ]
    },
    {
      id: 2,
      title: "Full Stack Job Finder Application",
      description: "Search, Post, Apply For Job Next js and Typescript with Firebase",
      fullDescription: "A comprehensive job finder application to help users discover and apply for new opportunities. The app provides a user-friendly interface to browse job listings and manage applications.",
      technologies: ["Next JS", "Typescript", "Gemini Api", "Tailwind CSS", "MUI"],
      images: [
        "/Images/login.png",
        "/Images/Mainjob.png",
        "/Images/review.png",
        "/Images/Post.png",
      ],
      githubLink: "https://github.com/Hasnainzx1/HireHunar",
      liveDemoLink: "https://hire-hunar.vercel.app/auth",
      features: [
        "User authentication and secure session management",
        "Employer & Job Seeker dashboards with role-based access",
        "Post and manage job listings in the IT sector",
        "Search and filter jobs by title, location, skills, and experience",
        "Real-time notifications for new job postings",
        "Apply for jobs with resume upload and profile integration",
        "Responsive design for web and mobile devices",
        "Full-stack architecture with Next.js, Node.js, MongoDB, and Tailwind CSS",
        "Admin panel for managing users, jobs, and platform content",
        "Optimized performance and deployment on Vercel"
      ]

    },
  ];

  const openProjectDetail = (project) => setSelectedProject(project);
  const closeProjectDetail = () => setSelectedProject(null);
  const openImageModal = (image) => setModalImage(image);
  const closeImageModal = () => setModalImage(null);

  if (selectedProject) {
    return (
      <div className="p-8 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={closeProjectDetail}
            className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Projects
          </button>

          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              <div>
                {/* Main Image */}
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg border border-gray-300 cursor-pointer"
                  onClick={() => openImageModal(selectedProject.images[0])} // <-- click to open modal
                />

                {/* Other images */}
                {selectedProject.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {selectedProject.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} ${index + 2}`}
                        className="w-full h-20 object-cover rounded border border-gray-300 cursor-pointer"
                        onClick={() => openImageModal(image)} // <-- click to open modal
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-3xl font-bold text-black mb-4">{selectedProject.title}</h1>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-black mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={selectedProject.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-black transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for image */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeImageModal}
          >
            <img
              src={modalImage}
              alt="Project"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking image
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg">A collection of my recent work and applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg hover:border-gray-400 transition-all duration-300 cursor-pointer group bg-white"
              onClick={() => openProjectDetail(project)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
