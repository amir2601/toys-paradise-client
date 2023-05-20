import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);

    const showAllToys = () => {
        setVisible((previousValue) => previousValue + 20)
    }

    useEffect(() => {
        fetch('https://toys-paradise-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full space-y-5">
                <h2 className='text-center text-4xl font-semibold text-primary hidden md:flex justify-center'>All Toys</h2>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
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