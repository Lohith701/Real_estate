import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-white border-top">
            {/* Top CTA Section */}
            <div className="footer-cta-section">
                <div className="container">
                    <div className="footer-cta-wrapper">
                        <div className="footer-cta-card">
                            <h3>Find Your Dream Property</h3>
                            <p>Select from thousands of options, without brokerage.</p>
                            <Link to="/properties" className="footer-cta-btn">
                                <i className="fas fa-search me-1"></i> Find Now
                            </Link>
                        </div>

                        <div className="footer-cta-divider d-none d-md-block"></div>

                        <div className="footer-cta-card">
                            <h3>List Your Property</h3>
                            <p>For free. Without any brokerage fees.</p>
                            <Link to="/list-property" className="footer-cta-btn">
                                <i className="fas fa-plus-circle me-1"></i> Free Posting
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav-section">
                <div className="container">
                    <ul className="footer-nav-grid">
                        <li>
                            <Link to="/about">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <a href="/#testimonials">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <Link to="/sitemap">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Sitemap
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <i className="fas fa-chevron-right nav-icon"></i>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section: Contact & Social */}
            <div className="footer-contact-section">
                <div className="container">
                    <div className="footer-contact-inner">
                        {/* Contact Column */}
                        <div className="footer-contact-col">
                            <div className="footer-brand">
                                <span className="footer-brand-name">BlueCraft <span>Properties</span></span>
                            </div>

                            <div className="footer-contact-items">
                                <div className="footer-contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-text">
                                        #764/1, 19th Main, 22nd Cross, Club Circle,
                                        HSR Layout, Sector 2,
                                        Bengaluru – 560102
                                    </div>
                                </div>

                                <div className="footer-contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-text">
                                        <a href="mailto:bluecraftproperties@gmail.com">bluecraftproperties@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Column */}
                        <div className="footer-social-col">
                            <hr className="footer-divider" />
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} Blue Craft Properties Pvt. Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
