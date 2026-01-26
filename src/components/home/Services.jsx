import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Buy a Flat',
            description: 'Find a flat that fits your lifestyle and budget.',
            link: '/buy',
            cta: 'Find Flats'
        },
        {
            id: 2,
            title: 'Buy a Villa',
            description: 'Explore our wide range of villas for sale.',
            link: '/buy',
            cta: 'Buy Now'
        },
        {
            id: 3,
            title: 'Buy a Commercial Property',
            description: 'Get the best valued Commercial Property.',
            link: '/buy',
            cta: 'Buy Now'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2>Our Services</h2>
                    <p>We provide comprehensive real estate solutions.</p>
                </div>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <Link to={service.link} className="service-cta">
                                {service.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
