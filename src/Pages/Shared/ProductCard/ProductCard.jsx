import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';
import Stars from '../../../Components/UI/Stars';

const DetailsButton = ({ id }) => {
    const { user } = useContext(AuthContext);

    const handleClick = (event) => {
        if (user) return; // logged in → let the link navigate
        event.preventDefault();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details',
            confirmButtonColor: '#7C3AED',
        });
    };

    return (
        <Link
            onClick={handleClick}
            to={`/toy/${id}`}
            className="btn btn-shine pressable group/det flex-1 items-center gap-1.5 rounded-full border-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-sm font-bold text-white shadow-soft hover:from-violet-500 hover:to-fuchsia-400"
        >
            View Details
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/det:translate-x-1" />
        </Link>
    );
};

const ProductCard = ({ toy, showDetails = false, onDelete, updateLink }) => {
    const { _id, img, toy_name, sub_category, seller_name, price, rating, quantity } = toy;
    const isTopRated = Number(rating) >= 4.5;

    return (
        <article className='card-surface card-hover card-sheen group flex flex-col overflow-hidden'>
            <div className='relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50'>
                {/* floating badges */}
                <span className='absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-violet-700 shadow-sm backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5'>
                    {sub_category}
                </span>

                {isTopRated && (
                    <span className='absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-950 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5'>
                        <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-amber-950/60'></span>
                        Top Rated
                    </span>
                )}

                {img ? (
                    <img
                        src={img}
                        alt={toy_name}
                        loading='lazy'
                        className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1'
                    />
                ) : (
                    <div className='grid h-full w-full place-items-center text-sm text-slate-300'>No image</div>
                )}

                {/* hover veil with quick-scan info */}
                <div className='absolute inset-0 z-[5] flex items-end justify-between bg-gradient-to-t from-violet-950/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                    <span className='translate-y-2 text-xs font-bold text-white transition-transform duration-500 group-hover:translate-y-0'>
                        {quantity === '' || typeof quantity === 'undefined' ? 'In stock' : `${quantity} left in stock`}
                    </span>
                </div>
            </div>

            <div className='flex flex-1 flex-col p-4'>
                <h3 className='line-clamp-1 font-bold text-slate-800 transition-colors duration-200 group-hover:text-violet-700' title={toy_name}>
                    {toy_name}
                </h3>
                {seller_name && (
                    <p className='mt-0.5 line-clamp-1 text-xs text-slate-500'>
                        by <span className='font-semibold text-slate-600'>{seller_name}</span>
                    </p>
                )}

                <div className='mt-2 flex items-center gap-2'>
                    <Stars value={rating} />
                    <span className='text-xs font-semibold text-slate-600'>{rating}</span>
                </div>

                <div className='mt-3 flex items-end justify-between'>

                    <span className='text-xl font-extrabold text-transparent transition-all duration-300'>
                        <span className='bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text'>$ {price}</span>
                    </span>
                    {typeof quantity !== 'undefined' && quantity !== '' && (
                        <span className='text-xs font-medium text-slate-500'>🚗 {quantity} in stock</span>
                    )}
                </div>

                <div className='mt-4 flex items-center gap-2'>
                    {showDetails && <DetailsButton id={_id} />}
                    {updateLink && (
                        <Link
                            to={updateLink}
                            className='btn btn-outline btn-primary btn-sm btn-pill pressable flex-1 rounded-full text-sm font-bold'
                        >
                            Update
                        </Link>
                    )}
                    {onDelete && (
                        <button
                            onClick={() => onDelete(_id)}
                            title='Delete toy'
                            className='btn btn-outline btn-error btn-sm btn-pill pressable rounded-full px-3 transition-transform duration-300 hover:rotate-90'
                        >
                            <FaTrashAlt className='text-xs' />
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProductCard;