import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BorderGlow({
    children,
    edgeSensitivity = 30,
    glowColor = "#fc6600",
    backgroundColor = "#060010",
    borderRadius = 28,
    glowRadius = 150,
    glowIntensity = 1,
    coneSpread = 25,
    animated = false,
    colors = ['#fc6600', '#f97316', '#fb923c'],
    style = {}
}) {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: -1000, y: -1000 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const isNearEdge =
            e.clientX < rect.left + edgeSensitivity ||
            e.clientX > rect.right - edgeSensitivity ||
            e.clientY < rect.top + edgeSensitivity ||
            e.clientY > rect.bottom - edgeSensitivity;

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

        // Only show glow if near edges
        if (isNearEdge) {
            setOpacity(glowIntensity);
        } else {
            setOpacity(0.3); // Subtle glow inside
        }
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    // Convert spacing to gradient stopping points based on cone spread
    const stop1 = coneSpread;
    const stop2 = coneSpread * 2;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden w-full h-full p-[2px] z-0"
            style={{ borderRadius: `${borderRadius}px`, ...style }}
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(${glowRadius}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
                }}
            />
            <div
                className="relative z-10 w-full h-full transition-colors duration-300"
                style={{
                    backgroundColor,
                    borderRadius: `${borderRadius - 2}px`,
                }}
            >
                {children}
            </div>
        </div>
    );
}
