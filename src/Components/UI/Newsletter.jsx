import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck, FaGift, FaPaperPlane } from 'react-icons/fa6';
import Reveal from '../Animations/Reveal';

/**
 * Full-width gradient CTA with a working (mock) subscribe flow.
 * Sits right above the footer on every page.
 */
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | success

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setStatus('success');
        setEmail('');
    };

    return (
        <section className="container-x pb-4">
            <Reveal direction="scale">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-violet-600 to-fuchsia-600 bg-[length:200%_200%] px-6 py-12 shadow-lift animate-gradient-x sm:px-10 md:py-16">
                    {/* decorative */}
                    <div className="pattern-dots absolute inset-0 opacity-40" aria-hidden="true"></div>
                    <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl" aria-hidden="true"></div>
                    <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" aria-hidden="true"></div>
                    <div className="absolute right-10 top-8 hidden animate-float-slow text-4xl opacity-80 md:block hover:animate-wobble" aria-hidden="true">🎈</div>
                    <div className="absolute bottom-8 left-12 hidden animate-float text-3xl opacity-80 md:block hover:animate-wobble" aria-hidden="true">🏎️</div>

                    <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
                        <Reveal direction="left" className="max-w-xl">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                                <FaGift className="text-amber-300" />
                                Stay in the loop
                            </span>
                            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                Get <span className="text-amber-300">10% off</span> your first order
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-violet-100">
                                Join 5,000+ parents who get early access to new arrivals, collectors' drops and
                                members-only deals. No spam — just joy.
                            </p>
                        </Reveal>

                        <div className="w-full max-w-md lg:w-auto">
                            <AnimatePresence mode="wait" initial={false}>
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/15 px-6 py-5 text-white backdrop-blur-lg lg:justify-start"
                                    >
                                        <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 text-emerald-950">
                                            <FaCheck />
                                        </span>
                                        <div className="text-left">
                                            <p className="font-bold">You're on the list!</p>
                                            <p className="text-xs text-violet-100">Check your inbox for the code.</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.25 }}
                                        className="flex flex-col gap-3 sm:flex-row"
                                    >
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            aria-label="Email address"
                                            className="w-full rounded-full border border-white/25 bg-white/95 px-5 py-3.5 text-sm font-medium text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-4 focus:ring-white/30 sm:w-72"
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-shine pressable inline-flex items-center justify-center gap-2 rounded-full border-0 bg-amber-400 px-7 text-sm font-extrabold uppercase tracking-wide text-amber-950 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:bg-amber-300 hover:shadow-glow-amber"
                                        >
                                            Subscribe
                                            <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                            <p className="mt-3 text-center text-[11px] font-medium text-violet-200 lg:text-left">
                                By subscribing you agree to our friendly privacy policy.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Newsletter;
