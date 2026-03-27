import React from 'react';
import BorderGlow from './react-bits/BorderGlow';
import { motion } from 'framer-motion';

const projectsData = [
    {
        title: "Campus Connect",
        description: "A comprehensive platform to bridge the gap between students and campus resources. Built with modern web technologies.",
        link: "https://campus-connect-zy69.vercel.app/",
        tags: ["React", "Website", "Vercel"]
    },
    {
        title: "Laundry Link",
        description: "An innovative laundry management application for CET students. Streamlines the booking and tracking process.",
        link: "https://laundry-link-cet.netlify.app/",
        tags: ["Web App", "Netlify", "Management"]
    },
    {
        title: "St. Mary's Dental Clinic",
        description: "A premium dental clinic website demo built for a real business client, featuring GSAP animations and appointment booking.",
        link: "#",
        tags: ["Client Project", "Demo", "UI/UX"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative bg-[#060010] py-24 min-h-screen z-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of my recent work, including real-world applications and client demos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="h-full"
                        >
                            <div className="h-full transform transition-transform hover:-translate-y-2 duration-300">
                                <BorderGlow
                                    edgeSensitivity={30}
                                    glowColor="#fc6600"
                                    backgroundColor="#11111a"
                                    borderRadius={24}
                                    glowRadius={150}
                                    glowIntensity={0.8}
                                    coneSpread={25}
                                    style={{ height: '100%' }}
                                >
                                    <div className="p-8 h-full flex flex-col pointer-events-auto">
                                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-xs font-semibold tracking-wider uppercase bg-[#22222a] text-primary px-3 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex w-full items-center justify-center bg-transparent border border-gray-700 hover:border-primary text-white hover:text-primary font-bold py-3 px-6 rounded-xl transition-colors duration-300 pointer-events-auto z-50 relative"
                                            onClick={(e) => { e.stopPropagation(); }}
                                        >
                                            View Live Project
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </BorderGlow>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
