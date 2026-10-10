import React from 'react';
import Swal from 'sweetalert2'
import { motion } from 'framer-motion';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import PageTransition from '../../Components/Animations/PageTransition';

const UpdateToy = () => {
    const toy = useLoaderData();
    useTitle('Update Toys');

    if (!toy) {
        return (
            <PageTransition>
                <div className='container-x section'>
                    <div className='card-surface mx-auto grid max-w-md place-items-center p-12 text-center'>
                        <p className='text-4xl'>🔍</p>
                        <p className='mt-4 font-semibold text-slate-600'>We couldn&apos;t find that toy.</p>
                        <p className='mt-1 text-sm text-slate-500'>It may have been removed or the link is out of date.</p>
                        <Link
                            to='/myToys'
                            className='btn btn-shine pressable mt-6 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 font-bold text-white shadow-soft'
                        >
                            Back to My Toys
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    const { _id } = toy;

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateToy = {
            price,
            quantity,
            description
        }

        fetch(`https://toys-paradise-server.vercel.app/myToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your toy has been updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <PageTransition>
        <div className='container-x section'>
            <div className='mx-auto max-w-3xl'>
                <div className='mb-8 text-center'>
                    <span className='eyebrow'>
                        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-violet-500 align-middle" />
                        Keep it fresh
                    </span>
                    <h2 className='section-title mt-3'>Update Toy</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="card-surface p-6 sm:p-8"
                >
                    <form onSubmit={handleUpdateToy}>
                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                            <div className="form-control">
                                <label className="field-label">
                                    Price
                                </label>
                                <input type="text" placeholder="Price" name='price' className="field-input" defaultValue={toy.price} />
                            </div>
                            <div className="form-control">
                                <label className="field-label">
                                    Available Quantity
                                </label>
                                <input type="text" placeholder="Available Quantity" name='quantity' className="field-input" defaultValue={toy.quantity} />
                            </div>
                        </div>
                        <div className="form-control mt-5">
                            <label className="field-label">
                                Detail Description
                            </label>
                            <textarea className='field-input resize-y' name="description" id="" cols="30" rows="6" defaultValue={toy.description}></textarea>
                        </div>
                        <div className="form-control mt-7">
                            <button className="btn btn-shine pressable w-full rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 font-bold text-white shadow-soft transition-all duration-300 hover:shadow-lift sm:w-auto sm:px-12">Update</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
        </PageTransition>
    );
};

export default UpdateToy;
