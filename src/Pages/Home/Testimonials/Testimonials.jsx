import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'SAZID',
            img: "https://i.ibb.co/sCkg6dk/sazid.jpg",
            quote: 'Toys Paradise delivers fun-filled excitement! Amazing selection, happy kids—pure delight.',
            link: "https://www.facebook.com/Bossazid",
        },
        {
            name: 'FAHIM',
            img: "https://i.ibb.co/tBs5Rmd/fahim.jpg",
            quote: 'High-quality toy cars, fast delivery, and great prices—Toys Paradise rocks!',
            link: "https://www.facebook.com/fahim0.O/photos_by",
        },
        {
            name: 'HASAN',
            img: "https://i.ibb.co/gMS691W/hasan.jpg",
            quote: 'My son loves the wide variety of toy cars from Toys Paradise! Best online toy store!',
            link: "https://www.facebook.com/Hasan.Alex405",
        },
        {
            name: 'SAJJAD',
            img: "https://i.ibb.co/s9cvB0f/sajjad.jpg",
            quote: "Toys Paradise made my grandson's day with their awesome toy cars collection!",
            link: "https://www.facebook.com/Zisaannn",
        },
        {
            name: 'SOWROV',
            img: "https://i.ibb.co/bJ3sdWP/sowrov.jpg",
            quote: 'From classic to modern, Toys Paradise offers endless fun with their toy cars!',
            link: "https://www.facebook.com/profile.php?id=100089244879134",
        },
    ];

    return (
        <section className='section'>
            <div className='mb-10 text-center'>
                <span className='eyebrow'>Loved by families</span>
                <h2 className='section-title mt-3'>Testimonials</h2>
            </div>

            {/* Cards */}
            <div className='group grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>

                {
                    testimonials.map((item, index) => (
                        <div
                            key={index}
                            className='card-surface flex cursor-pointer flex-col items-center gap-4 px-5 py-7 text-center transition-all duration-300 group-hover:blur-[2px] hover:!blur-none hover:-translate-y-1.5 hover:shadow-soft'
                        >
                            <div className='flex justify-center'>
                                <img className='h-16 w-16 rounded-full object-cover ring-2 ring-violet-200 ring-offset-2' src={item.img} alt="" />
                            </div>
                            <p className='text-sm text-slate-500'>
                                <span className='mb-1 block font-bold text-slate-800'>{item.name}</span>
                                {item.quote}
                            </p>
                            <a
                                href={item.link}
                                target='_blank'
                                rel="noreferrer"
                                className='btn btn-outline btn-primary btn-xs btn-pill mt-auto px-4'
                            >
                                View Profile
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonials;
