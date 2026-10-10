import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import SectionHeading from '../../../Components/UI/SectionHeading';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'SAZID',
            img: 'https://i.ibb.co/sCkg6dk/sazid.jpg',
            quote: 'Toys Paradise delivers fun-filled excitement! Amazing selection, happy kids—pure delight.',
            link: 'https://www.facebook.com/Bossazid',
            role: 'Dad of two',
        },
        {
            name: 'FAHIM',
            img: 'https://i.ibb.co/tBs5Rmd/fahim.jpg',
            quote: 'High-quality toy cars, fast delivery, and great prices—Toys Paradise rocks!',
            link: 'https://www.facebook.com/fahim0.O/photos_by',
            role: 'Collector',
        },
        {
            name: 'HASAN',
            img: 'https://i.ibb.co/gMS691W/hasan.jpg',
            quote: 'My son loves the wide variety of toy cars from Toys Paradise! Best online toy store!',
            link: 'https://www.facebook.com/Hasan.Alex405',
            role: 'Happy parent',
        },
        {
            name: 'SAJJAD',
            img: 'https://i.ibb.co/s9cvB0f/sajjad.jpg',
            quote: "Toys Paradise made my grandson's day with their awesome toy cars collection!",
            link: 'https://www.facebook.com/Zisaannn',
            role: 'Grandparent',
        },
        {
            name: 'SOWROV',
            img: 'https://i.ibb.co/bJ3sdWP/sowrov.jpg',
            quote: 'From classic to modern, Toys Paradise offers endless fun with their toy cars!',
            link: 'https://www.facebook.com/profile.php?id=100089244879134',
            role: 'Verified buyer',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3800,
        pauseOnHover: true,
        arrows: false,
        // Premium pill-style pagination (styled in index.css → .testi-dots)
        customPaging: () => (
            <button type='button' className='testi-dot' aria-label='Go to review' />
        ),
        appendDots: (dots) => (
            <ul className='testi-dots'>{dots}</ul>
        ),
        responsive: [
            { breakpoint: 639, settings: { slidesToShow: 1 } },
            { breakpoint: 1023, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className='section'>
            <SectionHeading
                eyebrow='Loved by families'
                title={<>What Parents <span className='text-gradient'>Say</span></>}
                subtitle='Real words from real families — tap a card to visit their profile.'
            />

            <div className='mt-10 -mx-2'><Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <div key={index} className='px-2'>
                            <motion.div
                                initial={{ opacity: 0, y: 34 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                className='card-surface card-hover card-sheen group flex h-full flex-col rounded-3xl p-7'
                            >
                                <div className='flex items-start justify-between'>
                                    <span className='text-5xl font-black leading-none text-violet-100 transition-colors duration-300 group-hover:text-violet-200'>
                                        &ldquo;
                                    </span>
                                    <FaQuoteRight className='text-2xl text-amber-300/80 transition-transform duration-500 group-hover:rotate-12' />
                                </div>

                                <p className='mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]'>
                                    {item.quote}
                                </p>

                                <div className='mt-4 flex gap-0.5 text-amber-400'>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar key={i} className='text-xs' />
                                    ))}
                                </div>

                                <div className='mt-5 flex items-center gap-3 border-t border-slate-100 pt-5'>
                                    <div className='relative'>
                                        <img
                                            className='h-12 w-12 rounded-full object-cover ring-2 ring-violet-200 ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-110'
                                            src={item.img}
                                            alt={item.name}
                                            loading='lazy'
                                        />
                                        <span className='absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-[9px] font-bold text-white ring-2 ring-white'>
                                            ✓
                                        </span>
                                    </div>
                                    <div className='min-w-0 flex-1'>
                                        <p className='truncate text-sm font-extrabold text-slate-800'>{item.name}</p>
                                        <p className='truncate text-xs text-slate-400'>{item.role}</p>
                                    </div>
                                    <a
                                        href={item.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='pressable rounded-full border border-violet-200 px-3.5 py-1.5 text-xs font-bold text-violet-700 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
                                    >
                                        Profile
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
