import React from 'react';
import './HeroBanner.css';

/**
 * HeroBanner — Cinematic page header with 6 visual layers.
 *
 * Props:
 *   backgroundImage  — imported image or URL string
 *   eyebrow          — uppercase label text (e.g. "Our Story")
 *   title            — main heading (e.g. "About Us")
 *   subtitle         — lighter subtext below heading
 */
const HeroBanner = ({ backgroundImage, eyebrow, title, subtitle }) => {
    return (
        <section className="hero-banner">
            {/* 1. Background image with slow zoom */}
            <div
                className="hero-banner__bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* 2. Dark overlay */}
            <div className="hero-banner__overlay" />

            {/* 3. Vignette */}
            <div className="hero-banner__vignette" />

            {/* 4. Curtain shimmer */}
            <div className="hero-banner__shimmer" />

            {/* 5. Centered content */}
            <div className="hero-banner__content">
                {eyebrow && (
                    <div className="hero-banner__eyebrow">{eyebrow}</div>
                )}
                <h1 className="hero-banner__title">{title}</h1>
                {subtitle && (
                    <p className="hero-banner__subtitle">{subtitle}</p>
                )}
                <div className="hero-banner__goldbar" />
            </div>

            {/* 6. Bottom shimmer line */}
            <div className="hero-banner__bottomline" />
        </section>
    );
};

export default HeroBanner;
