import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import image1 from '../../../assets/gallary/photo1.jpg';
import image2 from '../../../assets/gallary/photo2.jpg';
import image3 from '../../../assets/gallary/photo3.jpg';
import image4 from '../../../assets/gallary/photo4.jpg';
import image5 from '../../../assets/gallary/photo5.jpg';
import image6 from '../../../assets/gallary/photo6.jpg';
import image7 from '../../../assets/gallary/photo7.jpg';
import image8 from '../../../assets/gallary/photo8.jpg';
import image9 from '../../../assets/gallary/photo9.jpg';
import image10 from '../../../assets/gallary/photo10.jpg';
import image11 from '../../../assets/gallary/photo11.jpg';
import image12 from '../../../assets/gallary/photo12.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeading from '../../../Components/UI/SectionHeading';

const captions = [
    'First road trip 🚗', 'Sunday racers 🏁', 'Tiny collector 📸', 'Playtime magic ✨',
    'Best friends 🧸', 'Adventure awaits 🌟', 'Little dreamer 💤', 'Family fun 👨‍👩‍👦',
    'Speed demon 🌪️', 'Golden hour 🌇', 'Boxes of joy 🎁', 'Cherry on top 🍒',
];

const ease = [0.16, 1, 0.3, 1];

const PhotoSection = () => {
    const images = [
        image1, image2, image3, image4, image5, image6,
        image7, image8, image9, image10, image11, image12,
    ];
    const [active, setActive] = useState(null);

    const close = useCallback(() => setActive(null), []);
    const next = useCallback(() => setActive((i) => (i + 1) % images.length), [images.length]);
    const prev = useCallback(() => setActive((i) => (i - 1 + images.length) % images.length), [images.length]);

    // Keyboard controls + scroll lock while the lightbox is open
    useEffect(() => {
        if (active === null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [active, close, next, prev]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2400,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
        ],
    };

    return (
        <section className='section overflow-hidden'>
            <SectionHeading
                eyebrow='Gallery'
                title={<>Our <span className='text-gradient'>Happy Moments</span></>}
                subtitle='A peek into the smiles, races and big imaginations we get to be part of. Tap any photo to view it full-screen.'
            />

            <div className='-mx-2 mt-10'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className='px-2'>
                            <motion.button
                                type='button'
                                onClick={() => setActive(index)}
                                aria-label={`View ${captions[index]} full screen`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                                className='group relative block w-full overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none'
                            >
                                <img
                                    src={image}
                                    alt={`Happy moment ${index + 1}`}
                                    loading='lazy'
                                    className='h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                                />
                                <span className='absolute inset-0 bg-gradient-to-t from-violet-950/80 via-violet-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>

                                <span className='absolute bottom-3 left-3 translate-y-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-800 opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                                    {captions[index]}
                                </span>

                                <span className='absolute right-3 top-3 grid h-8 w-8 scale-50 place-items-center rounded-full bg-amber-400 text-sm text-amber-950 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
                                    ✨
                                </span>
                            </motion.button>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Full-screen lightbox */}
            <AnimatePresence>
                {active !== null && (
                    <motion.div
                        key='lightbox'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={close}
                        className='fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8'
                        role='dialog'
                        aria-modal='true'
                        aria-label={captions[active]}
                    >
                        <button
                            type='button'
                            onClick={close}
                            aria-label='Close gallery'
                            className='absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition-all duration-200 hover:scale-110 hover:bg-white hover:text-black sm:right-6 sm:top-6'
                        >
                            <FaTimes />
                        </button>

                        <button
                            type='button'
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            aria-label='Previous photo'
                            className='absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:bg-white hover:text-black sm:left-6'
                        >
                            <FaChevronLeft />
                        </button>

                        <motion.figure
                            key={active}
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.3, ease }}
                            onClick={(e) => e.stopPropagation()}
                            className='max-h-full w-full max-w-4xl'
                        >
                            <img
                                src={images[active]}
                                alt={captions[active]}
                                className='max-h-[70vh] w-full rounded-2xl object-contain shadow-2xl'
                            />
                            <figcaption className='mt-4 flex items-center justify-between gap-4 text-center text-sm font-semibold text-white/90 sm:text-left'>
                                <span>{captions[active]}</span>
                                <span className='text-xs font-medium text-white/60'>
                                    {active + 1} / {images.length} · ← → to browse · Esc to close
                                </span>
                            </figcaption>
                        </motion.figure>

                        <button
                            type='button'
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            aria-label='Next photo'
                            className='absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:bg-white hover:text-black sm:right-6'
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhotoSection;
