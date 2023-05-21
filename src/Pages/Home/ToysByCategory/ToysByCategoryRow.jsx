import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Provider/AuthProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const ToysByCategoryRow = ({ toy }) => {
    const { _id, img, toy_name, sub_category, seller_name, seller_email, price, rating } = toy;
    const { user } = useContext(AuthContext);

    const handleSweet = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details',
        })
    }

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-20 h-20">
                        {img && <img src={img} />}
                    </div>
                </div>
            </td>
            <td>
                <h4 className="font-bold">{toy_name}</h4>
            </td>
            <td>$ {price}</td>
            <td>
                <div className='flex items-center justify-center gap-3'>
                    <p>{rating}</p>
                    <Rating className='text-yellow-600'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                </div>
            </td>
            <th>
                {
                    user ? <Link to={`/toy/${_id}`} className="btn btn-ghost btn-sm">details</Link> : <Link onClick={handleSweet} to={`/toy/${_id}`} className="btn btn-ghost btn-sm">details</Link>
                }
            </th>
        </tr>
    );
};

export default ToysByCategoryRow;