import React from 'react';

interface SparklesCoreProps {
    id?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    particleDensity?: number;
    className?: string;
    particleColor?: string;
}

// This is a placeholder component to allow the HeroSection to render.
// The original component likely uses a particle library for the sparkle effect.
const SparklesCore: React.FC<SparklesCoreProps> = ({ className }) => {
    return (
        <div className={className} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            {/* Placeholder for sparkle effect */}
        </div>
    );
};

export default SparklesCore;
