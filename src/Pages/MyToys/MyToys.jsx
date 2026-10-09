import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ProductCard from '../Shared/ProductCard/ProductCard';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const { user } = useContext(AuthContext)
    useTitle('My Toys');

    useEffect(() => {
        fetchData();
    }, [sortOrder]);

    const fetchData = async () => {
        try {
            const url = `https://toys-paradise-server.vercel.app/myToys?email=${user?.email}&sort=${sortOrder}`;
            const response = await fetch(url);
            const data = await response.json();
            setToys(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSortAscending = () => {
        setSortOrder('asc');
    };

    const handleSortDescending = () => {
        setSortOrder('desc');
    };

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Toy has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                fetch(`https://toys-paradise-server.vercel.app/allToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining)
                    })
            }
        })
    }

    return (
        <div className='container-x section'>
            <div className="space-y-8">
                <div className='text-center'>
                    <span className='eyebrow'>Your inventory</span>
                    <h2 className='section-title mt-3'>My Toys</h2>
                    <p className='mx-auto mt-2 max-w-md text-sm text-slate-500'>Manage, update and remove the toys you have listed.</p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-500'>Sort By</h2>
                    <button className="btn btn-pill border border-base-300 bg-base-100 text-slate-600 hover:border-primary hover:text-primary" onClick={handleSortAscending}>Ascending</button>
                    <button className="btn btn-pill border border-base-300 bg-base-100 text-slate-600 hover:border-primary hover:text-primary" onClick={handleSortDescending}>Descending</button>
                </div>

                {
                    toys.length === 0
                        ? <div className='card-surface grid place-items-center p-16 text-center text-slate-400'>
                            <p className='text-4xl'>🧸</p>
                            <p className='mt-3'>You have not added any toys yet.</p>
                        </div>
                        : <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {
                                toys.map(toy => (
                                    <ProductCard
                                        key={toy._id}
                                        toy={toy}
                                        onDelete={handleDelete}
                                        updateLink={`/myToys/${toy._id}`}
                                    />
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyToys;
