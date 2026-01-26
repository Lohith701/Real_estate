import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <img src={property.image} alt={property.title} className="property-image" />
                <span className={`property-type ${property.type.toLowerCase()}`}>
                    {property.type}
                </span>
            </div>
            <div className="property-details">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">
                    <i className="fas fa-map-marker-alt"></i> {property.location}
                </p>
                <p className="property-price">{property.price}</p>
                <Link to={`/properties/${property.id}`} className="view-details-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
