import React from 'react';

const WeOffer = () => {
    return (
        <div className='my-8'>
            <h2 className='text-3xl font-bold text-center'>We Offer</h2>
            <hr className='my-3' />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/zGkdbBT/best.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Best Service</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/QMcGs4c/value.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>Value For Money Product</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/P1gjQSy/material.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>High Quality Material</h3>
                </div>
                <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                    <div className='flex justify-center'>
                        <img className='h-20' src="https://i.ibb.co/JRBzFvQ/support.png" alt="" />
                    </div>
                    <h3 className='my-3 text-xl font-bold'>24/7 Customer Support</h3>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;