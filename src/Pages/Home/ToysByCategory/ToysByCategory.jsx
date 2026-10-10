import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import SectionHeading from '../../../Components/UI/SectionHeading';

const ease = [0.16, 1, 0.3, 1];

const categories = [
  { value: 'suv', label: 'SUV', emoji: '🚙' },
  { value: 'classic', label: 'Classic', emoji: '🚗' },
  { value: 'sports', label: 'Sports', emoji: '🏎️' },
];

const ToysByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState('suv');

  useEffect(() => {
    fetch('https://toys-paradise-server.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setToys(data))
      .catch(error => console.log(error.message));
  }, []);

  const filteredToys = toys.filter(toy => toy.sub_category === activeTab);

  return (
    <section className='section'>
      <div className="space-y-8">
        <SectionHeading
          eyebrow='Browse'
          title={<>Toys By <span className='text-gradient'>Category</span></>}
          subtitle='Pick a category and discover your next favourite ride.'
        />

        {/* Animated pill tabs */}
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur sm:inline-flex sm:gap-2">
          {categories.map(category => {
            const active = activeTab === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveTab(category.value)}
                className={`pressable relative flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  active ? 'text-white' : 'text-slate-500 hover:text-violet-700'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-soft"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className={`relative z-10 ${active ? 'grayscale-0' : ''}`}>{category.emoji}</span>
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid swaps with a soft cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.985 }}
            transition={{ duration: 0.4, ease }}
          >
            {filteredToys.length === 0 ? (
              <div className='card-surface grid place-items-center p-12 text-center'>
                <p className='animate-bounce-in text-5xl'>🪀</p>
                <p className='mt-4 font-semibold text-slate-500'>No toys in this category yet.</p>
                <p className='mt-1 text-sm text-slate-400'>Check back soon — new rides land every week.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filteredToys.map((toy, index) => (
                  <motion.div
                    key={toy._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07, ease }}
                  >
                    <ProductCard toy={toy} showDetails />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ToysByCategory;
