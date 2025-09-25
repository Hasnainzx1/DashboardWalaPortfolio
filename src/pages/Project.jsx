import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // FaSpinner is no longer needed

const Project = () => {
    // --- Loading State for Horizontal Bar and Skeleton Cards ---
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

    const isActivelyLoading = loadingProgress > 0 && loadingProgress < 100;
    // ------------------------------------------------------------

    const [selectedProject, setSelectedProject] = useState(null);
    const [modalImage, setModalImage] = useState(null); // <-- modal state

    const projects = [
        {
            id: 1,
            title: "Chatbot Application",
            description: "Interactive AI ChatBot using Next.js & TypeScript...",
            fullDescription: "This advanced chatbot application uses modern AI technologies, powered by the Gemini API, to provide real-time, context-aware conversational responses. Built with Next.js and TypeScript, it ensures high performance and type safety, delivering a professional and fluid user experience.",
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
            fullDescription: "A comprehensive, full-stack job finder application built with Next.js and TypeScript. It offers complete role-based access for employers (posting jobs) and job seekers (searching and applying), using Firebase for authentication and real-time database management.",
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

    // --- Project Detail View (No Skeleton needed here, only in the grid) ---
    if (selectedProject) {
        return (
            <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
                {/* --- Horizontal Loading Bar --- */}
                {isActivelyLoading && (
                    <div 
                    style={{ width: `${loadingProgress}%` }} 
                    className="fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out shadow-lg shadow-black/50" 
                    />
                )}
                {loadingProgress === 100 && (
                    <div 
                    style={{ width: '100%' }} 
                    className="fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out opacity-0" 
                    />
                )}
                {/* ------------------------------- */}

                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={closeProjectDetail}
                        className="mb-6 flex items-center space-x-2 text-black hover:text-gray-700 transition-colors font-medium text-sm sm:text-base"
                    >
                        &larr; Back to Projects
                    </button>

                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-8">

                            {/* Image Gallery Column */}
                            <div>
                                {/* Main Image */}
                                <img
                                    src={selectedProject.images[0]}
                                    alt={selectedProject.title}
                                    className="w-full h-auto max-h-96 object-contain rounded-lg border border-gray-300 cursor-pointer shadow-md"
                                    onClick={() => openImageModal(selectedProject.images[0])}
                                />

                                {/* Other images thumbnail section */}
                                {selectedProject.images.length > 1 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                                        {selectedProject.images.slice(1).map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${selectedProject.title} ${index + 2}`}
                                                className="w-full h-20 object-cover rounded border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity"
                                                onClick={() => openImageModal(image)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Text Content Column */}
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">{selectedProject.title}</h1>
                                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">{selectedProject.fullDescription}</p>

                                <div className="mb-6">
                                    <h3 className="text-lg font-bold text-black mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-xs sm:text-sm shadow-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                                    >
                                        <FaGithub />
                                        <span>View Code</span>
                                    </a>
                                    <a
                                        href={selectedProject.liveDemoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center space-x-2 px-5 py-2 border border-gray-300 text-black rounded-lg hover:border-black hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Key Features Section */}
                        <div className="p-4 sm:p-8 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base">
                                {selectedProject.features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
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
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                        onClick={closeImageModal}
                    >
                        <img
                            src={modalImage}
                            alt="Project"
                            className="max-h-full max-w-full md:max-h-[90vh] md:max-w-[90vw] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking image
                        />
                    </div>
                )}
            </div>
        );
    }

    // --- Main Project Grid View ---
    return (
        <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
            {/* --- Horizontal Loading Bar --- */}
            {isActivelyLoading && (
                <div 
                    style={{ width: `${loadingProgress}%` }} 
                    className="fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out shadow-lg shadow-black/50" 
                />
            )}
            {loadingProgress === 100 && (
                <div 
                    style={{ width: '100%' }} 
                    className="fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-300 ease-in-out opacity-0" 
                />
            )}
            {/* ------------------------------- */}

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                        My Projects
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">A collection of my recent work and applications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* --- Conditional Rendering: SKELETON or ACTUAL CARDS --- */}
                    {isActivelyLoading ? (
                        // Render 3 Skeleton Cards while loading
                        Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl bg-white shadow-md animate-pulse"
                            >
                                <div className="w-full h-56 bg-gray-300 rounded-t-xl"></div>
                                <div className="p-5 sm:p-6">
                                    <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Render Actual Project Cards after loading
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="border border-gray-200 rounded-xl hover:border-black transition-all duration-300 cursor-pointer group bg-white shadow-md hover:shadow-xl"
                                onClick={() => openProjectDetail(project)}
                            >
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <div className="p-5 sm:p-6">
                                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <span className="text-sm font-semibold text-black hover:text-gray-700 transition-colors">
                                        View Details &rarr;
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                    {/* ----------------------------------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default Project;