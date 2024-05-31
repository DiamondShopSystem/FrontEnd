
import React from 'react';
import { motion } from 'framer-motion';
import './Sparkle.css';

const Sparkle = () => {
    const sparkles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 1
    }));

    return (
        <div className="sparkle-container">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="sparkle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut'
                    }}
                    style={{ top: sparkle.y, left: sparkle.x }}
                />
            ))}
        </div>
    );
};

export default Sparkle;
