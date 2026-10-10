import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../../Components/Animations/Reveal';
import SectionHeading from '../../../Components/UI/SectionHeading';

const ease = [0.16, 1, 0.3, 1];

const offers = [
    {
        icon: 'https://i.ibb.co/zGkdbBT/best.png',
        title: 'Best Service',
        text: 'Real humans, fast answers — before, during and after your order.',
        tint: 'from-violet-500/15 to-violet-500/0',
        ring: 'group-hover:border-violet-300',
    },
    {
        icon: 'https://i.ibb.co/QMcGs4c/value.png',
        title: 'Value For Money',
        text: 'Fair prices on every shelf, plus members-only drops all year.',
        tint: 'from-amber-400/20 to-amber-400/0',
        ring: 'group-hover:border-amber-300',
    },
    {
        icon: 'https://i.ibb.co/P1gjQSy/material.png',
        title: 'High Quality Material',
        text: 'Safety-tested paints and durable builds made to be played with.',
        tint: 'from-rose-400/15 to-rose-400/0',
        ring: 'group-hover:border-rose-300',
    },
    {
        icon: 'https://i.ibb.co/JRBzFvQ/support.png',
        title: '24/7 Support',
        text: 'Night-owl help desk — we reply even during storytime.',
        tint: 'from-sky-400/15 to-sky-400/0',
        ring: 'group-hover:border-sky-300',
    },
];

const WeOffer = () => {
    return (
        <section className='section'>
            <SectionHeading
                eyebrow='Why choose us'
                title={<>We <span className='text-gradient'>Offer</span></>}
                subtitle='Everything a toy box needs — quality, value and service that never sleeps.'
            />

            <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {offers.map((offer, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.6, delay: index * 0.12, ease }}
                        className={`card-surface card-hover card-sheen group relative overflow-hidden border-transparent bg-gradient-to-b ${offer.tint} p-7 text-center ${offer.ring}`}
                    >
                        {/* number watermark */}
                        <span className='absolute -right-2 -top-4 text-7xl font-extrabold text-slate-900/[0.04] transition-transform duration-500 group-hover:-translate-y-1'>
                            0{index + 1}
                        </span>

                        <div className='relative flex justify-center'>
                            <span className='absolute inset-0 m-auto h-20 w-20 rounded-full bg-white blur-xl transition-opacity duration-500 group-hover:opacity-90'></span>
                            <div className='relative grid h-24 w-24 place-items-center rounded-full bg-white shadow-inner transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-6'>
                                <img className='h-16 w-16 object-contain' src={offer.icon} alt='' loading='lazy' />
                            </div>
                        </div>

                        <h3 className='mt-5 text-lg font-bold text-slate-800'>{offer.title}</h3>
                        <p className='mt-2 text-sm leading-relaxed text-slate-500'>{offer.text}</p>

                        <span className='mx-auto mt-5 block h-1 w-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all duration-500 group-hover:w-16'></span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WeOffer;
