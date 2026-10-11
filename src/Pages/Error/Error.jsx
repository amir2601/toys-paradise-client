import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSmileWink } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';
import PageTransition from '../../Components/Animations/PageTransition';

const Error = () => {
    useTitle('Error');
    return (
        <PageTransition>
            <div className='container-x section'>
                <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-[2rem] bg-neutral text-center shadow-lift">
                    <div className="pattern-dots absolute inset-0 opacity-40"></div>
                    <motion.div
                        className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    ></motion.div>
                    <motion.div
                        className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl"
                        animate={{ scale: [1.2, 1, 1.2] }}
                        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    ></motion.div>

                    <div className="relative z-10 px-6">
                        <motion.p
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-7xl font-extrabold leading-none text-transparent sm:text-9xl [background:linear-gradient(135deg,#C4B5FD,#FBBF24,#F0ABFC);-webkit-background-clip:text;background-clip:text]"
                        >
                            404
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-4xl"
                        >
                            You are all alone here
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mx-auto mt-3 max-w-md text-sm text-slate-400"
                        >
                            This page has rolled off the toy shelf. Let&apos;s get you back to the fun.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45, duration: 0.5 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-3"
                        >
                            <Link to="/" className="btn btn-shine pressable group gap-2 rounded-full border-0 bg-amber-400 px-8 font-bold text-amber-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:bg-amber-300">
                                <FaHome className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                Back To Home
                            </Link>
                            <Link
                                to="/allToys"
                                className="pressable flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white hover:text-violet-700"
                            >
                                <FaSmileWink />
                                Browse Toys
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Error;