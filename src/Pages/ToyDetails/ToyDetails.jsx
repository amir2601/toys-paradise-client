import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const toy = useLoaderData();
    const { img, toy_name, sub_category, seller_name, seller_email, price, description, quantity, rating } = toy;

    return (
        <div className='container-x section'>
            <div className="card-surface mx-auto overflow-hidden">
                <div className="grid items-stretch gap-0 lg:grid-cols-2">
                    <div className='relative bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8'>
                        <img src={img} className="mx-auto max-h-[24rem] w-full rounded-2xl object-cover shadow-soft" />
                    </div>
                    <div className='p-8 sm:p-10'>
                        <span className='badge badge-primary badge-outline capitalize'>{sub_category}</span>
                        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{toy_name}</h1>

                        <div className='mt-6 space-y-3 text-slate-600'>
                            <p className='flex items-center gap-2'><span className='font-semibold text-slate-800'>Seller:</span> {seller_name}</p>
                            <p className='flex items-center gap-2'><span className='font-semibold text-slate-800'>Email:</span> {seller_email}</p>
                        </div>

                        <div className='mt-6 flex flex-wrap items-center gap-4'>
                            <span className='text-3xl font-bold text-violet-700'>$ {price}</span>
                            <span className='rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700'>★ {rating}</span>
                            <span className='rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600'>{quantity} in stock</span>
                        </div>

                        <div className='mt-8'>
                            <h5 className='text-lg font-bold text-slate-800'>Description</h5>
                            <p className='mt-2 leading-relaxed text-slate-500'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
