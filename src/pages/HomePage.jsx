import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Testimonials from '../components/home/Testimonials';
import Services from '../components/home/Services';
import SearchBar from '../components/home/SearchBar';
import LeadFormPopup from '../components/home/LeadFormPopup';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <Services />
            <div className="container py-5 d-flex justify-content-center">
                <SearchBar />
            </div>
            <Testimonials />
            <LeadFormPopup />
        </div>
    );
};

export default HomePage;
