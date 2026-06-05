import React, { useEffect, useState } from 'react';
import './Testimonials.css';

import dhamodharImg from '../../resources/Testimonials/Dhamodhar-Navaneetha.webp';
import dhamodharMobileImg from '../../resources/Testimonials/Dhamodhar-Navaneetha-mobile.webp';
import maheshImg from '../../resources/Testimonials/Mahesh - Bhargavi.webp';
import maheshMobileImg from '../../resources/Testimonials/Mahesh - Bhargavi-mobile.webp';
import mohanImg from '../../resources/Testimonials/Mohan-Jyothi.webp';
import mohanMobileImg from '../../resources/Testimonials/Mohan-Jyothi-mobile.webp';
import raviImg from '../../resources/Testimonials/Ravi-navya.webp';
import raviMobileImg from '../../resources/Testimonials/Ravi-navya-mobile.webp';
import venkiImg from '../../resources/Testimonials/venki-Devi.webp';
import venkiMobileImg from '../../resources/Testimonials/venki-Devi-mobile.webp';
import jaisimhaImg from '../../resources/Testimonials/jaisimha_prashanthi.jpg';
import jaisimhaMobileImg from '../../resources/Testimonials/jaisimha_prashanthi-mobile.webp';
import karthikImg from '../../resources/Testimonials/Karthik - Yesswini.webp';
import shambhuprasadImg from '../../resources/Testimonials/Shambhuprasad - Geethika.webp';
import shambhuprasadMobileImg from '../../resources/Testimonials/Shambhuprasad - Geethika-mobile.webp';

const testimonialsData = [
    {
        id: 1,
        name: 'Shambhuprasad - Geethika',
        role: 'Bangalore',
        content: 'Wonderful decision, amazing work delivered.',
        avatar: shambhuprasadImg,
        avatarMobile: shambhuprasadMobileImg,
        rating: 5
    },
    {
        id: 2,
        name: 'Mohan - Jyothi',
        role: 'Bangalore',
        content: 'High-quality work and timely responses.',
        avatar: mohanImg,
        avatarMobile: mohanMobileImg,
        rating: 5
    },
    {
        id: 3,
        name: 'Venki - Devi',
        role: 'Bangalore',
        content: 'The team made the entire property search simple and reliable.',
        avatar: venkiImg,
        avatarMobile: venkiMobileImg,
        rating: 5
    },
    {
        id: 4,
        name: 'Dhamodhar - Navaneetha',
        role: 'Bangalore',
        content: 'Everything felt smooth, transparent, and easy from day one.',
        avatar: dhamodharImg,
        avatarMobile: dhamodharMobileImg,
        rating: 5
    },
    {
        id: 5,
        name: 'Mahesh - Bhargavi',
        role: 'Bangalore',
        content: 'Very useful for home seekers and a great experience overall.',
        avatar: maheshImg,
        avatarMobile: maheshMobileImg,
        rating: 5
    },
    {
        id: 6,
        name: 'Karthik - Yesswini',
        role: 'Bangalore',
        content: 'Clear communication, quick support, and a smooth process.',
        avatar: karthikImg,
        rating: 5
    },
    {
        id: 7,
        name: 'Jaisimha - Prashanthi',
        role: 'Bangalore',
        content: 'They understood our need and helped us find the right match.',
        avatar: jaisimhaImg,
        avatarMobile: jaisimhaMobileImg,
        rating: 5
    },
    {
        id: 8,
        name: 'Ravi - Navya',
        role: 'Bangalore',
        content: 'Positive responses, excellent service, and genuine support.',
        avatar: raviImg,
        avatarMobile: raviMobileImg,
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }) => (
    <article className="testimonial-card">
        <div className="testimonial-avatar-wrap">
            <picture>
                {testimonial.avatarMobile && <source media="(max-width: 768px)" srcSet={testimonial.avatarMobile} />}
                <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - Blue Craft customer`}
                    className="testimonial-avatar"
                />
            </picture>
        </div>

        <h3>{testimonial.name}</h3>
        <p className="testimonial-location">{testimonial.role}</p>

        <div className="testimonial-stars" aria-label={`${testimonial.rating} star rating`}>
            {Array.from({ length: testimonial.rating }).map((_, index) => (
                <i key={index} className="bi bi-star-fill"></i>
            ))}
        </div>

        <p className="testimonial-copy">"{testimonial.content}"</p>
    </article>
);

const Testimonials = () => {
    // Combine two sets for the marquee effect
    const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <h2 className="testimonials-title">What Bangalore Homeowners Say About Us</h2>

                <div className="testimonials-viewport">
                    <div className="testimonials-track">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <div className="testimonial-slide" key={`${testimonial.id}-${index}`}>
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
