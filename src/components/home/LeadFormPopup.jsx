import React, { useState, useEffect } from 'react';
import LeadForm from './LeadForm';
import './LeadForm.css';

const LeadFormPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 30 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="lead-form-popup-overlay">
            <div className="lead-form-popup-content">
                <button
                    className="lead-form-popup-close"
                    onClick={closePopup}
                    aria-label="Close"
                >
                    &times;
                </button>
                <div className="text-center mb-4">
                    <h3 className="fw-bold text-primary">Get in Touch</h3>
                    <p className="text-muted small">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <LeadForm />
            </div>
        </div>
    );
};

export default LeadFormPopup;
