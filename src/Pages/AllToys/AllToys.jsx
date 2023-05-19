import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);

    const showAllToys = () => {
        setVisible((previousValue) => previousValue + 20)
    }

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
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
                fetch(`http://localhost:5000/allToys/${id}`, {
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
        <div>
            <div className="overflow-x-auto w-full space-y-5">
                <h2 className='text-center text-4xl font-semibold text-primary hidden md:flex justify-center'>All Toys</h2>
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
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.slice(0, visible).map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
                {
                    toys.length <= visible ? '' : <div className='text-center'>
                        <button onClick={showAllToys} className="btn btn-outline btn-primary">See More</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllToys;