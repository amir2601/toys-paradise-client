import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../../Components/Animations/Reveal';
import Counter from '../../../Components/Animations/Counter';
import { values } from '../../../Data/siteData';

/** Dark, full-bleed band of animated counters with a gradient wash. */
const StatsBand = () => {
    return (
        <section className="section">
            <Reveal direction="scale">
                <div className="relative overflow-hidden rounded-[2rem] bg-neutral text-neutral-content shadow-lift">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-900/60 via-transparent to-fuchsia-900/50"></div>
                    <div className="pattern-dots absolute inset-0 opacity-30"></div>
                    <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-violet-600/30 blur-3xl"></div>
                    <div className="absolute -bottom-16 -right-8 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-2 gap-6 px-6 py-12 sm:px-10 md:grid-cols-4 md:py-14">
                        {values.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group text-center md:text-left"
                            >
                                <p className="bg-gradient-to-r from-amber-300 to-fuchsia-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                                    <Counter
                                        to={stat.value}
                                        decimals={stat.decimals || 0}
                                        suffix={stat.suffix}
                                    />
                                </p>
                                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white">
                                    {stat.label}
                                </p>
                                <p className="mt-1 text-xs text-slate-400">{stat.detail}</p>
                                <span className="mx-auto mt-4 block h-0.5 w-10 origin-left rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-500 group-hover:w-20 md:mx-0"></span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default StatsBand;
