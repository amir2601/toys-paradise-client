import React from 'react';
import Banner from '../Banner/Banner';
import PhotoSection from '../PhotoSection/PhotoSection';
import ToysByCategory from '../ToysByCategory/ToysByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoSection></PhotoSection>
            <ToysByCategory></ToysByCategory>
        </div>
    );
};

export default Home;