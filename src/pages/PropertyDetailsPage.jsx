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
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchProperty = async () => {
            try {
                const res = await fetch(`/api/properties/${id}`);
                const result = await res.json();
                if (result.success) {
                    setProperty(result.data);
                    setActiveImage(result.data.image || (result.data.images && result.data.images[0]) || '');
                    
                    // SEO Metadata
                    document.title = `${result.data.title} - ${result.data.location} | BlueCraft Properties`;
                    let metaDescription = document.querySelector('meta[name="description"]');
                    if (!metaDescription) {
                        metaDescription = document.createElement('meta');
                        metaDescription.name = "description";
                        document.head.appendChild(metaDescription);
                    }
                    metaDescription.content = result.data.overview || result.data.description;
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
                        {/* Main Image Header */}
                        <div className="mb-3 rounded-3 overflow-hidden shadow-sm position-relative" style={{ height: '400px', border: '1px solid #dee2e6' }}>
                            <img src={activeImage} alt={property.title} className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'top', transition: 'all 0.3s ease' }} />
                            <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-black p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.85))' }}>
                                <h1 className="text-white fw-bold mb-0 text-shadow fs-3 fs-md-1">{property.title}</h1>
                                <p className="text-white mb-0 text-shadow small fs-md-6"><i className="fas fa-map-marker-alt me-1"></i> {property.location}</p>
                            </div>
                        </div>

                        {/* Image Gallery Thumbnails */}
                        {property.images && property.images.length > 0 && (
                            <div className="mb-4">
                                <div className="d-flex gap-2 overflow-x-auto pb-2 scrollbar-thin" style={{ scrollSnapType: 'x mandatory' }}>
                                    {property.images.map((imgUrl, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded overflow-hidden cursor-pointer border-2"
                                            style={{
                                                width: '90px',
                                                height: '60px',
                                                flexShrink: 0,
                                                cursor: 'pointer',
                                                borderColor: activeImage === imgUrl ? '#009587' : 'transparent',
                                                opacity: activeImage === imgUrl ? 1 : 0.7,
                                                transition: 'all 0.2s ease',
                                                scrollSnapAlign: 'start'
                                            }}
                                            onClick={() => setActiveImage(imgUrl)}
                                            onMouseEnter={(e) => {
                                                if (activeImage !== imgUrl) e.currentTarget.style.opacity = '1';
                                            }}
                                            onMouseLeave={(e) => {
                                                if (activeImage !== imgUrl) e.currentTarget.style.opacity = '0.7';
                                            }}
                                        >
                                            <img src={imgUrl} alt={`${property.title} thumb ${idx + 1}`} loading="lazy" className="w-100 h-100" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Price & Actions */}
                        <div className="mb-4 d-flex flex-column flex-md-row justify-content-md-between align-items-md-end gap-3">
                            <div>
                                <h2 className="display-6 display-md-4 fw-bold text-primary mb-0" style={{ color: '#0056b3' }}>{property.price}</h2>
                            </div>
                            {property.brochure && (
                                <div className="w-100" style={{ maxWidth: '400px' }}>
                                    <a href={property.brochure} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary px-4 py-2 shadow-sm fw-bold rounded-pill w-100" download>
                                        <i className="fas fa-file-pdf me-2"></i> Download Brochure
                                    </a>
                                </div>
                            )}
                        </div>

                        <hr className="text-secondary opacity-25" />

                        {/* Overview / Description */}
                        <div className="mb-5 py-2">
                            <h4 className="fw-bold mb-3 text-dark">Overview</h4>
                            <p className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                                {property.overview || property.description}
                            </p>
                        </div>
                        
                        {/* Configurations */}
                        {property.configurations && (
                            <div className="mb-5 py-3 p-4 bg-light rounded-3 border">
                                <h4 className="fw-bold mb-3 text-dark">Configurations</h4>
                                <div className="table-responsive">
                                    <table className="table table-borderless mb-0">
                                        <thead className="border-bottom">
                                            <tr>
                                                <th className="text-secondary">Type</th>
                                                <th className="text-secondary">Size</th>
                                                <th className="text-secondary">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {property.configurations.map((config, idx) => (
                                                <tr key={idx} className="border-bottom">
                                                    <td className="fw-bold">{config.type}</td>
                                                    <td>{config.size}</td>
                                                    <td className="text-muted small">{config.details}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        
                        {/* Investment Pricing */}
                        {property.investmentPricing && (
                            <div className="mb-5 py-2">
                                <h4 className="fw-bold mb-4 text-dark">Investment Pricing & Advantage</h4>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <div className="card h-100 border-primary shadow-sm">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-primary fw-bold text-uppercase">Pre-Launch Price</h6>
                                                <h3 className="card-title fw-bold">{property.investmentPricing.preLaunch}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card h-100 border-secondary bg-light">
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-secondary fw-bold text-uppercase">Expected Retail Price</h6>
                                                <h3 className="card-title fw-bold text-muted text-decoration-line-through">{property.investmentPricing.retailLaunch}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="alert alert-success d-flex align-items-center mb-4">
                                    <i className="fas fa-chart-line fa-2x me-3"></i>
                                    <div>
                                        <strong>Investment Advantage:</strong> {property.investmentPricing.advantage}
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h6 className="fw-bold text-success"><i className="fas fa-plus-circle me-2"></i>Includes</h6>
                                        <ul className="list-unstyled">
                                            {property.investmentPricing.includes.map((inc, i) => (
                                                <li key={i} className="mb-1"><i className="fas fa-check text-success me-2"></i>{inc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="fw-bold text-danger"><i className="fas fa-minus-circle me-2"></i>Excludes</h6>
                                        <ul className="list-unstyled text-muted small">
                                            {property.investmentPricing.excludes.map((exc, i) => (
                                                <li key={i} className="mb-1"><i className="fas fa-times text-danger me-2"></i>{exc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Investment Process */}
                        {property.investmentProcess && (
                            <div className="mb-5 py-2">
                                <h4 className="fw-bold mb-4 text-dark">Investment Process</h4>
                                <div className="position-relative">
                                    {property.investmentProcess.map((proc, idx) => (
                                        <div key={idx} className="d-flex mb-4">
                                            <div className="me-4 d-flex flex-column align-items-center">
                                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow" style={{ width: '40px', height: '40px', zIndex: 1 }}>
                                                    {idx + 1}
                                                </div>
                                                {idx < property.investmentProcess.length - 1 && (
                                                    <div className="bg-light w-100 flex-grow-1 border-start border-2 border-primary mt-1" style={{ width: '2px', minHeight: '40px' }}></div>
                                                )}
                                            </div>
                                            <div>
                                                <h5 className="fw-bold text-dark mb-1">{proc.step}</h5>
                                                <p className="text-secondary">{proc.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Exit Assurance Guarantee */}
                        {property.exitAssurance && (
                            <div className="mb-5 py-4 px-4 bg-warning bg-opacity-10 rounded-3 border border-warning shadow-sm">
                                <h4 className="fw-bold mb-4 text-dark"><i className="fas fa-shield-alt text-warning me-2"></i>Exit Assurance Guarantee</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h6 className="fw-bold text-dark mb-1">Principal Protection</h6>
                                            <p className="text-secondary small">{property.exitAssurance.principalProtection}</p>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="fw-bold text-dark mb-1">Assured Returns</h6>
                                            <p className="text-secondary small">{property.exitAssurance.assuredReturns}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <h6 className="fw-bold text-dark mb-1">Exit Window & Liquidity</h6>
                                            <p className="text-secondary small mb-1">{property.exitAssurance.exitWindow}</p>
                                            <p className="text-secondary small">{property.exitAssurance.liquidity}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-0">
                                        <h6 className="fw-bold text-dark mb-1">Upside Protection</h6>
                                        <p className="text-secondary small">{property.exitAssurance.upsideProtection}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Retain vs Resell */}
                        {property.retainVsResell && (
                            <div className="mb-5 py-2">
                                <h4 className="fw-bold mb-4 text-dark">Retain vs Resell</h4>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="card h-100 border-0 shadow-sm bg-light">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-primary mb-3"><i className="fas fa-home me-2"></i>Retaining the Unit</h5>
                                                <ul className="list-unstyled mb-0">
                                                    {property.retainVsResell.retaining.map((item, i) => (
                                                        <li key={i} className="mb-2 text-secondary small"><i className="fas fa-check-circle text-primary me-2"></i>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card h-100 border-0 shadow-sm bg-light">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-info mb-3"><i className="fas fa-hand-holding-usd me-2"></i>Reselling the Unit</h5>
                                                <ul className="list-unstyled mb-0">
                                                    {property.retainVsResell.reselling.map((item, i) => (
                                                        <li key={i} className="mb-2 text-secondary small"><i className="fas fa-check-circle text-info me-2"></i>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Location Highlights */}
                        {property.locationHighlights && (
                            <div className="mb-5 py-2">
                                <h4 className="fw-bold mb-3 text-dark">Why Invest in {property.location.split(',')[0]}?</h4>
                                <ul className="list-group list-group-flush">
                                    {property.locationHighlights.map((highlight, idx) => (
                                        <li key={idx} className="list-group-item bg-transparent px-0 border-light d-flex align-items-start">
                                            <i className="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                                            <span className="text-secondary">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Amenities */}
                        <div className="mb-5">
                            <h4 className="fw-bold mb-4 text-dark">Highlights / Amenities</h4>
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

