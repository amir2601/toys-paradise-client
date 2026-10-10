import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import Reveal from '../../../Components/Animations/Reveal';
import SectionHeading from '../../../Components/UI/SectionHeading';

const ease = [0.16, 1, 0.3, 1];

const FeaturedToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toys-paradise-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.log(error.message));
    }, []);

    const featured = [...toys]
        .sort((a, b) => Number(b.rating) - Number(a.rating))
        .slice(0, 8);

    return (
        <section className='section'>
            <div className='mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end'>
                <SectionHeading
                    align='left'
                    eyebrow='Handpicked for you'
                    title={<>Featured <span className='text-gradient'>Toys</span></>}
                    subtitle='The highest rated rides loved by our little drivers.'
                />
                <Reveal direction='right'>
                    <Link
                        to='/allToys'
                        className='btn btn-shine pressable group gap-2 rounded-full border-2 border-violet-600 bg-transparent px-7 font-bold text-violet-700 transition-all duration-300 hover:bg-violet-600 hover:text-white hover:shadow-soft'
                    >
                        View All Toys
                        <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
                    </Link>
                </Reveal>
            </div>

            {
                featured.length === 0
                    ? <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className='card-surface h-72 animate-pulse bg-gradient-to-br from-slate-100 to-slate-50' />
                            ))
                        }
                    </div>
                    : <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            featured.map((toy, index) => (
                                <motion.div
                                    key={toy._id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.6, delay: (index % 4) * 0.09, ease }}
                                >
                                    <ProductCard toy={toy} showDetails />
                                </motion.div>
                            ))
                        }
                    </div>
            }
        </section>
    );
};

export default FeaturedToys;
