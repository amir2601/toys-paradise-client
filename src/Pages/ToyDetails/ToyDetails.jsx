import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaStar, FaBoxOpen, FaTags } from 'react-icons/fa';
import PageTransition from '../../Components/Animations/PageTransition';
import useTitle from '../../Hooks/useTitle';

const ease = [0.16, 1, 0.3, 1];

const ToyDetails = () => {
    const toy = useLoaderData();
    useTitle(toy?.toy_name || 'Toy Details');

    if (!toy) {
        return (
            <PageTransition>
                <div className='container-x section'>
                    <div className='card-surface mx-auto grid max-w-md place-items-center p-12 text-center shadow-soft'>
                        <p className='text-5xl'>🧸</p>
                        <p className='mt-4 font-semibold text-slate-600'>This toy has rolled off the shelf.</p>
                        <p className='mt-1 text-sm text-slate-500'>It may have been sold or the link is out of date.</p>
                        <Link
                            to='/allToys'
                            className='btn btn-shine pressable mt-6 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 font-bold text-white shadow-soft'
                        >
                            Browse All Toys
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    const { img, toy_name, sub_category, seller_name, seller_email, price, description, quantity, rating } = toy;

    const facts = [
        { icon: <FaTags />, label: 'Category', value: sub_category },
        { icon: <FaUser />, label: 'Seller', value: seller_name },
        { icon: <FaEnvelope />, label: 'Seller Email', value: seller_email },
        { icon: <FaBoxOpen />, label: 'In Stock', value: `${quantity} units` },
    ];

    return (
        <PageTransition>
            <div className='container-x section'>
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="card-surface overflow-hidden rounded-[2rem] shadow-soft"
                >
                    <div className="grid items-stretch gap-0 lg:grid-cols-2">
                        {/* image panel */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease }}
                            className='group relative overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50 p-8'
                        >
                            <div className='absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.15),transparent_60%)]'></div>
                            <img
                                src={img}
                                alt={toy_name}
                                className="relative mx-auto max-h-[24rem] w-full rounded-2xl object-cover shadow-soft transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                            <span className="absolute left-8 top-8 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-violet-700 shadow-sm backdrop-blur">
                                {sub_category}
                            </span>
                        </motion.div>

                        {/* info panel */}
                        <div className='p-8 sm:p-10'>
                            <span className='badge badge-primary badge-outline capitalize'>{sub_category}</span>
                            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                                {toy_name}
                            </h1>

                            <div className='mt-6 flex flex-wrap items-center gap-4'>
                                <span className='bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-4xl font-extrabold text-transparent'>
                                    $ {price}
                                </span>
                                <span className='flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700'>
                                    <FaStar className='text-xs' /> {rating}
                                </span>
                                <span className='rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-600'>
                                    {quantity} in stock
                                </span>
                            </div>

                            <div className='mt-8 grid gap-3 sm:grid-cols-2'>
                                {facts.map((fact, index) => (
                                    <motion.div
                                        key={fact.label}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease }}
                                        className='flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition-colors duration-200 hover:border-violet-200 hover:bg-violet-50/50'
                                    >
                                        <span className='grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-violet-600 shadow-sm'>
                                            {fact.icon}
                                        </span>
                                        <div className='min-w-0'>
                                            <p className='text-[10px] font-bold uppercase tracking-widest text-slate-500'>{fact.label}</p>
                                            <p className='truncate text-sm font-semibold capitalize text-slate-700'>{fact.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className='mt-8'>
                                <h5 className='flex items-center gap-2 text-lg font-bold text-slate-800'>
                                    Description
                                </h5>
                                <p className='mt-2 leading-relaxed text-slate-500'>
                                    {description || 'A delightful addition to any toy box — built for hours of imaginative play.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
};

export default ToyDetails;