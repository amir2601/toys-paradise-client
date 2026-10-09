import React from 'react';
import bannerImg from '../../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    const stats = [
        { value: '250+', label: 'Toy Cars' },
        { value: '5K+', label: 'Happy Kids' },
        { value: '4.9', label: 'Avg. Rating' },
    ];

    return (
        <section className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img src={bannerImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-violet-800/75 to-fuchsia-700/50"></div>
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-400/30 blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-fuchsia-400/30 blur-3xl"></div>

            <div className="relative z-10 px-6 py-14 sm:px-12 md:py-20">
                <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400"></span>
                        Welcome to the fun zone
                    </span>
                    <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-white drop-shadow sm:text-6xl lg:text-7xl">
                        Toys <span className="text-amber-400">Paradise</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-md text-lg font-medium text-violet-100 md:mx-0">
                        "Unleash Your Inner Child at Toys Paradise!"
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <Link to='/allToys' className="btn btn-accent btn-pill border-0 px-8 text-base font-bold text-amber-950 shadow-lg shadow-amber-500/30 hover:shadow-xl">
                            All Toys
                        </Link>
                        <Link to='/allToys' className="btn btn-outline btn-pill border-white/40 px-6 text-white hover:border-white hover:bg-white hover:text-violet-700">
                            Explore Now
                        </Link>
                    </div>

                    <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
                        {
                            stats.map((stat, index) => (
                                <div key={index} className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur transition-colors duration-300 hover:bg-white/20 md:text-left">
                                    <p className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</p>
                                    <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-100">{stat.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
