import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
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

const PhotoSection = () => {
    const images = [
        image1, image2, image3, image4, image5, image6,
        image7, image8, image9, image10, image11, image12,
    ];

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
                subtitle='A peek into the smiles, races and big imaginations we get to be part of.'
            />

            <div className='-mx-2 mt-10'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className='px-2'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                                className='group relative overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-lift'
                            >
                                <img
                                    src={image}
                                    alt={`Happy moment ${index + 1}`}
                                    loading='lazy'
                                    className='h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-violet-950/80 via-violet-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>

                                <span className='absolute bottom-3 left-3 translate-y-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-violet-800 opacity-0 shadow-sm backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                                    {captions[index]}
                                </span>

                                <span className='absolute right-3 top-3 grid h-8 w-8 scale-50 place-items-center rounded-full bg-amber-400 text-sm text-amber-950 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'>
                                    ✨
                                </span>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PhotoSection;
