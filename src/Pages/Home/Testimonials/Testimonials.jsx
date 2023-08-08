import React from 'react';

const Testimonials = () => {
    return (
        <div className='my-20 px-4 md:px-0'>
            <h1 className='text-3xl font-semibold text-purple-400 text-center mb-10'>Testimonials</h1>

            {/* Cards */}
            <div className='grid md:grid-cols-5 gap-4 group'>

                {/* Sazid */}
                <div className='text-center border border-black px-4 py-7 rounded-lg space-y-5 cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-16 h-16' src="https://i.ibb.co/sCkg6dk/sazid.jpg" alt="" />
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        <span className='font-bold'>SAZID</span>
                        <br />
                        <span className='text-gray-500'>Toys Paradise delivers fun-filled excitement! Amazing selection, happy kids—pure delight.</span>
                    </p>
                    <button className='btn btn-outline btn-xs'><a href="https://www.facebook.com/Bossazid" target='_blank'>View Profile</a></button>
                </div>

                {/* Fahim */}
                <div className='text-center border border-black px-4 py-7 rounded-lg space-y-5 cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-16 h-16' src="https://i.ibb.co/tBs5Rmd/fahim.jpg" alt="" />
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        <span className='font-bold'>FAHIM</span>
                        <br />
                        <span className='text-gray-500'>High-quality toy cars, fast delivery, and great prices—Toys Paradise rocks!</span>
                    </p>
                    <button className='btn btn-outline btn-xs'><a href="https://www.facebook.com/fahim0.O/photos_by" target='_blank'>View Profile</a></button>
                </div>

                {/* Hasan */}
                <div className='text-center border border-black px-4 py-7 rounded-lg space-y-5 cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-16' src="https://i.ibb.co/gMS691W/hasan.jpg" alt="" />
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        <span className='font-bold'>HASAN</span>
                        <br />
                        <span className='text-gray-500'>My son loves the wide variety of toy cars from Toys Paradise! Best online toy store!</span>
                    </p>
                    <button className='btn btn-outline btn-xs'><a href="https://www.facebook.com/Hasan.Alex405" target='_blank'>View Profile</a></button>
                </div>

                {/* Sajjad */}
                <div className='text-center border border-black px-4 py-7 rounded-lg space-y-5 cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-16' src="https://i.ibb.co/s9cvB0f/sajjad.jpg" alt="" />
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        <span className='font-bold'>SAJJAD</span>
                        <br />
                        <span className='text-gray-500'>Toys Paradise made my grandson's day with their awesome toy cars collection!</span>
                    </p>
                    <button className='btn btn-outline btn-xs'><a href="https://www.facebook.com/Zisaannn" target='_blank'>View Profile</a></button>
                </div>

                {/* Sowrov */}
                <div className='text-center border border-black px-4 py-7 rounded-lg space-y-5 cursor-pointer group-hover:blur-sm hover:!blur-none hover:scale-105 duration-300'>
                    <div className='flex justify-center'>
                        <img className='rounded-full w-16' src="https://i.ibb.co/bJ3sdWP/sowrov.jpg" alt="" />
                    </div>
                    <p className='text-gray-700 text-sm mt-2'>
                        <span className='font-bold'>SOWROV</span>
                        <br />
                        <span className='text-gray-500'>From classic to modern, Toys Paradise offers endless fun with their toy cars!</span>
                    </p>
                    <button className='btn btn-outline btn-xs'><a href="https://www.facebook.com/profile.php?id=100089244879134" target='_blank'>View Profile</a></button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;