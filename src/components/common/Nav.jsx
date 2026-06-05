import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/FINAL_LOGO.webp';
import './Nav.css';

const navLinks = [
    { path: '/', label: 'Home', icon: 'fas fa-home' },
    { path: '/properties', label: 'Properties', icon: 'fas fa-building' },
    { path: '/about', label: 'About Us', icon: 'fas fa-info-circle' },
    { path: '/contact', label: 'Contact', icon: 'fas fa-envelope' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isTransparent = isHomePage && !hasScrolled && !isOpen;

    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const updateScrollState = () => {
            setHasScrolled(window.scrollY > 24);
        };

        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });

        return () => window.removeEventListener('scroll', updateScrollState);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <nav className={`mobile-navbar ${isHomePage ? 'home-navbar' : 'sticky-top'} ${isTransparent ? 'is-transparent' : 'is-solid'}`} style={{ zIndex: 1050 }}>
                <div className="mobile-navbar-inner">
                    <Link to="/" className="mobile-navbar-brand" onClick={closeMenu}>
                        <img src={logo} alt="Blue Craft Properties" className="mobile-navbar-logo" />
                        <div className="mobile-navbar-brand-text">
                            <span className="brand-primary">BlueCraft</span>
                            <span className="brand-accent">Properties</span>
                        </div>
                    </Link>

                    {/* Animated Hamburger / Close Button */}
                    <button
                        className={`mobile-menu-toggle ${isOpen ? 'is-active' : ''}`}
                        type="button"
                        onClick={toggle}
                        aria-controls="mobileDrawer"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                        <span className="toggle-bar"></span>
                    </button>
                </div>
            </nav>

            {/* Backdrop Overlay */}
            <div
                className={`mobile-menu-backdrop ${isOpen ? 'is-visible' : ''}`}
                onClick={closeMenu}
            />

            {/* Slide-in Drawer */}
            <aside
                className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}
                id="mobileDrawer"
            >
                {/* Drawer Header */}
                <div className="drawer-header">
                    <Link to="/" className="drawer-brand" onClick={closeMenu}>
                        <img src={logo} alt="Blue Craft Properties" className="drawer-logo" />
                        <div className="drawer-brand-text">
                            <span className="brand-primary">BlueCraft</span>
                            <span className="brand-accent">Properties</span>
                        </div>
                    </Link>
                </div>

                {/* Drawer Navigation */}
                <nav className="drawer-nav">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`drawer-nav-link ${location.pathname === link.path ? 'is-active' : ''}`}
                            onClick={closeMenu}
                            style={{ animationDelay: `${index * 0.06}s` }}
                        >
                            <span className="drawer-nav-icon">
                                <i className={link.icon}></i>
                            </span>
                            <span className="drawer-nav-label">{link.label}</span>
                            {location.pathname === link.path && (
                                <span className="drawer-active-indicator"></span>
                            )}
                            <i className="fas fa-chevron-right drawer-nav-arrow"></i>
                        </Link>
                    ))}
                </nav>

                {/* Drawer Divider */}
                <div className="drawer-divider"></div>

                {/* Drawer CTA */}
                <div className="drawer-cta">
                    <p className="drawer-cta-text">Looking for your dream property?</p>
                    <Link to="/properties" className="drawer-cta-btn" onClick={closeMenu}>
                        <i className="fas fa-search me-2"></i>
                        Explore Properties
                    </Link>
                </div>

                {/* Drawer Footer */}
                <div className="drawer-footer">
                    <div className="drawer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <p className="drawer-copyright">&copy; {new Date().getFullYear()} BlueCraft Properties</p>
                </div>
            </aside>

            {/* Desktop Navbar — only visible on lg+ */}
            <nav className={`desktop-navbar navbar navbar-expand-lg navbar-light py-2 ${isHomePage ? 'home-navbar' : 'sticky-top'} ${isTransparent ? 'is-transparent' : 'is-solid'}`} style={{ zIndex: 1049 }}>
                <div className="container-fluid px-4">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img src={logo} alt="Blue Craft Properties" className="me-2" style={{ height: 'clamp(35px, 6vw, 50px)', width: 'auto' }} />
                        <div className="d-flex align-items-center flex-wrap" style={{ fontFamily: "'Nunito', sans-serif", whiteSpace: 'nowrap' }}>
                            <span className="fw-black text-dark fs-5 fs-sm-4 mb-0" style={{ fontWeight: 900, transform: 'scaleY(0.9)' }}>BlueCraft</span>
                            <span className="fw-bold ms-1 fs-5 fs-sm-4 mb-0" style={{ color: '#0056b3', transform: 'scaleY(0.9)' }}>Properties</span>
                        </div>
                    </Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3 text-center mt-3 mt-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link fw-bold px-3 py-2 ${location.pathname === link.path ? 'active-link text-primary' : 'text-secondary'}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
