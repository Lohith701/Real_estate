import React from 'react';
import './SkeletonLoader.css';

/* ── Card skeleton (matches PropertyCard layout) ── */
export const PropertyCardSkeleton = () => (
    <div className="skeleton-card card border shadow-sm mb-3 overflow-hidden">
        <div className="row g-0">
            <div className="col-md-4">
                <div className="skeleton-img shimmer" style={{ minHeight: '250px' }} />
            </div>
            <div className="col-md-8 p-3 d-flex flex-column gap-2">
                <div className="skeleton-line shimmer" style={{ width: '60%', height: '20px' }} />
                <div className="skeleton-line shimmer" style={{ width: '40%', height: '14px' }} />
                <div className="skeleton-box shimmer mt-2" style={{ height: '70px', borderRadius: '8px' }} />
                <div className="d-flex justify-content-between mt-auto pt-2">
                    <div className="skeleton-line shimmer" style={{ width: '30%', height: '24px' }} />
                    <div className="skeleton-line shimmer" style={{ width: '40%', height: '36px', borderRadius: '6px' }} />
                </div>
            </div>
        </div>
    </div>
);

/* ── Generic page loading spinner ── */
export const PageLoader = ({ message = 'Loading…' }) => (
    <div className="page-loader d-flex flex-column align-items-center justify-content-center py-5 gap-3" style={{ minHeight: '300px' }}>
        <div className="loader-ring">
            <div /><div /><div /><div />
        </div>
        <p className="text-muted small fw-medium">{message}</p>
    </div>
);

export default PropertyCardSkeleton;
