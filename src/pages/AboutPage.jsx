import React from 'react';
import houseImage from '../assets/blue-craft-house.jpg';
import HeroBanner from '../components/common/HeroBanner';
import aboutBannerImg from '../resources/hero_banner/interior-modern-open-plan-kitchen-with-dining-table-glowi.jpg.jpeg';
import PageMeta from '../components/common/PageMeta';

const AboutPage = () => {
    return (
        <div className="bg-light pb-5">
            <PageMeta
                title="About Us"
                description="Learn about BlueCraft Properties — trusted real estate partners in Bengaluru providing seamless property selling experiences for plots, flats, and villas."
                keywords="about BlueCraft Properties, real estate Bengaluru, trusted property agents, HSR Layout"
            />
            {/* 1. HERO BANNER */}
            <HeroBanner
                backgroundImage={aboutBannerImg}
                eyebrow="Our Story"
                title="About Us"
                subtitle="Trusted real estate partners in Bengaluru"
            />

            <div className="container mt-5">
                {/* 2. WHAT SETS US APART (FEATURE CARDS) */}
                <section className="mb-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-4 hover-shadow" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                                <h3 className="h5 fw-bold text-primary mb-3">Seamless Experience</h3>
                                <p className="small text-secondary mb-0 lh-base">We provide a hassle-free and smooth property selling journey from start to finish.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-4 hover-shadow" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                                <h3 className="h5 fw-bold text-primary mb-3">Curated Listings</h3>
                                <p className="small text-secondary mb-0 lh-base">Exclusive access to hand-picked land, flats, and villas that meet high standards.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-4 hover-shadow" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                                <h3 className="h5 fw-bold text-primary mb-3">Quality Focus</h3>
                                <p className="small text-secondary mb-0 lh-base">We prioritize premium quality and ensure complete customer satisfaction in every deal.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm p-4 hover-shadow" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                                <h3 className="h5 fw-bold text-primary mb-3">Client-First Approach</h3>
                                <p className="small text-secondary mb-0 lh-base">Our transparent and honest process puts your needs and interests above everything else.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. OUR MISSION (SPLIT LAYOUT) */}
                <section className="mb-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <h2 className="fw-bold display-6 mb-4 text-dark">Our Mission</h2>
                            <p className="lead text-secondary lh-lg">
                                At Blue Craft Properties, our mission is to provide a seamless property selling experience.
                                We specialize in land, flats, and villas, carefully curating 3–6 unique sites.
                                We prioritize quality, trust, and customer satisfaction.
                            </p>
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="rounded-3 overflow-hidden shadow-lg position-relative bg-white" style={{ height: '400px' }}>
                                <img src={houseImage} alt="Blue Craft Properties House" className="w-100 h-100 object-fit-contain" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. EXPERIENCE & CREDIBILITY SECTION */}
                <section className="bg-white p-5 rounded-3 shadow-sm mb-5 text-center border">
                    <h2 className="fw-bold mb-5 display-6 text-dark">Why Choose Us?</h2>
                    <div className="row g-5">
                        <div className="col-md-4">
                            <h3 className="h4 fw-bold text-primary mb-3">Expertise</h3>
                            <p className="text-secondary lead fs-6">Strong experience in Bengaluru real estate market.</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h4 fw-bold text-primary mb-3">Relationships</h3>
                            <p className="text-secondary lead fs-6">Building long-term client relationships based on mutual respect.</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h4 fw-bold text-primary mb-3">Integrity</h3>
                            <p className="text-secondary lead fs-6">Trust, transparency, and integrity are our core values.</p>
                        </div>
                    </div>
                </section>

                {/* 5. OUR VISION */}
                <section className="text-center mx-auto mb-5 py-4" style={{ maxWidth: '800px' }}>
                    <h2 className="fw-bold mb-4 display-6 text-dark">Our Vision</h2>
                    <p className="lead text-secondary lh-lg fs-4">
                        Our vision at Blue Craft Properties is to become a leading property selling platform,
                        known for transparency, reliability, and a client-centric approach.
                        We aim to redefine real estate standards and set new benchmarks of excellence.
                    </p>
                </section>

                {/* 6. SOFT CALL TO ACTION */}
                <section className="bg-primary text-white text-center p-5 rounded-3 shadow mb-5 d-flex flex-column align-items-center gap-4">
                    <p className="h2 fw-medium mb-0">Ready to find your dream property?</p>
                    <a href="/contact" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-primary shadow-sm hover-lift" style={{ transition: 'transform 0.2s' }}>Contact Us</a>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
