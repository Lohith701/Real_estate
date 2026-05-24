import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/home/LeadForm';

// Reusing images for demo
import rentImg from '../resources/home-slider/rent.png';
import buyImg from '../resources/home-slider/buy.png';
import sellImg from '../resources/home-slider/sell.png';

// Removed PROPERTIES_DATA

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProperty = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/properties/${id}`);
                const result = await res.json();
                if (result.success) {
                    setProperty(result.data);
                }
            } catch (error) {
                console.error("Error fetching property details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="container py-5 text-center">
                <h2>Loading Property...</h2>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="container py-5 text-center">
                <h2>Property not found</h2>
                <Link to="/properties" className="btn btn-primary mt-3">Back to Properties</Link>
            </div>
        );
    }

    return (
        <div className="bg-white pb-5">
            {/* Simple Dark Header for Breadcrumb/Location */}
            <div className="bg-dark text-white py-3">
                <div className="container">
                    <div className="d-flex align-items-center small">
                        <Link to="/properties" className="text-white text-decoration-none me-2">Properties</Link>
                        <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.7rem' }}></i>
                        <span className="text-white-50">{property.location}</span>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row g-5">
                    {/* Left Column: Details */}
                    <div className="col-lg-8">
                        {/* Image Header (Optional, or handled differently. Reference image shows mostly text, but we'll keep the image for context) */}
                        <div className="mb-4 rounded-3 overflow-hidden shadow-sm position-relative" style={{ height: '300px' }}>
                            <img src={property.image} alt={property.title} className="w-100 h-100 object-fit-cover" />
                            <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-black p-3">
                                <h1 className="text-white fw-bold mb-0 text-shadow">{property.title}</h1>
                                <p className="text-white mb-0 text-shadow"><i className="fas fa-map-marker-alt me-1"></i> {property.location}</p>
                            </div>
                        </div>

                        {/* Price Title */}
                        <div className="mb-4">
                            <h2 className="display-4 fw-bold text-primary mb-2" style={{ color: '#0056b3' }}>{property.price}</h2>
                        </div>

                        <hr className="text-secondary opacity-25" />

                        {/* Description */}
                        <div className="mb-5 py-2">
                            <h4 className="fw-bold mb-3 text-dark">Description</h4>
                            <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                {property.description}
                            </p>
                        </div>

                        {/* Amenities */}
                        <div className="mb-5">
                            <h4 className="fw-bold mb-4 text-dark">Amenities</h4>
                            <div className="row g-3">
                                {property.amenities && property.amenities.map((amenity, index) => (
                                    <div key={index} className="col-md-6 col-lg-4">
                                        <div className="d-flex align-items-center">
                                            <i className="fas fa-check-circle text-primary me-2"></i>
                                            <span className="text-dark fw-medium">{amenity}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5">
                            <Link to="/properties" className="text-decoration-none fw-bold" style={{ color: '#0056b3' }}>
                                &larr; Back to Listings
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="col-lg-4">
                        <div className="card border shadow-sm sticky-top" style={{ top: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <div className="card-body p-4">
                                <h5 className="fw-bold text-center mb-4">Interested? Contact Us</h5>
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;
