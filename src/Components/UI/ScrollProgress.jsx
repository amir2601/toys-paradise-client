import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient reading-progress bar pinned to the top of the viewport. */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 220,
        damping: 40,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400"
            aria-hidden="true"
        />
    );
};

export default ScrollProgress;
