import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/home/LeadForm';

// Reusing images for demo
import rentImg from '../resources/home-slider/rent.png';
import buyImg from '../resources/home-slider/buy.png';
import sellImg from '../resources/home-slider/sell.png';

// Mock Data (should match PropertiesPage for consistency in valid IDs)
const PROPERTIES_DATA = [
    {
        id: 1,
        title: 'Luxury Apartment',
        location: 'Downtown, City',
        price: '$2,500/mo',
        type: 'Rent',
        image: rentImg,
        description: 'Experience the height of luxury in this stunning downtown apartment. Featuring floor-to-ceiling windows, modern appliances, and a breathtaking view of the city skyline.',
        amenities: ['2 Bedrooms', '2 Bathrooms', 'Gym Access', 'Rooftop Pool', '24/7 Security'],
    },
    {
        id: 2,
        title: 'Modern Villa',
        location: 'Suburbs, City',
        price: '$850,000',
        type: 'Buy',
        image: buyImg,
        description: 'A spacious modern villa located in the quiet suburbs. Perfect for families, with a large backyard, open-concept living area, and state-of-the-art kitchen.',
        amenities: ['4 Bedrooms', '3 Bathrooms', 'Private Garden', 'Garage', 'Smart Home System'],
    },
    {
        id: 3,
        title: 'Cozy Studio',
        location: 'Uptown, City',
        price: '$1,200/mo',
        type: 'Rent',
        image: sellImg,
        description: 'A charming studio apartment in the heart of Uptown. Close to cafes, parks, and public transport. ideal for young professionals.',
        amenities: ['Studio', '1 Bathroom', 'Furnished', 'High-Speed Internet', 'Pet Friendly'],
    },
    {
        id: 4,
        title: 'Family Home',
        location: 'Green Valley, City',
        price: '$450,000',
        type: 'Buy',
        image: rentImg,
        description: 'Beautiful family home in Green Valley. Safe neighborhood with excellent schools nearby. Features a renovated kitchen and hardwood floors.',
        amenities: ['3 Bedrooms', '2 Bathrooms', 'Backyard', 'Fireplace', 'Near Schools'],
    },
    {
        id: 5,
        title: 'Penthouse Suite',
        location: 'City Center',
        price: '$5,000/mo',
        type: 'Rent',
        image: buyImg,
        description: 'Exclusive penthouse suite with private elevator access. Panoramic views, wrap-around terrace, and premium finishes throughout.',
        amenities: ['3 Bedrooms', '3.5 Bathrooms', 'Private Terrace', 'Concierge', 'Valet Parking'],
    },
    {
        id: 6,
        title: 'Beachfront Condo',
        location: 'Seaside, City',
        price: '$600,000',
        type: 'Buy',
        image: sellImg,
        description: 'Wake up to the sound of waves in this beachfront condo. Direct beach access, resort-style amenities, and a vibrant local community.',
        amenities: ['2 Bedrooms', '2 Bathrooms', 'Ocean View', 'Pool', 'Fitness Center'],
    },
];

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const property = PROPERTIES_DATA.find((p) => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

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
                                {property.amenities.map((amenity, index) => (
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
