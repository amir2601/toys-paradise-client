import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const DetailsButton = ({ id }) => {
    const { user } = useContext(AuthContext);

    const handleSweet = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details',
        })
    }

    return (
        <Link
            onClick={user ? undefined : handleSweet}
            to={`/toy/${id}`}
            className="btn btn-primary btn-sm btn-pill flex-1 shadow-sm shadow-primary/20"
        >
            View Details
        </Link>
    );
};

const ProductCard = ({ toy, showDetails = false, onDelete, updateLink }) => {
    const { _id, img, toy_name, sub_category, seller_name, price, rating, quantity } = toy;
    const isTopRated = Number(rating) >= 4.5;

    return (
        <article className='card-surface card-hover group flex flex-col overflow-hidden'>
            <div className='relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-50 to-fuchsia-50'>
                <span className='absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-violet-700 shadow-sm backdrop-blur'>
                    {sub_category}
                </span>

                {
                    isTopRated && (
                        <span className='absolute right-3 top-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-950 shadow-sm'>
                            ★ Top Rated
                        </span>
                    )
                }

                {
                    img
                        ? <img src={img} alt={toy_name} loading='lazy' className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        : <div className='grid h-full w-full place-items-center text-sm text-slate-300'>No image</div>
                }
            </div>

            <div className='flex flex-1 flex-col p-4'>
                <h3 className='line-clamp-1 font-bold text-slate-800' title={toy_name}>{toy_name}</h3>
                {
                    seller_name && <p className='mt-0.5 line-clamp-1 text-xs text-slate-400'>by {seller_name}</p>
                }

                <div className='mt-2 flex items-center gap-2'>
                    <Rating
                        className='text-sm text-amber-500'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                    <span className='text-xs font-semibold text-slate-500'>{rating}</span>
                </div>

                <div className='mt-3 flex items-end justify-between'>
                    <span className='text-xl font-extrabold text-violet-700'>$ {price}</span>
                    {
                        typeof quantity !== 'undefined' && quantity !== '' && (
                            <span className='text-xs font-medium text-slate-400'>{quantity} in stock</span>
                        )
                    }
                </div>

                <div className='mt-4 flex items-center gap-2'>
                    {showDetails && <DetailsButton id={_id} />}
                    {
                        updateLink && (
                            <Link to={updateLink} className='btn btn-outline btn-primary btn-sm btn-pill flex-1'>Update</Link>
                        )
                    }
                    {
                        onDelete && (
                            <button
                                onClick={() => onDelete(_id)}
                                title='Delete toy'
                                className='btn btn-outline btn-error btn-sm btn-pill px-3 transition-transform duration-200 hover:rotate-90'
                            >
                                <FaTrashAlt className='text-xs' />
                            </button>
                        )
                    }
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
