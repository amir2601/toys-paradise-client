import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);
    const [searchText, setSearchText] = useState('')


    const showAllToys = () => {
        setVisible((previousValue) => previousValue + 20)
    }

    useEffect(() => {
        fetch('https://toys-paradise-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://toys-paradise-server.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    console.log(searchText);
    return (
        <div>
            <div className="overflow-x-auto w-full space-y-5">
                <h2 className='text-center text-4xl font-semibold text-primary hidden md:flex justify-center'>All Toys</h2>
                <div className="text-center flex gap-2 justify-center">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />
                    <input onClick={handleSearch} className='btn btn-outline' type="submit" value="Search" />
                </div>
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