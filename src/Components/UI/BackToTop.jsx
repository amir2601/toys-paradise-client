import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

/** Floating "back to top" button that springs in once you scroll down. */
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    initial={{ opacity: 0, y: 24, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.7 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                    className="group fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lift"
                >
                    <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-violet-500/30" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
