import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://toys-paradise-server.vercel.app/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

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

    const handleSort = (event) => {
        console.log(event.target.value);
        const selected = event.target.value;
        fetch(`https://toys-paradise-server.vercel.app/myToys?sort=${selected}&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full space-y-5">
                    <h2 className='text-center text-4xl font-semibold text-primary hidden md:flex justify-center'>My Toys</h2>
                    <div className='flex items-center gap-5'>
                        <select
                            onChange={handleSort}
                            className='btn btn-outline ml-4'
                        >
                            <option>Ascendeing</option>
                            <option>Descendeing</option>
                        </select>
                        <h2 className='text-lg font-semibold'>Sort By</h2>
                    </div>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Remove</th>
                                <th>Toy Picture</th>
                                <th>Toy Name</th>
                                <th>Seller Name & Email</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <MyToysRow
                                    key={toy._id}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                ></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;