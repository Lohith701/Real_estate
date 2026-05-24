import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2" style={{ zIndex: 1050 }}>
            <div className="container-fluid px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
                    {/* Ensure logo height scales gracefully on smaller screens */}
                    <img src={logo} alt="Blue Craft Properties" className="me-2" style={{ height: 'clamp(35px, 6vw, 50px)', width: 'auto' }} />
                    <div className="d-flex align-items-center flex-wrap" style={{ fontFamily: "'Nunito', sans-serif", whiteSpace: 'nowrap' }}>
                        {/* Responsive typography to prevent overflowing container on mobile View */}
                        <span className="fw-black text-dark fs-5 fs-sm-4 mb-0" style={{ fontWeight: 900, transform: 'scaleY(0.9)' }}>BlueCraft</span>
                        <span className="fw-bold ms-1 fs-5 fs-sm-4 mb-0" style={{ color: '#0056b3', transform: 'scaleY(0.9)' }}>Properties</span>
                    </div>
                </Link>

                {/* Navbar Toggler cleanly aligned to right */}
                <button
                    className="navbar-toggler border-0 shadow-none px-2 d-lg-none"
                    type="button"
                    onClick={toggle}
                    aria-controls="navbarNav"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <i className="bi bi-x-lg fs-2 text-primary" style={{ transition: 'all 0.3s ease' }}></i>
                    ) : (
                        <i className="bi bi-list fs-1 text-dark" style={{ transition: 'all 0.3s ease' }}></i>
                    )}
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center mt-3 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-secondary fw-bold px-3 py-2" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/properties" className="nav-link text-secondary fw-bold px-3 py-2" onClick={closeMenu}>Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-secondary fw-bold px-3 py-2" onClick={closeMenu}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-secondary fw-bold px-3 py-2" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
