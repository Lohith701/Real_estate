import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Blue Craft Properties" className="nav-logo-img" />
                    <div className="nav-logo-text">
                        <span>Blue</span>
                        <span>Craft</span>
                        <span>Properties</span>
                    </div>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                        {click ? '✕' : '☰'}
                    </i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/properties" className="nav-links" onClick={closeMobileMenu}>Properties</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
