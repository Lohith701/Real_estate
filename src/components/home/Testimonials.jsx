import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Prameet',
        role: 'Tenant',
        content: "Getting a roommate through Blue Craft Properties was a cakewalk for me. I've been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging until I found this platform. It made everything so smooth and easy.",
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        rating: 5
    },
    {
        id: 2,
        name: 'Mohamme Kouse',
        role: 'Owner',
        content: "I am Mohamed Kouse. The Blue Craft Properties app is very useful for home seekers looking for homes to rent. I have also earned money by using the Refer & Earn option. I am so happy to use this app and would recommend it to everyone looking for properties.",
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5
    },
    {
        id: 3,
        name: 'Ayan',
        role: 'Owner',
        content: "Wow! I am really amazed. Refer n Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is fast and efficient. Great work team!",
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        rating: 5
    },
    {
        id: 4,
        name: 'Balasubramaniyam',
        role: 'Owner',
        content: "RMs of Blue Craft Properties team, I really would like to appreciate positive and quick responses from you guys. Thank you for excellent service through paid plans of Blue Craft Properties. It saved me a lot of brokerage and hassle.",
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        rating: 5
    },
    {
        id: 5,
        name: 'Priya Sharma',
        role: 'Tenant',
        content: "Finding a flat without brokerage was a dream come true. The verified listings ensured I didn't waste time on fake leads. The entire process from shortlisting to moving in was handled professionally.",
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
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
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="user-avatar rounded-circle"
                    />
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
