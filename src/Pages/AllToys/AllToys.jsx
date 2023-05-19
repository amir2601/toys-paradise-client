import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const toys = useLoaderData();
    console.log(toys);

    return (
        <div>
            <div className="overflow-x-auto w-full space-y-5">
                <h2 className='text-center text-4xl font-semibold text-primary'>All Toys</h2>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;