import React from 'react';
import Slider from 'react-slick';
import image1 from '../../../assets/gallary/photo1.jpg'
import image2 from '../../../assets/gallary/photo2.jpg'
import image3 from '../../../assets/gallary/photo3.jpg'
import image4 from '../../../assets/gallary/photo4.jpg'
import image5 from '../../../assets/gallary/photo5.jpg'
import image6 from '../../../assets/gallary/photo6.jpg'
import image7 from '../../../assets/gallary/photo7.jpg'
import image8 from '../../../assets/gallary/photo8.jpg'
import image9 from '../../../assets/gallary/photo9.jpg'
import image10 from '../../../assets/gallary/photo10.jpg'
import image11 from '../../../assets/gallary/photo11.jpg'
import image12 from '../../../assets/gallary/photo12.jpg'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoSection = () => {

    const images = [
        `${image1}`,
        `${image2}`,
        `${image3}`,
        `${image4}`,
        `${image5}`,
        `${image6}`,
        `${image7}`,
        `${image8}`,
        `${image9}`,
        `${image10}`,
        `${image11}`,
        `${image12}`,
        // Add more image URLs here
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <section className='section'>
            <div className='mb-8 text-center'>
                <span className='eyebrow'>Gallery</span>
                <h2 className='section-title mt-3'>Our <span className='text-gradient'>Happy Moments</span></h2>
            </div>
            <div className='-mx-2'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="px-2">
                            <div className='group relative overflow-hidden rounded-2xl shadow-card'>
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PhotoSection;
