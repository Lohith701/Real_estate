import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card card border shadow-sm mb-3 overflow-hidden">
            <div className="row g-0">
                {/* Left: Image Section */}
                <div className="col-md-4 position-relative p-0" style={{ minHeight: '250px', maxHeight: '300px' }}>
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
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
                                    {property.title}
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
                                    <div className="text-secondary small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>
                                        {property.projectArea ? 'Project Area' : 'Carpet Area'}
                                    </div>
                                    <div className="fw-bold small">{property.projectArea || property.area}</div>
                                </div>
                                <div className="col-4">
                                    <div className="text-secondary small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Status</div>
                                    <div className="fw-bold small">{property.status}</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer: Price & Actions */}
                        <div className="mt-auto pt-3">
                            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <div>
                                    <h4 className="fw-bold text-dark mb-0">{property.price}</h4>
                                </div>
                                <div className="d-flex gap-2 w-100 justify-content-md-end" style={{ flex: '1' }}>
                                    <button className="btn btn-outline-primary px-3 shadow-sm flex-shrink-0" aria-label="View on Map">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </button>
                                    <button 
                                        className="btn btn-outline-secondary px-3 shadow-sm flex-shrink-0"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const link = `${window.location.origin}/properties/${property._id || property.id}`;
                                            if (navigator.share) {
                                                navigator.share({ title: property.title, url: link }).catch(console.error);
                                            } else {
                                                navigator.clipboard.writeText(link);
                                                alert('Property link copied to clipboard!');
                                            }
                                        }}
                                    >
                                        <i className="fas fa-share-alt"></i>
                                    </button>
                                    <Link to={`/properties/${property._id || property.id}`} className="btn btn-success fw-bold px-4 shadow-sm flex-grow-1 flex-md-grow-0" style={{ backgroundColor: '#009587', borderColor: '#009587', textDecoration: 'none' }}>
                                        Check Property
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
