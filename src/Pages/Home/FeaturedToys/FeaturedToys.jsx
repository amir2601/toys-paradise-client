import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../Shared/ProductCard/ProductCard';

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
            <div className='mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-end sm:text-left'>
                <div>
                    <span className='eyebrow'>Handpicked for you</span>
                    <h2 className='mt-3 text-3xl font-bold text-slate-900 sm:text-4xl'>
                        Featured <span className='text-gradient'>Toys</span>
                    </h2>
                    <p className='mt-2 text-sm text-slate-500'>The highest rated rides loved by our little drivers.</p>
                </div>
                <Link to='/allToys' className='btn btn-outline btn-primary btn-pill px-6'>View All Toys</Link>
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
                            featured.map(toy => (
                                <ProductCard key={toy._id} toy={toy} showDetails />
                            ))
                        }
                    </div>
            }
        </section>
    );
};

export default FeaturedToys;
