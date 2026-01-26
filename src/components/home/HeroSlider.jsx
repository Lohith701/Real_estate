import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

// Import images
import rentImg from '../../resources/home-slider/Flat.png';
import buyImg from '../../resources/home-slider/villa.png';
import sellImg from '../../resources/home-slider/prop.png';
import bluecartImg from '../../resources/home-slider/last.png';

const slides = [
    {
        id: 1,
        image: rentImg,
        title: 'Buy a Flat',
        subtitle: 'Find your perfect flat today.',
    },
    {
        id: 2,
        image: buyImg,
        title: 'Buy a Villa',
        subtitle: 'Invest in your dream home with confidence.',
    },
    {
        id: 3,
        image: sellImg,
        title: 'Buy a Commercial property',
        subtitle: 'Get the best valued Commercial property.',
    },
    {
        id: 4,
        image: bluecartImg,
        title: 'One-stop Destination',
        subtitle: 'BlueCart - All your real estate needs sorted.',
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-overlay">
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button className="slider-arrow left" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="slider-arrow right" onClick={nextSlide}>
                &#10095;
            </button>

            {/* Dots Navigation */}
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
