import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toy = useLoaderData();
    const { img, toy_name, sub_category, seller_name, seller_email, price, description, quantity, rating } = toy;

    return (
        <div>
            <div className="hero min-h-[50vh] rounded-lg mx-auto">
                <div className="hero-content md:flex-row flex-col gap-10">
                    <div className='space-y-4'>
                        <img src={img} className="md:max-w-md rounded-lg shadow-2xl" />
                        <h1 className="text-3xl font-bold text-center">{toy_name}</h1>
                    </div>
                    <div className='space-y-6'>
                        <h5 className='text-lg font-semibold'>Seller Name: {seller_name}</h5>
                        <h5 className='text-lg font-semibold'>Seller Email: {seller_email}</h5>
                        <h5 className='text-xl font-bold'>Price: $ {price}</h5>
                        <div className='flex gap-6'>
                            <h5 className='text-lg font-semibold'>Rating: {rating}</h5>
                            <h5 className='text-lg font-semibold'>Quantity: {quantity}</h5>
                        </div>
                        <h5 className='text-xl font-bold'>Description:</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;