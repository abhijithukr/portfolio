import React from 'react';
import GradualBlur from './react-bits/GradualBlur';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative bg-[#060010] py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-lg leading-relaxed bg-[#11111a] p-8 rounded-2xl border border-[#22222a]"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">👤 Profile & Background</h3>
                        <p>
                            Born on <span className="text-primary font-medium">14th April 2007 at St. Jude Hospital, Ayarkunnam</span>,
                            I am currently pursuing my BTech in Computer Science at the prestigious
                            <span className="text-white font-medium"> Govt Engineering College Trivandrum</span>.
                        </p>
                        <p>
                            I am based in Thiruvananthapuram, Kerala, and actively learning and building with HTML, CSS, React, and modern web development basics.
                            I thrive on building websites from scratch and taking them from concept to production.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6 text-lg leading-relaxed bg-[#11111a] p-8 rounded-2xl border border-[#22222a]"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">🚀 My Mindset & Interests</h3>
                        <ul className="list-disc pl-5 space-y-3">
                            <li>Entrepreneurial thinking: reaching out to clients and planning project scopes.</li>
                            <li>Experimenting with bleeding-edge AI tools (Claude, NVIDIA APIs).</li>
                            <li>Deep learning style: debugging code relentlessly and always asking <span className="text-primary inline-italic">"why"</span> something works or doesn't.</li>
                            <li>Future goals include building real-world projects, PWAs, and full-stack solutions.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Scroll blur effect at the bottom for smooth transition */}
            <GradualBlur
                target="parent"
                position="bottom"
                height="12rem"
                strength={3}
                divCount={6}
                curve="bezier"
                exponential
                opacity={1}
            />
        </section>
    );
}
