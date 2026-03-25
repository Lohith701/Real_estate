import React from 'react';
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
    // Debug logging
    React.useEffect(() => {
        console.log('HeroSlider mounted with slides:', slides);

        // Manual initialization ensuring Bootstrap carousel works
        const carouselElement = document.getElementById('heroCarousel');
        if (carouselElement && window.bootstrap) {
            console.log('Initializing Bootstrap Carousel manually');
            const carousel = new window.bootstrap.Carousel(carouselElement, {
                interval: 5000,
                ride: 'carousel'
            });
            return () => {
                carousel.dispose();
            };
        } else if (!window.bootstrap) {
            console.warn('Bootstrap not found on window object. Ensure bootstrap.bundle.min.js is imported.');
        }
    }, []);

    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <div className="carousel-inner h-100">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        data-bs-interval="5000"
                        style={{ height: '70vh', minHeight: '400px' }}
                    >
                        <div
                            className="d-block w-100 h-100"
                            style={{
                                backgroundImage: `url("${slide.image}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative'
                            }}
                        >
                            {/* Gradient Overlay */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
                                    zIndex: 1
                                }}
                            ></div>

                            {/* Content Container */}
                            <div
                                className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 w-100 text-start"
                                style={{
                                    top: 0,
                                    bottom: 0,
                                    zIndex: 2,
                                    paddingLeft: '5%',
                                    paddingRight: '5%',
                                    pointerEvents: 'none' // Allow clicks to pass through empty areas
                                }}
                            >
                                <div className="container" style={{ pointerEvents: 'auto' }}> {/* Re-enable clicks for text text selection */}
                                    <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>{slide.title}</h1>
                                    <p className="lead fs-2 fw-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '600px' }}>{slide.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
                style={{ zIndex: 10 }} // Ensure controls are on top
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
                style={{ zIndex: 10 }} // Ensure controls are on top
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeroSlider;
