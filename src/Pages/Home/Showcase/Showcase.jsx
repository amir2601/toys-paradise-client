import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Reveal from '../../../Components/Animations/Reveal';
import { showcase as showcaseData } from '../../../Data/siteData';

const ease = [0.16, 1, 0.3, 1];

const { kicker, title, body } = showcaseData;

/** Editorial split section: big image + story-driven CTA. */
const Showcase = () => {
    return (
        <section className="section">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                <Reveal direction="left" className="relative">
                    <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl border-2 border-violet-300/60" aria-hidden="true"></div>
                    <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl border-2 border-amber-300/60" aria-hidden="true"></div>

                    <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
                        <img
                            src={showcaseData.image}
                            alt={title}
                            loading="lazy"
                            className="h-[22rem] w-full object-cover transition-transform duration-700 ease-out hover:scale-105 sm:h-[26rem]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 via-transparent to-transparent"></div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4, ease }}
                            className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur-lg"
                        >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-amber-400 text-lg text-amber-950">🏆</span>
                            <p className="text-xs font-semibold leading-snug text-white">
                                Rated <span className="font-extrabold">#1 Toy Store</span> by 5,000+ families
                                for two years running.
                            </p>
                        </motion.div>
                    </div>
                </Reveal>

                <Reveal direction="right">
                    <span className="eyebrow">{kicker}</span>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-gradient">{title.split(' ').slice(-1)}</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                        {body}
                    </p>

                    <ul className="mt-6 space-y-3">
                        {[
                            'Collector-grade die-cast models',
                            'Safety-tested, non-toxic materials',
                            '30-day happy-kid guarantee',
                        ].map((perk, index) => (
                            <motion.li
                                key={perk}
                                initial={{ opacity: 0, x: -18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 + index * 0.12, ease }}
                                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                            >
                                <FaCheckCircle className="text-lg text-emerald-500" />
                                {perk}
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/allToys"
                            className="btn btn-shine pressable group gap-2 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift"
                        >
                            Start collecting
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Link>
                        <Link
                            to="/blog"
                            className="btn pressable rounded-full border border-slate-300 bg-white px-8 font-bold text-slate-700 transition-all duration-300 hover:border-violet-400 hover:text-violet-700"
                        >
                            Read our story
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Showcase;
