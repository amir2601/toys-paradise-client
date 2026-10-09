import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ProductCard from '../Shared/ProductCard/ProductCard';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);
    const [searchText, setSearchText] = useState('')
    useTitle('All Toys')


    const showAllToys = () => {
        setVisible((previousValue) => previousValue + 20)
    }

    useEffect(() => {
        const controller = new AbortController();
        const timer = setTimeout(() => {
            const query = searchText.trim();
            const url = query
                ? `https://toys-paradise-server.vercel.app/toySearch/${encodeURIComponent(query)}`
                : 'https://toys-paradise-server.vercel.app/allToys';

            setVisible(20);
            fetch(url, { signal: controller.signal })
                .then(res => res.json())
                .then(data => setToys(data))
                .catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Error searching toys:', error);
                    }
                });
        }, 300);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [searchText])

    return (
        <div className='container-x section'>
            <div className="space-y-8">
                <div className='text-center'>
                    <span className='eyebrow'>Explore the collection</span>
                    <h2 className='section-title mt-3'>All Toys</h2>
                    <p className='mx-auto mt-2 max-w-md text-sm text-slate-500'>Every toy car in one place — search, browse and find the perfect pick.</p>
                </div>

                <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        type="search"
                        placeholder="Search toys..."
                        className="field-input sm:max-w-sm"
                        aria-label="Search toys"
                    />
                </div>

                {
                    toys.length === 0
                        ? <div className='card-surface grid place-items-center p-16 text-center text-slate-400'>
                            <p className='text-4xl'>🔍</p>
                            <p className='mt-3'>No toys found. Try a different search.</p>
                        </div>
                        : <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                toys.slice(0, visible).map(toy => (
                                    <ProductCard key={toy._id} toy={toy} showDetails />
                                ))
                            }
                        </div>
                }

                {
                    toys.length <= visible ? '' : <div className='text-center'>
                        <button onClick={showAllToys} className="btn btn-outline btn-primary btn-pill px-8">See More</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllToys;
