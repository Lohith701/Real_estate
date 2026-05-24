import React, { useState } from 'react';
import './Testimonials.css';

// Import images
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

const testimonialsData = [
    {
        id: 1,
        name: 'Dhamodhar & Navaneetha',
        role: 'Bangalore',
        content: "Getting a roommate through Blue Craft Properties was a cakewalk for me. I've been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging until I found this platform. It made everything so smooth and easy.",
        avatar: dhamodharImg,
        avatarMobile: dhamodharMobileImg,
        rating: 5
    },
    {
        id: 2,
        name: 'Mahesh & Bhargavi',
        role: 'Bangalore',
        content: "I am Mahesh. The Blue Craft Properties app is very useful for home seekers looking for homes to rent. I have also earned money by using the Refer & Earn option. I am so happy to use this app and would recommend it to everyone looking for properties.",
        avatar: maheshImg,
        avatarMobile: maheshMobileImg,
        rating: 5
    },
    {
        id: 3,
        name: 'Mohan & Jyothi',
        role: 'Bangalore',
        content: "Wow! I am really amazed. Refer n Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is fast and efficient. Great work team!",
        avatar: mohanImg,
        avatarMobile: mohanMobileImg,
        rating: 5
    },
    {
        id: 4,
        name: 'Ravi & Navya',
        role: 'Bangalore',
        content: "RMs of Blue Craft Properties team, I really would like to appreciate positive and quick responses from you guys. Thank you for excellent service through paid plans of Blue Craft Properties. It saved me a lot of brokerage and hassle.",
        avatar: raviImg,
        avatarMobile: raviMobileImg,
        rating: 5
    },
    {
        id: 5,
        name: 'Venki & Devi',
        role: 'Bangalore',
        content: "Finding a flat without brokerage was a dream come true. The verified listings ensured I didn't waste time on fake leads. The entire process from shortlisting to moving in was handled professionally.",
        avatar: venkiImg,
        avatarMobile: venkiMobileImg,
        rating: 4
    }
];

const TestimonialCard = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
    const shouldTruncate = testimonial.content.length > maxLength;

    const displayContent = isExpanded || !shouldTruncate
        ? testimonial.content
        : `${testimonial.content.substring(0, maxLength)}...`;

    return (
        <div className="testimonial-card h-100 bg-white p-4 rounded-2 border shadow-sm text-start position-relative">
            <div className="d-flex align-items-start mb-3">
                <div className="avatar-wrapper position-relative me-3">
                    <picture style={{ width: '100%', height: '100%', display: 'block' }}>
                        {testimonial.avatarMobile && <source media="(max-width: 768px)" srcSet={testimonial.avatarMobile} />}
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="user-avatar rounded-circle"
                        />
                    </picture>
                    <div className="rating-badge position-absolute bottom-0 start-50 translate-middle-x badge rounded-pill bg-dark d-flex align-items-center justify-content-center">
                        <span className="me-1 text-warning">★</span>
                        <span>{testimonial.rating}</span>
                    </div>
                </div>
                <div className="mt-1">
                    <h5 className="user-name mb-0 fw-bold">{testimonial.name}</h5>
                    <div className="user-role text-secondary small">{testimonial.role}</div>
                </div>
            </div>

            <div className="testimonial-body">
                <p className="text-secondary mb-1 small text-content">
                    {displayContent}
                    {shouldTruncate && !isExpanded && (
                        <span
                            className="see-more-link ms-1 text-primary cursor-pointer text-decoration-none"
                            onClick={() => setIsExpanded(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            See More
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section py-5 bg-white">
            <div className="container-fluid px-lg-5">
                <div className="section-header text-center mb-5">
                    <h2 className="section-title fw-bold display-6 text-dark opacity-75">Blue Craft Properties Reviews - See What Our Valuable Customers Say</h2>
                </div>

                <div className="row flex-nowrap overflow-auto pb-4 px-2 g-4 scrollbar-hidden" style={{ scrollBehavior: 'smooth' }}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="col-12 col-md-6 col-lg-3" style={{ minWidth: '300px' }}>
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
