import React from 'react';

export default function GradualBlur({
    target = "parent",
    position = "bottom",
    height = "7rem",
    strength = 2,
    divCount = 5,
    curve = "bezier",
    exponential = true,
    opacity = 1
}) {
    const getBlurStyle = (index) => {
        // Calculate a progressive blur
        const factor = exponential ? Math.pow(index / divCount, 2) : index / divCount;
        const currentBlur = factor * strength;
        const currentOpacity = 1 - (index / divCount);

        return {
            backdropFilter: `blur(${currentBlur}px)`,
            WebkitBackdropFilter: `blur(${currentBlur}px)`,
            maskImage: `linear-gradient(to ${position}, black, transparent)`,
            opacity: currentOpacity * opacity
        };
    };

    return (
        <div
            className="absolute left-0 right-0 pointer-events-none z-50 flex flex-col"
            style={{
                [position]: 0,
                height: height
            }}
        >
            {[...Array(divCount)].map((_, i) => (
                <div
                    key={i}
                    className="flex-1 w-full"
                    style={getBlurStyle(i)}
                />
            ))}
        </div>
    );
}
