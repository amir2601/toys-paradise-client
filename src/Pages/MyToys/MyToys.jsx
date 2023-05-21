import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const { user } = useContext(AuthContext)

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
        <div>
            <div>
                <div className="overflow-x-auto w-full space-y-5">
                    <h2 className='text-center text-4xl font-semibold text-primary hidden md:flex justify-center'>My Toys</h2>
                    <div className="text-center flex items-center justify-center">
                        <h2 className='text-lg font-bold text-primary'>Sort By</h2>
                        <button className="btn mx-3" onClick={handleSortAscending}>Ascending</button>
                        <button className="btn mx-3" onClick={handleSortDescending}>Descending</button>
                        {/* Render the toy list */}
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