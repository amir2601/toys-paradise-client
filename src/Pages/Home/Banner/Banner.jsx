import React from 'react';
import bannerImg from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero md:h-[40vh] rounded-lg" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-yellow-400">Toys Paradise</h1>
                        <p className="mb-5 text-xl">"Unleash Your Inner Child at Toys Paradise!"</p>
                        <Link to='/allToys' className="btn btn-primary">All Toys</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;