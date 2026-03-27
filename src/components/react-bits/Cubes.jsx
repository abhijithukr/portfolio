import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Cubes({
    gridSize = 8,
    maxAngle = 45,
    radius = 3,
    borderStyle = "2px dashed #ea580c",
    faceColor = "#0a0a0a",
    rippleColor = "#fc6600",
    rippleSpeed = 1.5,
    autoAnimate = true,
    rippleOnClick = true
}) {
    const [activeCube, setActiveCube] = useState(null);

    useEffect(() => {
        if (autoAnimate) {
            const interval = setInterval(() => {
                const x = Math.floor(Math.random() * gridSize);
                const y = Math.floor(Math.random() * gridSize);
                setActiveCube(`${x}-${y}`);

                // Reset after speed
                setTimeout(() => setActiveCube(null), 1000 / rippleSpeed);
            }, 2000 / rippleSpeed);
            return () => clearInterval(interval);
        }
    }, [autoAnimate, gridSize, rippleSpeed]);

    const handleCubeClick = (x, y) => {
        if (rippleOnClick) {
            setActiveCube(`${x}-${y}`);
            setTimeout(() => setActiveCube(null), 1000 / rippleSpeed);
        }
    };

    const cubes = [];
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const id = `${x}-${y}`;
            const isActive = activeCube === id;

            cubes.push(
                <motion.div
                    key={id}
                    onClick={() => handleCubeClick(x, y)}
                    className="relative cube-container cursor-pointer transition-transform hover:scale-105"
                    style={{
                        width: `${100 / gridSize}%`,
                        paddingBottom: `${100 / gridSize}%`, // Aspect ratio 1:1
                        perspective: '1000px'
                    }}
                    animate={{
                        rotateX: isActive ? maxAngle : 0,
                        rotateY: isActive ? maxAngle : 0,
                        scale: isActive ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div
                        className="absolute inset-2 border"
                        style={{
                            border: borderStyle,
                            backgroundColor: isActive ? rippleColor : faceColor,
                            borderRadius: `${radius}px`,
                            transition: 'background-color 0.3s ease'
                        }}
                    />
                </motion.div>
            );
        }
    }

    return (
        <div className="absolute inset-0 overflow-hidden opacity-40 z-0">
            <div
                className="w-full h-full flex flex-wrap"
                style={{
                    transform: `rotateX(60deg) rotateZ(-45deg) scale(1.5)`,
                    transformStyle: 'preserve-3d'
                }}
            >
                {cubes}
            </div>
            {/* Overlay gradient to fade edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060010]/80 to-[#060010] z-10 pointer-events-none" />
        </div>
    );
}
