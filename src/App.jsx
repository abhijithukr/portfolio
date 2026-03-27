import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Sticky Custom Modern Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-[#11111a]/80 backdrop-blur-md border border-[#22222a] px-6 py-3 rounded-full shadow-2xl">
        <ul className="flex items-center space-x-6 md:space-x-8 text-sm md:text-base font-semibold">
          <li><a href="#" className="hover:text-primary transition-colors text-white">Home</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors text-white">About</a></li>
          <li><a href="#education" className="hover:text-primary transition-colors text-white">Education</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors text-white">Contact</a></li>
        </ul>
      </nav>

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
