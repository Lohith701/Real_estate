import React, { useEffect } from 'react';
import LeadForm from '../components/home/LeadForm';

const ContactPage = () => {
    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mapSrc = "https://maps.google.com/maps?q=764/1,+19th+Main,+22nd+Cross,+Club+Circle,+HSR+Layout,+Sector+2,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="bg-light pb-5">
            {/* 1. Hero Section */}
            <div className="bg-primary text-white py-5 mb-5 text-center">
                <div className="container py-4">
                    <h1 className="fw-bold display-4 mb-3">Contact Blue Craft Properties</h1>
                    <p className="lead opacity-75 fw-light">We’re here to help you find the right property</p>
                </div>
            </div>

            {/* 2. Main Section */}
            <div className="container mb-5">
                <div className="row g-5">
                    {/* Left Column: Contact Info */}
                    <div className="col-lg-5">
                        <h2 className="text-primary fw-bold mb-4 pb-3 border-bottom d-inline-block">Get In Touch</h2>

                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <i className="fas fa-building fs-5"></i>
                            </div>
                            <div className="ms-4">
                                <h3 className="h5 fw-bold text-secondary mb-1">Company Name</h3>
                                <p className="fs-5 fw-medium text-dark">Blue Craft Properties</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <i className="fas fa-map-marker-alt fs-5"></i>
                            </div>
                            <div className="ms-4">
                                <h3 className="h5 fw-bold text-secondary mb-1">Visit Us</h3>
                                <p className="lead fs-6 text-dark fw-medium lh-base">
                                    #764/1, 19th Main, 22nd Cross, Club Circle,<br />
                                    HSR Layout, Sector 2,<br />
                                    Bengaluru – 560102
                                </p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <i className="fas fa-phone-alt fs-5"></i>
                            </div>
                            <div className="ms-4">
                                <h3 className="h5 fw-bold text-secondary mb-1">Call Us</h3>
                                <p className="fs-5 fw-medium text-dark">9014322319</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <i className="fas fa-envelope fs-5"></i>
                            </div>
                            <div className="ms-4">
                                <h3 className="h5 fw-bold text-secondary mb-1">Email Us</h3>
                                <p className="fs-5 fw-medium text-dark">bluecraftproperties@gmail.com</p>
                            </div>
                        </div>

                        <div className="d-flex mb-4">
                            <div className="flex-shrink-0 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                <i className="fas fa-clock fs-5"></i>
                            </div>
                            <div className="ms-4">
                                <h3 className="h5 fw-bold text-secondary mb-1">Business Hours</h3>
                                <p className="fs-5 fw-medium text-dark">Monday to Sunday<br />10:00 AM – 8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm p-4 p-md-5 rounded-3">

                            <LeadForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Map Section */}
            <div className="container pb-5">
                <div className="ratio ratio-21x9 rounded-3 shadow-sm overflow-hidden" style={{ minHeight: '400px', borderRadius: '12px' }}>
                    <iframe
                        title="Blue Craft Properties Location"
                        src={mapSrc}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
