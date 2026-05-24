import React, { useState, useEffect } from 'react';
import LeadForm from './LeadForm';
import './LeadForm.css';

const LeadFormPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        if (hasSubmitted || isVisible) return;

        // Show popup 20 seconds after it was last closed (or on initial load)
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 20000);

        return () => clearTimeout(timer);
    }, [isVisible, hasSubmitted]);

    const closePopup = () => {
        setIsVisible(false);
    };

    const handleSuccessSubmit = () => {
        setHasSubmitted(true);
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
                <LeadForm onSuccessSubmit={handleSuccessSubmit} />
            </div>
        </div>
    );
};

export default LeadFormPopup;
