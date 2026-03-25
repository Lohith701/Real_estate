import React from 'react';
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
        <section className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6 mb-3">Our Services</h2>
                    <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>We provide comprehensive real estate solutions.</p>
                </div>
                <div className="row g-4">
                    {services.map((service) => (
                        <div key={service.id} className="col-md-4">
                            <div className="card h-100 border-light shadow-sm text-center p-4 service-card-hover" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                                <div className="card-body d-flex flex-column">
                                    <h3 className="card-title h3 fw-bold mb-3">{service.title}</h3>
                                    <p className="card-text text-secondary mb-4 flex-grow-1 lead fs-6">{service.description}</p>
                                    <div>
                                        <Link to={service.link} className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                                            {service.cta}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
