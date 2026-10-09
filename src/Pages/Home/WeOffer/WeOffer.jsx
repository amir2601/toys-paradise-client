import React from 'react';

const WeOffer = () => {
    const offers = [
        {
            icon: "https://i.ibb.co/zGkdbBT/best.png",
            title: 'Best Service',
            tint: 'from-violet-500/15 to-violet-500/0',
        },
        {
            icon: "https://i.ibb.co/QMcGs4c/value.png",
            title: 'Value For Money Product',
            tint: 'from-amber-400/20 to-amber-400/0',
        },
        {
            icon: "https://i.ibb.co/P1gjQSy/material.png",
            title: 'High Quality Material',
            tint: 'from-rose-400/15 to-rose-400/0',
        },
        {
            icon: "https://i.ibb.co/JRBzFvQ/support.png",
            title: '24/7 Customer Support',
            tint: 'from-sky-400/15 to-sky-400/0',
        },
    ];

    return (
        <section className='section'>
            <div className='mb-10 text-center'>
                <span className='eyebrow'>Why choose us</span>
                <h2 className='section-title mt-3'>We <span className='text-gradient'>Offer</span></h2>
            </div>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {
                    offers.map((offer, index) => (
                        <div
                            key={index}
                            className={`card-surface card-hover group relative overflow-hidden bg-gradient-to-b ${offer.tint} p-7 text-center`}
                        >
                            <div className='flex justify-center'>
                                <div className='grid h-24 w-24 place-items-center rounded-full bg-white/80 shadow-inner transition-transform duration-300 group-hover:scale-110'>
                                    <img className='h-16' src={offer.icon} alt="" />
                                </div>
                            </div>
                            <h3 className='mt-5 text-lg font-bold text-slate-800'>{offer.title}</h3>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default WeOffer;
