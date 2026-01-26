import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import Testimonials from '../components/home/Testimonials';
import LeadForm from '../components/home/LeadForm';
import Services from '../components/home/Services';

const HomePage = () => {
    return (
        <div className="home-page">
            <HeroSlider />
            <Services />
            <Testimonials />
            <LeadForm />
        </div>
    );
};

export default HomePage;
