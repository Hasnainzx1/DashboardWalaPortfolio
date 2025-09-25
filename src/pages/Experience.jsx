import React, { useState, useEffect } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa"; // FaSpinner is no longer needed

// Component for the Skeleton Experience Card
const ExperienceSkeletonCard = () => (
    // Skeleton Card structure matching the actual card's layout
    <div className="relative flex items-start">
        <div className="absolute left-2 sm:left-6 mt-2 w-4 h-4 rounded-full bg-gray-300 border-4 border-gray-100 z-10 animate-pulse"></div>
        <div className="ml-8 sm:ml-12 flex-1">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md animate-pulse">
                <div className="p-4 sm:p-6">
                    {/* Header Skeleton */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3 w-full">
                            <div className="p-3 rounded-lg bg-gray-300 w-10 h-10 flex-shrink-0"></div>
                            <div className="flex-1">
                                <div className="h-6 bg-gray-300 rounded w-3/4 mb-1"></div>
                                <div className="flex space-x-2 mt-1">
                                    <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                    <div className="h-4 bg-gray-300 rounded-full w-1/5"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 mt-2 border-t pt-4 border-gray-200">
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/5"></div>
                    </div>

                    {/* Technologies Skeleton */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


const Experience = () => {
    // --- Loading State for Horizontal Bar and Skeleton Cards (Copied from Project) ---
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

    // --- Removed the old Full-Screen Spinner Logic ---

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
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                    <div className="space-y-8">
                        {/* --- Conditional Rendering: SKELETON or ACTUAL CARDS --- */}
                        {isActivelyLoading ? (
                            // Render 3 Skeleton Cards while loading
                            Array.from({ length: 3 }).map((_, index) => (
                                <ExperienceSkeletonCard key={index} />
                            ))
                        ) : (
                            // Render Actual Experience Cards after loading
                            experiences.map((exp, index) => (
                                <div key={index} className="relative flex items-start">
                                    {/* Timeline dot */}
                                    <div className="absolute left-2 sm:left-6 mt-2 w-4 h-4 rounded-full bg-white border-4 border-black z-10"></div>

                                    {/* Content Card */}
                                    <div className="ml-8 sm:ml-12 flex-1">
                                        <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1">
                                            <div className="p-4 sm:p-6">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="p-2 sm:p-3 rounded-lg bg-gray-100 border border-gray-300 flex-shrink-0">
                                                            {exp.icon}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-lg sm:text-xl font-bold text-black">{exp.title}</h3>
                                                            <div className="flex flex-wrap items-center gap-2 sm:space-x-2 mt-1">
                                                                <span className="font-semibold text-gray-800 text-sm">{exp.company}</span>
                                                                <span className="px-2 py-0.5 bg-gray-200 text-gray-800 text-xs rounded-full font-medium border border-gray-300">
                                                                    {exp.type}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Details */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 mt-2 border-t pt-4 border-gray-100">
                                                    <div className="flex items-center space-x-2 text-gray-700">
                                                        <FaCalendarAlt className="text-gray-600 flex-shrink-0" />
                                                        <span className="text-xs sm:text-sm">{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-gray-700">
                                                        <FaMapMarkerAlt className="text-gray-600 flex-shrink-0" />
                                                        <span className="text-xs sm:text-sm">{exp.location}</span>
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
                            ))
                        )}
                        {/* ----------------------------------------------------- */}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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