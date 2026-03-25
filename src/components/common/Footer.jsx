import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-white border-top">
            {/* Top CTA Section */}
            <div className="bg-light py-5 border-bottom">
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-md-5 mb-4 mb-md-0">
                            <div className="cta-box">
                                <h3 className="h5 fw-bold text-secondary mb-2">Find Property</h3>
                                <p className="text-muted small mb-3">Select from thousands of options, without brokerage.</p>
                                <Link to="/properties" className="btn btn-primary btn-sm px-4 fw-bold">Find Now</Link>
                            </div>
                        </div>

                        <div className="d-none d-md-block col-md-auto">
                            <div className="bg-secondary opacity-25" style={{ width: '1px', height: '80px' }}></div>
                        </div>

                        <div className="col-md-5">
                            <div className="cta-box">
                                <h3 className="h5 fw-bold text-secondary mb-2">List Your Property</h3>
                                <p className="text-muted small mb-3">For Free. Without any brokerage.</p>
                                <Link to="/list-property" className="btn btn-primary btn-sm px-4 fw-bold">Free Posting</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="py-4 border-bottom">
                <div className="container">
                    <ul className="nav justify-content-center flex-column flex-md-row gap-md-4 text-center p-0">
                        <li className="nav-item"><Link to="/about" className="nav-link text-secondary py-1 px-0">About Us</Link></li>
                        <li className="nav-item"><Link to="/careers" className="nav-link text-secondary py-1 px-0">Careers</Link></li>
                        <li className="nav-item"><Link to="/terms" className="nav-link text-secondary py-1 px-0">Terms & Conditions</Link></li>
                        <li className="nav-item"><Link to="/privacy" className="nav-link text-secondary py-1 px-0">Privacy Policy</Link></li>
                        <li className="nav-item"><a href="/#testimonials" className="nav-link text-secondary py-1 px-0">Testimonials</a></li>
                        <li className="nav-item"><Link to="/sitemap" className="nav-link text-secondary py-1 px-0">Sitemap</Link></li>
                        <li className="nav-item"><Link to="/faqs" className="nav-link text-secondary py-1 px-0">FAQs</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section: Apps & Social */}
            <div className="py-5 text-center">
                <div className="container">


                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mb-3">
                        <div className="d-flex flex-column align-items-start text-secondary text-start border-end px-4 border-secondary border-opacity-25" style={{ maxWidth: '350px' }}>
                            <div className="fw-bold text-dark mb-2">Blue Craft Properties</div>
                            <div className="d-flex mb-2">
                                <i className="fas fa-map-marker-alt me-3 mt-1 text-primary"></i>
                                <div className="small lh-sm">
                                    #764/1, 19th Main, 22nd Cross, Club Circle,<br />
                                    HSR Layout, Sector 2,<br />
                                    Bengaluru – 560102
                                </div>
                            </div>
                            <div className="d-flex align-items-center small">
                                <i className="fas fa-envelope me-3 text-primary"></i>
                                <a href="mailto:bluecraftproperties@gmail.com" className="text-secondary text-decoration-none fw-bold">bluecraftproperties@gmail.com</a>
                            </div>
                        </div>

                        <div className="d-flex flex-column align-items-center align-items-md-start gap-3">
                            <div className="d-flex gap-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-secondary bg-light rounded-circle d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                            <div className="text-muted small">
                                <p className="mb-0">&copy; 2026 Blue Craft Properties Pvt. Ltd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
