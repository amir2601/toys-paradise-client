import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';

const AllToysRow = ({ toy }) => {
    const { _id, img, toy_name, sub_category, seller_name, seller_email, price, quantity } = toy;
    const {user} = useContext(AuthContext);

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
            <td>
                {seller_name}
                <br />
                <span className="badge badge-ghost badge-sm">{seller_email}</span>
            </td>
            <td>{sub_category}</td>
            <td>$ {price}</td>
            <td className='text-center'>{quantity}</td>
            <th>
                {
                    user ? <Link to={`/toy/${_id}`} className="btn btn-ghost btn-sm">details</Link> : <Link onClick={handleSweet} to={`/toy/${_id}`} className="btn btn-ghost btn-sm">details</Link>
                }
            </th>
        </tr>
    );
};

export default AllToysRow;