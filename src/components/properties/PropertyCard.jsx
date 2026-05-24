import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card card border shadow-sm mb-3 overflow-hidden">
            <div className="row g-0">
                {/* Left: Image Section */}
                <div className="col-md-4 position-relative property-card-img-container">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="img-fluid h-100 w-100 object-fit-cover"
                    />
                    <div className="position-absolute top-0 start-0 m-2">
                        {/* Optional badge if needed */}
                    </div>
                </div>

                {/* Right: Content Section */}
                <div className="col-md-8">
                    <div className="card-body p-3 h-100 d-flex flex-column">

                        {/* Header */}
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <h5 className="card-title fw-bold mb-1 text-dark">
                                    {property.title} <i className="fas fa-external-link-alt small text-muted ms-1" style={{ fontSize: '0.8rem' }}></i>
                                </h5>
                                <p className="card-text text-muted small mb-0">
                                    {property.location}
                                </p>
                            </div>
                            {property.builderLogo && (
                                <div className="d-flex align-items-center bg-light rounded pt-3 ms-2 text-center" style={{ minWidth: '80px', flexDirection: 'column' }}>
                                    {/* Placeholder for Builder Logo/Name */}
                                    <i className="fas fa-building text-secondary mb-1"></i>
                                    <span className="small fw-bold text-secondary" style={{ fontSize: '0.6rem' }}>{property.builder}</span>
                                </div>
                            )}
                        </div>

                        {/* Specs Grid */}
                        <div className="bg-light rounded p-3 mb-3">
                            <div className="row text-center g-2">
                                <div className="col-4 border-end">
                                    <div className="text-secondary small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Configurations</div>
                                    <div className="fw-bold small">{property.bhk}</div>
                                </div>
                                <div className="col-4 border-end">
                                    <div className="text-secondary small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Carpet Area</div>
                                    <div className="fw-bold small">{property.area}</div>
                                </div>
                                <div className="col-4">
                                    <div className="text-secondary small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Status</div>
                                    <div className="fw-bold small">{property.status}</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer: Price & Actions */}
                        <div className="mt-auto d-flex align-items-center justify-content-between">
                            <div>
                                <h4 className="fw-bold text-dark mb-0">{property.price}</h4>
                            </div>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-danger btn-sm px-3 shadow-sm">
                                    <i className="far fa-heart"></i>
                                </button>
                                <button className="btn btn-outline-secondary btn-sm px-3 shadow-sm">
                                    <i className="fas fa-share-alt"></i>
                                </button>
                                <Link to={`/properties/${property._id || property.id}`} className="btn btn-success fw-bold px-4 shadow-sm" style={{ backgroundColor: '#009587', borderColor: '#009587', textDecoration: 'none' }}>
                                    Check Property
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
