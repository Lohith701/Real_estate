import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* 1. HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>About Blue Craft Properties</h1>
                    <p className="subtitle">Trusted real estate partners in Bengaluru</p>
                </div>
            </section>

            <div className="about-container">
                {/* 2. WHAT SETS US APART (FEATURE CARDS) */}
                <section className="about-features">
                    <div className="feature-card">
                        <h3>Seamless Experience</h3>
                        <p>We provide a hassle-free and smooth property selling journey from start to finish.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Curated Listings</h3>
                        <p>Exclusive access to hand-picked land, flats, and villas that meet high standards.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Quality Focus</h3>
                        <p>We prioritize premium quality and ensure complete customer satisfaction in every deal.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Client-First Approach</h3>
                        <p>Our transparent and honest process puts your needs and interests above everything else.</p>
                    </div>
                </section>

                {/* 3. OUR MISSION (SPLIT LAYOUT) */}
                <section className="about-mission">
                    <div className="mission-text">
                        <h2>Our Mission</h2>
                        <p>
                            At Blue Craft Properties, our mission is to provide a seamless property selling experience.
                            We specialize in land, flats, and villas, carefully curating 3–6 unique sites.
                            We prioritize quality, trust, and customer satisfaction.
                        </p>
                    </div>
                    <div className="mission-visual">
                        {/* Visual element or placeholder for image */}
                        <div className="visual-placeholder"></div>
                    </div>
                </section>

                {/* 4. EXPERIENCE & CREDIBILITY SECTION */}
                <section className="about-credibility">
                    <div className="credibility-content">
                        <h2>Why Choose Us?</h2>
                        <div className="credibility-grid">
                            <div className="cred-item">
                                <h3>Expertise</h3>
                                <p>Strong experience in Bengaluru real estate market.</p>
                            </div>
                            <div className="cred-item">
                                <h3>Relationships</h3>
                                <p>Building long-term client relationships based on mutual respect.</p>
                            </div>
                            <div className="cred-item">
                                <h3>Integrity</h3>
                                <p>Trust, transparency, and integrity are our core values.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OUR VISION */}
                <section className="about-vision">
                    <h2>Our Vision</h2>
                    <p>
                        Our vision at Blue Craft Properties is to become a leading property selling platform,
                        known for transparency, reliability, and a client-centric approach.
                        We aim to redefine real estate standards and set new benchmarks of excellence.
                    </p>
                </section>

                {/* 6. SOFT CALL TO ACTION */}
                <section className="about-cta">
                    <p>Ready to find your dream property?</p>
                    <a href="/contact" className="cta-button">Contact Us</a>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
