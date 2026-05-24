import React, { useState } from 'react';

const LeadForm = ({ onSuccessSubmit }) => {
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
            const submitData = {
                ...formData,
                _cc: "Projects@bluecraftdesignstudio.com",
                _subject: "New Lead from Website Form"
            };

            // Fire request in background
            fetch('https://formsubmit.co/ajax/Sales@bluecraftdesignstudio.com', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(submitData)
            }).catch(error => console.error("Error submitting lead form:", error));

            // Execute success logic immediately to avoid any delay
            if (onSuccessSubmit) {
                onSuccessSubmit();
            } else {
                alert('Thank you! We will contact you soon.');
            }

            setFormData({
                name: '',
                phone: '',
                email: '',
                service: 'Rent'
            });
        }
    };

    return (
        <div className="lead-form-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-secondary small mb-1">Full Name</label>
                    <input
                        type="text"
                        className={`form-control bg-light ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-secondary small mb-1">Phone Number</label>
                    <input
                        type="tel"
                        className={`form-control bg-light ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="1234567890"
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-secondary small mb-1">Email Address</label>
                    <input
                        type="email"
                        className={`form-control bg-light ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="service" className="form-label text-secondary small mb-1">I'm interested in</label>
                    <select
                        className="form-select bg-light"
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

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary fw-bold" style={{ backgroundColor: '#0056b3' }}>Get a Call Back</button>
                </div>
            </form>
        </div>
    );
};

export default LeadForm;
