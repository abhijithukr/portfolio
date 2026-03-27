import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    {
        period: "2024 - Present",
        school: "Govt Engineering College Trivandrum",
        degree: "BTech Computer Science",
        description: "Currently pursuing my bachelor's degree, focusing on core CS fundamentals, web development, and AI technologies."
    },
    {
        period: "Grade 6 to 12",
        school: "Jawahar Navodaya Vidyalaya Kottayam",
        degree: "Secondary & Higher Secondary Education",
        description: "Developed a strong foundation in science and mathematics, along with early coding exposure."
    },
    {
        period: "Up to Grade 6",
        school: "Bharatheeya Vidya Mandir",
        degree: "Elementary Education",
        description: "Formative years of learning with a focus on holistic development."
    }
];

export default function Education() {
    return (
        <section id="education" className="relative bg-[#060010] py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-gray-800 ml-4 md:ml-12 border-dashed">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-12 ml-8 relative"
                        >
                            <div className="absolute -left-10 w-4 h-4 bg-primary rounded-full border-4 border-[#060010] mt-1.5" />
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
                                <h3 className="text-2xl font-bold text-white">{item.school}</h3>
                                <span className="text-primary font-mono text-sm tracking-wider bg-orange-900/30 px-3 py-1 rounded-full uppercase w-max">
                                    {item.period}
                                </span>
                            </div>
                            <p className="text-xl text-gray-300 font-medium mb-3">{item.degree}</p>
                            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
