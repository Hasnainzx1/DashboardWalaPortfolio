import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // FaSpinner is no longer needed

// Component for the Skeleton Info Card
const ContactInfoSkeleton = () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-2/3 mb-6"></div>
        
        <div className="space-y-4">
            {/* 3 Info Items Skeleton */}
            {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-gray-300 w-10 h-10"></div>
                    <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-1/4 mb-1"></div>
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-8">
            <div className="h-5 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="flex space-x-4">
                <div className="p-3 bg-gray-300 rounded-lg w-10 h-10"></div>
                <div className="p-3 bg-gray-300 rounded-lg w-10 h-10"></div>
            </div>
        </div>
    </div>
);

// Component for the Skeleton Form
const ContactFormSkeleton = () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-1/4 mb-6"></div>
        
        <div className="space-y-6">
            {/* Name/Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 hidden md:block"></div>
                <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
                <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
            </div>

            {/* Subject Field */}
            <div>
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-12 bg-gray-300 rounded-lg w-full"></div>
            </div>

            {/* Message Field */}
            <div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-32 bg-gray-300 rounded-lg w-full"></div>
            </div>

            {/* Button */}
            <div className="h-12 bg-gray-400 rounded-lg w-full"></div>
        </div>
    </div>
);


const Contact = () => {
    // --- Loading State for Horizontal Bar and Skeleton Cards ---
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        // 1. Start the progress immediately
        setLoadingProgress(30);

        // 2. Set the progress to 80% after 200ms
        const progressTimer1 = setTimeout(() => {
            setLoadingProgress(80);
        }, 200);

        // 3. Set a timeout for the full 2-second simulated load time
        const loadTimer = setTimeout(() => {
            // 4. Complete the progress bar (100%) and then hide it
            setLoadingProgress(100);
            setTimeout(() => setLoadingProgress(0), 300); // Wait 300ms for the animation to finish
        }, 2000); // Total simulated load time: 2 seconds

        // Cleanup function: Clear all timeouts if the component unmounts early
        return () => {
            clearTimeout(progressTimer1);
            clearTimeout(loadTimer);
        };
    }, []);

    const isActivelyLoading = loadingProgress > 0 && loadingProgress < 100;
    // ------------------------------------------------------------


    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    // State for form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // Removed old isLoading state and its useEffect

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual email service)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 3 seconds
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-gray-700" />,
            label: "Location",
            value: "Karachi, Pakistan"
        },
        {
            icon: <FaEnvelope className="text-gray-700" />,
            label: "Email",
            value: "alihuzaifa2112006@gmail.com"
        },
        {
            icon: <FaPhone className="text-gray-700" />,
            label: "Phone",
            value: "+923178386880"
        }
    ];

    // Removed the old Full-Screen Spinner Logic

    return (
        <div className="p-8 bg-white min-h-screen">
            
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
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 text-lg">Let's discuss your next project</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* --- Conditional Rendering: Contact Information --- */}
                    <div className="lg:col-span-1">
                        {isActivelyLoading ? (
                            <ContactInfoSkeleton />
                        ) : (
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-black mb-6">Contact Information</h3>

                                <div className="space-y-4">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="p-3 rounded-lg bg-gray-100 border border-gray-300">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600">{item.label}</p>
                                                <p className="text-black font-medium">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <div className="mt-8">
                                    <h4 className="text-lg font-bold text-black mb-4">Follow Me</h4>
                                    <div className="flex space-x-4">
                                        <a target="_blank" href="https://www.linkedin.com/in/ali-huzaifa-92137a292/" className="p-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                                            <FaLinkedin className="text-gray-700" />
                                        </a>
                                        {/* You can uncomment and add your GitHub link here */}
                                        <a target="_blank" href="https://github.com/Hasnainzx1" className="p-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
                                            <FaGithub className="text-gray-700" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* ----------------------------------------------------- */}


                    {/* --- Conditional Rendering: Send Message Form --- */}
                    <div className="lg:col-span-2">
                        {isActivelyLoading ? (
                            <ContactFormSkeleton />
                        ) : (
                            <div className="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-black mb-6">Send Message</h3>

                                {isSubmitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-300 text-green-800 rounded-lg">
                                        <p className="font-medium">✅ Message sent successfully! I will get back to you shortly.</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaUser className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaEnvelope className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                    {/* ----------------------------------------------------- */}
                </div>

                {/* Additional Info (No skeleton needed here as it's small) */}
                <div className="mt-12 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-gray-200 rounded-lg">
                            <h4 className="font-bold text-black mb-2">Response Time</h4>
                            <p className="text-gray-600">Within 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;