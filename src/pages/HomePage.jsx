import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Testimonials from '../components/home/Testimonials';
import Services from '../components/home/Services';
import SearchBar from '../components/home/SearchBar';
import LeadFormPopup from '../components/home/LeadFormPopup';
import PageMeta from '../components/common/PageMeta';

const HomePage = () => {
    return (
        <div className="home-page">
            <PageMeta
                title="BlueCraft Properties — Premium Real Estate in Bengaluru"
                description="Find your dream property in Bengaluru with BlueCraft Properties. Curated plots, flats, and villas with zero brokerage. Trusted real estate partners."
                keywords="real estate Bengaluru, buy property Bangalore, plots, flats, villas, BlueCraft Properties, zero brokerage"
            />
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
