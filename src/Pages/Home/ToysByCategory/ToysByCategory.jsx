import React, { useEffect, useState } from 'react';
import ProductCard from '../../Shared/ProductCard/ProductCard';

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

  const categories = [
    { value: 'suv', label: 'SUV' },
    { value: 'classic', label: 'Classic' },
    { value: 'sports', label: 'Sports' },
  ];

  return (
    <section className='section'>
      <div className="space-y-8">
        <div className='text-center'>
          <span className='eyebrow'>Browse</span>
          <h2 className="section-title mt-3">Toys By <span className='text-gradient'>Category</span></h2>
          <p className='mx-auto mt-2 max-w-md text-sm text-slate-500'>Pick a category and discover your next favourite ride.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {
            categories.map(category => (
              <button
                key={category.value}
                onClick={() => handleTabClick(category.value)}
                className={`btn btn-pill px-6 ${activeTab === category.value
                  ? 'btn-primary shadow-lg shadow-primary/25'
                  : 'border border-base-300 bg-base-100 text-slate-600 hover:border-primary hover:text-primary'
                  }`}
              >
                {category.label}
              </button>
            ))
          }
        </div>

        {
          filteredToys.length === 0
            ? <div className='card-surface grid place-items-center p-12 text-center text-slate-400'>
                No toys in this category yet.
              </div>
            : <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                  filteredToys.map(toy => (
                    <ProductCard key={toy._id} toy={toy} showDetails />
                  ))
                }
              </div>
        }
      </div>
    </section>
  );
};

export default ToysByCategory;
