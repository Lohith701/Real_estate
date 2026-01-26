import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Rent'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = 'Name is required';
        if (!formData.phone.trim()) {
            tempErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            tempErrors.phone = 'Enter a valid 10-digit phone number';
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Enter a valid email address';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Lead Form Submitted:', formData);
            alert('Thank you! We will contact you soon.');
            setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Rent'
            });
        }
    };

    return (
        <section className="lead-form-section">
            <div className="lead-form-container">
                <div className="lead-form-header">
                    <h2>Get in Touch</h2>
                    <p>Interested in our services? Fill out the form below and we'll get back to you.</p>
                </div>
                <form className="lead-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">I'm interested in</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="Rent">Flats</option>
                            <option value="Buy">Villas</option>
                            <option value="Sell">Commercial Property</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">Get a Call Back</button>
                </form>
            </div>
        </section>
    );
};

export default LeadForm;
