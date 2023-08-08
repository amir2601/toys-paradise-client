import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import PhotoSection from '../PhotoSection/PhotoSection';
import ToysByCategory from '../ToysByCategory/ToysByCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WeOffer from '../WeOffer/WeOffer';
import Faq from '../Faq/Faq';
import useTitle from '../../../Hooks/useTitle';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    useTitle('Home');

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-down" data-aos-duration="1000">
                <PhotoSection></PhotoSection>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <ToysByCategory></ToysByCategory>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <WeOffer></WeOffer>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <Testimonials></Testimonials>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;