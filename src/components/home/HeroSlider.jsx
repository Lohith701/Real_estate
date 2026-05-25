import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
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
        cta: 'Explore Flats',
    },
    {
        id: 2,
        image: buyImg,
        title: 'Buy a Villa',
        subtitle: 'Invest in your dream home with confidence.',
        cta: 'View Villas',
    },
    {
        id: 3,
        image: sellImg,
        title: 'Commercial Property',
        subtitle: 'Get the best valued commercial property.',
        cta: 'Browse Commercial',
    },
    {
        id: 4,
        image: bluecartImg,
        title: 'One-stop Destination',
        subtitle: 'BlueCraft — All your real estate needs sorted.',
        cta: 'Get Started',
    },
];

const AUTOPLAY_INTERVAL = 5000;

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback((index) => {
        if (isTransitioning || index === current) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [current, isTransitioning]);

    const goNext = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo]);

    const goPrev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length);
    }, [current, goTo]);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [goNext]);

    return (
        <section className="hero-slider" aria-label="Featured properties slideshow">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === current ? 'is-active' : ''}`}
                >
                    {/* Background Image */}
                    <div
                        className={`hero-slide__bg ${index === current ? 'is-zooming' : ''}`}
                        style={{ backgroundImage: `url("${slide.image}")` }}
                    />

                    {/* Overlay */}
                    <div className="hero-slide__overlay" />
                </div>
            ))}

            {/* Content — always on top */}
            <div className="hero-slider__content">
                <div className="hero-slider__text-container">
                    <span className="hero-slider__eyebrow">BlueCraft Properties</span>
                    <h1 className="hero-slider__title" key={current}>
                        {slides[current].title}
                    </h1>
                    <p className="hero-slider__subtitle" key={`sub-${current}`}>
                        {slides[current].subtitle}
                    </p>
                    <Link to="/properties" className="hero-slider__cta">
                        {slides[current].cta}
                        <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className="hero-slider__arrow hero-slider__arrow--prev" onClick={goPrev} aria-label="Previous slide">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button className="hero-slider__arrow hero-slider__arrow--next" onClick={goNext} aria-label="Next slide">
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Dots */}
            <div className="hero-slider__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-slider__dot ${index === current ? 'is-active' : ''}`}
                        onClick={() => goTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="hero-slider__progress">
                <div
                    className="hero-slider__progress-bar"
                    key={`progress-${current}`}
                />
            </div>
        </section>
    );
};

export default HeroSlider;
