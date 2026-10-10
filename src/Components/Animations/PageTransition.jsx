import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

/**
 * Wraps every routed page so navigation fades + drifts between routes.
 * Pair with <AnimatePresence mode="wait"> keyed on the pathname.
 */
const PageTransition = ({ children, className = '' }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
