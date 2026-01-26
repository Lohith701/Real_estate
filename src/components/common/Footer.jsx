import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top CTA Section */}
            <div className="footer-cta-section">
                <div className="cta-box find-property">
                    <h3>Find Property</h3>
                    <p>Select from thousands of options, without brokerage.</p>
                    <Link to="/properties" className="cta-button">Find Now</Link>
                </div>
                <div className="cta-divider"></div>
                <div className="cta-box list-property">
                    <h3>List Your Property</h3>
                    <p>For Free. Without any brokerage.</p>
                    <Link to="/list-property" className="cta-button">Free Posting</Link>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="footer-nav-section">
                <ul className="footer-nav-links">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/terms">Terms & Conditions</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/sitemap">Sitemap</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                </ul>
            </div>

            {/* Bottom Section: Apps & Social */}
            <div className="footer-bottom-section">
                <div className="app-links">
                    <button className="store-badge google-play">
                        <i className="fab fa-google-play"></i>
                        <div className="store-text">
                            <span>GET IT ON</span>
                            <span className="store-name">Google Play</span>
                        </div>
                    </button>
                    <button className="store-badge app-store">
                        <i className="fab fa-apple"></i>
                        <div className="store-text">
                            <span>Download on the</span>
                            <span className="store-name">App Store</span>
                        </div>
                    </button>
                </div>

                <div className="social-icons-row">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle linkedin">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-circle youtube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; 2013-25 NoBroker Technologies Solutions Pvt. Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
