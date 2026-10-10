import React from 'react';
import Banner from '../Banner/Banner';
import PhotoSection from '../PhotoSection/PhotoSection';
import FeaturedToys from '../FeaturedToys/FeaturedToys';
import ToysByCategory from '../ToysByCategory/ToysByCategory';
import WeOffer from '../WeOffer/WeOffer';
import Faq from '../Faq/Faq';
import Testimonials from '../Testimonials/Testimonials';
import StatsBand from '../StatsBand/StatsBand';
import Showcase from '../Showcase/Showcase';
import BrandMarquee from '../../../Components/UI/BrandMarquee';
import PageTransition from '../../../Components/Animations/PageTransition';
import useTitle from '../../../Hooks/useTitle';
import { partnerBrands } from '../../../Data/siteData';

const Home = () => {
    useTitle('Home');

    return (
        <PageTransition>
            <div className='container-x pb-4 pt-6'>
                <Banner />
                <BrandMarquee brands={partnerBrands} />
                <FeaturedToys />
                <ToysByCategory />
                <StatsBand />
                <PhotoSection />
                <Showcase />
                <WeOffer />
                <Testimonials />
                <Faq />
            </div>
        </PageTransition>
    );
};

export default Home;