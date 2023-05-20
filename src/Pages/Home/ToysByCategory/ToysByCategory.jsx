import React, { useEffect, useState } from 'react';
import ToysByCategoryRow from './ToysByCategoryRow';

const ToysByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('suv');

  useEffect(() => {
    fetch('https://toys-paradise-server.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredToys = toys.filter(toy => toy.sub_category === activeTab);
  console.log(filteredToys);
//   console.log(toys);
  console.log(activeTab);

  return (
    <div>
      <div className="overflow-x-auto w-full space-y-5">
        <h2 className="text-center text-4xl font-semibold text-primary hidden md:flex justify-center">Shop By Category</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'suv' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('suv')}
          >
            SUV
          </button>
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'classic' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('classic')}
          >
            Classic
          </button>
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'sports' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('sports')}
          >
            Sports
          </button>
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
              filteredToys.map(toy => (
                <ToysByCategoryRow
                  key={toy._id}
                  toy={toy}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToysByCategory;