import React from 'react';
import bannerImg from '../../../assets/banner.jpg';
import galleryShot from '../../../assets/gallary/photo2.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaStar } from 'react-icons/fa';
import Counter from '../../../Components/Animations/Counter';
import { heroFloats } from '../../../Data/siteData';

const ease = [0.16, 1, 0.3, 1];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const Banner = () => {
    const stats = [
        { value: 250, suffix: '+', label: 'Toy Cars' },
        { value: 5, suffix: 'K+', label: 'Happy Kids' },
        { value: 4.9, decimals: 1, suffix: '', label: 'Avg. Rating' },
    ];

    return (
        <section className="relative overflow-hidden rounded-[2rem] shadow-lift">
            {/* background */}
            <img src={bannerImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-950/95 via-violet-900/80 to-fuchsia-800/45"></div>
            <div className="pattern-dots absolute inset-0 opacity-30"></div>

            {/* glow orbs */}
            <motion.div
                className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-fuchsia-400/30 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="relative z-10 px-6 py-14 sm:px-12 md:py-20 lg:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* copy */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
                    >
                        <motion.span
                            variants={item}
                            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400"></span>
                            </span>
                            Welcome to the fun zone
                        </motion.span>

                        <motion.h1
                            variants={item}
                            className="mt-6 text-5xl font-bold leading-[1.03] text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
                        >
                            Toys{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                                    Paradise
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-400"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.9, ease }}
                                    style={{ originX: 0 }}
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-violet-100 md:mx-0 md:max-w-xl"
                        >
                            Unleash your inner child — premium toy cars, timeless classics and
                            playful favourites loved by little drivers of every age.
                        </motion.p>

                        <motion.div
                            variants={item}
                            className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
                        >
                            <Link
                                to="/allToys"
                                className="btn btn-shine pressable group gap-2 rounded-full border-0 bg-amber-400 px-8 text-base font-extrabold text-amber-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:bg-amber-300 hover:shadow-glow-amber"
                            >
                                Explore Toys
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                            </Link>
                            <Link
                                to="/allToys"
                                className="btn pressable group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-7 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white hover:text-violet-700"
                            >
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/25 leading-none transition-transform duration-300 group-hover:scale-110">
                                    <FaPlay className="translate-x-px text-[11px]" />
                                </span>
                                <span className="whitespace-nowrap leading-none">Watch the fun</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={item}
                            className="mt-11 grid max-w-lg grid-cols-3 gap-3 sm:gap-4"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/20 md:text-left"
                                >
                                    <p className="text-2xl font-extrabold text-white sm:text-3xl">
                                        <Counter to={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
                                    </p>
                                    <p className="mt-0.5 flex items-center justify-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-violet-100 md:justify-start">
                                        {stat.label === 'Avg. Rating' && <FaStar className="text-amber-400" />}
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* floating collage */}
                    <div className="relative mx-auto hidden h-[30rem] w-full max-w-md lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: -6 }}
                            animate={{ opacity: 1, y: 0, rotate: -4 }}
                            transition={{ duration: 0.9, delay: 0.5, ease }}
                            className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="animate-float-slow overflow-hidden rounded-[1.75rem] border border-white/25 bg-white/10 p-2 shadow-lift backdrop-blur-xl">
                                <img
                                    src={galleryShot}
                                    alt="Happy moments at Toys Paradise"
                                    className="h-72 w-full rounded-[1.35rem] object-cover"
                                />
                            </div>

                            {/* spinning dashed ring behind */}
                            <div className="absolute -inset-6 -z-10 animate-spin-slow rounded-full border-2 border-dashed border-white/20" aria-hidden="true"></div>

                            {/* glass chip: rating */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 1 }}
                                className="absolute -left-10 top-8 rounded-2xl border border-white/25 bg-white/85 px-4 py-3 shadow-lift backdrop-blur"
                            >
                                <div className="flex items-center gap-1 text-amber-400">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar key={i} className="text-xs" />
                                    ))}
                                </div>
                                <p className="mt-1 text-xs font-extrabold text-slate-800">
                                    <Counter to={4.9} decimals={1} /> <span className="font-medium text-slate-500">from 1,200+ reviews</span>
                                </p>
                            </motion.div>

                            {/* glass chip: delivery */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 1.25 }}
                                className="absolute -right-8 bottom-10 rounded-2xl border border-white/25 bg-white/85 px-4 py-3 shadow-lift backdrop-blur"
                            >
                                <p className="text-lg leading-none">🚚</p>
                                <p className="mt-1 text-xs font-extrabold text-slate-800">
                                    Free delivery <span className="font-medium text-slate-500">over $50</span>
                                </p>
                            </motion.div>

                            {/* sparkle */}
                            <motion.span
                                className="absolute -right-4 -top-6 text-2xl"
                                animate={{ rotate: [0, 25, -25, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                ✨
                            </motion.span>
                        </motion.div>

                        {/* floating polaroids */}
                        {heroFloats.map((float, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.7, delay: float.delay, ease }}
                                className={`absolute z-20 ${index === 0 ? '-left-12 -bottom-10 rotate-[-7deg]' : '-right-8 -top-9 rotate-6'}`}
                            >
                                <div className="animate-float rounded-2xl bg-white p-2 pb-2.5 shadow-lift [animation-delay:1.5s]">
                                    <img
                                        src={float.src}
                                        alt={float.caption}
                                        className={`${float.className} h-24 rounded-xl object-cover sm:h-28`}
                                    />
                                    <p className="mt-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                        {float.caption}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* scroll hint */}
            <motion.div
                className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/70 md:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ opacity: { delay: 1.6 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
                <span className="h-8 w-px bg-gradient-to-b from-white/70 to-transparent"></span>
            </motion.div>
        </section>
    );
};

export default Banner;
