import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Homeowner',
        content: "Blue Craft Properties made finding my dream home incredibly easy. The team was professional, transparent, and responsive throughout the entire process. I couldn't be happier with my new villa!",
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Commercial Investor',
        content: "I've worked with many agencies, but Blue Craft stands out for their market insights and dedication. They helped me secure a prime commercial property that exceeded my expectations.",
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Tenant',
        content: "Renting a flat through Blue Craft was a breeze. They understood my requirements perfectly and showed me options that were spot on. Highly recommended!",
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        id: 4,
        name: 'David Wilson',
        role: 'Property Seller',
        content: "Selling my property was stress-free thanks to Blue Craft. They handled everything from valuation to paperwork, and I got a great price. truly professional service.",
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="section-header">
                    <h2>What Our Clients Say</h2>
                    <p>Read about the experiences of our satisfied clients.</p>
                </div>

                <div className="testimonial-slider">
                    <div className="testimonial-card-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonialsData.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <p className="testimonial-content">"{testimonial.content}"</p>
                                    <div className="testimonial-author">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                                        <div className="author-info">
                                            <h4>{testimonial.name}</h4>
                                            <span>{testimonial.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
                        &#10094;
                    </button>
                    <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
                        &#10095;
                    </button>

                    <div className="slider-dots">
                        {testimonialsData.map((_, index) => (
                            <span
                                key={index}
                                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
