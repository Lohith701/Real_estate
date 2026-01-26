import React, { useState, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',

        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', formData);
        alert('Thank you for contacting Blue Craft Properties! We will get back to you shortly.');
        setFormData({
            name: '',
            phone: '',
            email: '',

            message: ''
        });
    };

    // Constructing map src from the provided location details for embedding
    // Since direct search links often don't work in iframes, we use the standard embed format 
    // but try to strictly point to the location requested.
    // The user requested strict adherence to the link, but for usability we need a valid src.
    const mapSrc = "https://maps.google.com/maps?q=764/1,+19th+Main,+22nd+Cross,+Club+Circle,+HSR+Layout,+Sector+2,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="contact-page">
            {/* 1. Hero Section */}
            <div className="contact-hero">
                <h1>Contact Blue Craft Properties</h1>
                <p>We’re here to help you find the right property</p>
            </div>

            {/* 2. Main Section */}
            <div className="contact-container">
                {/* Left Column: Contact Info */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>

                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="info-content">
                            <h3>Company Name</h3>
                            <p>Blue Craft Properties</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-content">
                            <h3>Visit Us</h3>
                            <p>
                                #764/1, 19th Main, 22nd Cross, Club Circle,<br />
                                HSR Layout, Sector 2,<br />
                                Bengaluru – 560102
                            </p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="info-content">
                            <h3>Call Us</h3>
                            <p>9014322319</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-content">
                            <h3>Email Us</h3>
                            <p>bluecraftproperties@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="info-content">
                            <h3>Business Hours</h3>
                            <p>Monday to Sunday<br />10:00 AM – 8:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-section">
                    <div className="contact-form-card">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>



                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Request a Call Back</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* 3. Map Section */}
            <div className="map-section">
                <div className="map-container">
                    <iframe
                        title="Blue Craft Properties Location"
                        src={mapSrc}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
