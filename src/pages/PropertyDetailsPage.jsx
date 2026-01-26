import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LeadForm from '../components/home/LeadForm';
import './PropertyDetailsPage.css';

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
            <div className="property-not-found">
                <h2>Property not found</h2>
                <Link to="/properties" className="back-link">Back to Properties</Link>
            </div>
        );
    }

    return (
        <div className="property-details-page">
            <div className="property-hero" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="property-hero-overlay">
                    <div className="property-hero-content">
                        <span className={`property-badge ${property.type.toLowerCase()}`}>{property.type}</span>
                        <h1>{property.title}</h1>
                        <p className="hero-location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
                    </div>
                </div>
            </div>

            <div className="property-main-content">
                <div className="property-info">
                    <div className="price-section">
                        <h2>{property.price}</h2>
                    </div>

                    <div className="description-section">
                        <h3>Description</h3>
                        <p>{property.description}</p>
                    </div>

                    <div className="amenities-section">
                        <h3>Amenities</h3>
                        <ul className="amenities-list">
                            {property.amenities.map((amenity, index) => (
                                <li key={index}><i className="fas fa-check-circle"></i> {amenity}</li>
                            ))}
                        </ul>
                    </div>

                    <Link to="/properties" className="back-btn">
                        &larr; Back to Listings
                    </Link>
                </div>

                <div className="property-sidebar">
                    <div className="sidebar-sticky">
                        <h3>Interested? Contact Us</h3>
                        <LeadForm /> {/* Reusing the component */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;
