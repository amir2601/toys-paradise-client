import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import ScrollProgress from '../Components/UI/ScrollProgress';
import BackToTop from '../Components/UI/BackToTop';
import ScrollToTop from '../Components/UI/ScrollToTop';
import Newsletter from '../Components/UI/Newsletter';

const Main = () => {
    const location = useLocation();
    // Capture the matched route element so AnimatePresence can keep the
    // outgoing page mounted with its own content while it animates out.
    const outlet = useOutlet();

    return (
        <div className='flex min-h-screen flex-col bg-base-200'>
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />

            <main className='flex-1'>
                <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                    >
                        {outlet}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Newsletter />
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Main;