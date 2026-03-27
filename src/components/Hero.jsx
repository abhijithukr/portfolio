import React from 'react';
import Cubes from './react-bits/Cubes';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
            {/* 3D Cubes Background from React Bits */}
            <Cubes
                gridSize={10}
                maxAngle={45}
                radius={3}
                borderStyle="2px dashed rgba(252, 102, 0, 0.4)"
                faceColor="#060010"
                rippleColor="#ea580c"
                rippleSpeed={1.5}
                autoAnimate
                rippleOnClick
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-primary tracking-widest uppercase font-semibold text-sm md:text-base mb-4"
                >
                    Welcome to my portfolio
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Hi, I am <span className="text-primary inline-block hover:scale-105 transition-transform cursor-pointer">Abhijithu K R</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    A passionate Computer Science student and web developer who loves building real-world projects
                    from scratch. Exploring dynamic UI, AI integrations, and modern full-stack architectures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-300">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-colors duration-300">
                        Get in Touch
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
