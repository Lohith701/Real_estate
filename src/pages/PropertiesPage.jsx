import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/properties/PropertyCard';

// Import images (reusing slider images for demo)
import rentImg from '../resources/home-slider/rent.png';
import buyImg from '../resources/home-slider/buy.png';
import sellImg from '../resources/home-slider/sell.png';

const PROPERTIES_DATA = [
    {
        id: 1,
        title: 'Sowparnika Ashiyana',
        location: 'Whitefield, Bangalore',
        price: '₹50.96 L - ₹97.06 L',
        priceVal: 5000000,
        type: 'Apartment',
        bhk: '2, 3 BHK Flats',
        area: '1050 sq.ft',
        status: 'Ready',
        builder: 'Sowparnika Group',
        builderLogo: 'https://via.placeholder.com/30?text=SG',
        image: rentImg,
    },
    {
        id: 2,
        title: 'Prestige Primrose Hills',
        location: 'Kanakapura Road, Bangalore',
        price: '₹53.76 L - ₹1.26 Crs',
        priceVal: 6000000,
        type: 'Apartment',
        bhk: '1, 2, 3 BHK Flats',
        area: '584 sq.ft onwards',
        status: 'Under Construction',
        builder: 'Prestige Group',
        builderLogo: 'https://via.placeholder.com/30?text=PG',
        image: buyImg,
    },
    {
        id: 3,
        title: 'Bren Northern Lights',
        location: 'Jakkur, Bangalore',
        price: '₹58 L - ₹97 L',
        priceVal: 5800000,
        type: 'Apartment',
        bhk: '1, 2 Flats',
        area: '700 sq.ft',
        status: 'Ready',
        builder: 'Bren Corporation',
        builderLogo: 'https://via.placeholder.com/30?text=BC',
        image: sellImg,
    },
    {
        id: 4,
        title: 'Godrej Air',
        location: 'Whitefield, Bangalore',
        price: '₹1.1 Cr - ₹1.8 Cr',
        priceVal: 11000000,
        type: 'Villa',
        bhk: '3, 4 BHK',
        area: '1800 sq.ft',
        status: 'Ready',
        builder: 'Godrej Properties',
        builderLogo: 'https://via.placeholder.com/30?text=GP',
        image: rentImg,
    },
    {
        id: 5,
        title: 'Brigade Utopia',
        location: 'Varthur, Bangalore',
        price: '₹80 L - ₹1.5 Cr',
        priceVal: 8000000,
        type: 'Apartment',
        bhk: '2, 3 BHK',
        area: '1200 sq.ft',
        status: 'Under Construction',
        builder: 'Brigade Group',
        builderLogo: 'https://via.placeholder.com/30?text=BG',
        image: buyImg,
    },
];

const PropertiesPage = () => {
    const [searchParams] = useSearchParams();

    // Filter States
    const [filterType, setFilterType] = useState(searchParams.get('type') || 'All');
    const [filterLocation, setFilterLocation] = useState('All');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
    const [filterBHK, setFilterBHK] = useState('All');
    const [priceRange, setPriceRange] = useState(100); // 0 to 100 scale, representing 0 to 10Cr+
    const [filterStatus, setFilterStatus] = useState('All');

    // Sync from URL params on change
    const [prevSearchParams, setPrevSearchParams] = useState(searchParams);
    if (searchParams !== prevSearchParams) {
        setPrevSearchParams(searchParams);
        const typeParam = searchParams.get('type');
        const queryParam = searchParams.get('query');
        if (typeParam) setFilterType(typeParam);
        if (queryParam) setSearchQuery(queryParam);
    }

    // Apply Filters (Derived State)
    const items = useMemo(() => {
        let filtered = PROPERTIES_DATA;

        // 1. Type Filter
        if (filterType !== 'All') {
            filtered = filtered.filter(item => {
                if (filterType === 'Apartment') return item.type === 'Apartment';
                if (filterType === 'Villa') return item.type === 'Villa';
                if (filterType === 'Independent Floor') return item.type === 'Independent Floor';
                if (filterType === 'Independent House') return item.type === 'Independent House';
                return item.type === filterType;
            });
        }

        // 2. Location Filter
        if (filterLocation !== 'All') {
            filtered = filtered.filter(item => item.location.includes(filterLocation));
        }

        // 3. Search Query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.location.toLowerCase().includes(lowerQuery) ||
                item.builder.toLowerCase().includes(lowerQuery)
            );
        }

        // 4. BHK Filter
        if (filterBHK !== 'All') {
            const bhkNumber = filterBHK.split(' ')[0];
            filtered = filtered.filter(item => item.bhk.includes(bhkNumber));
        }

        // 5. Price Filter
        // Map 0-100 slider to 0 - 10 Cr (100 * 10L = 10 Cr)
        const maxPriceVal = priceRange * 1000000;
        if (priceRange < 100) {
            filtered = filtered.filter(item => item.priceVal <= maxPriceVal);
        }

        // 6. Status Filter
        if (filterStatus !== 'All') {
            filtered = filtered.filter(item => item.status === filterStatus);
        }

        return filtered;
    }, [filterType, filterLocation, searchQuery, filterBHK, priceRange, filterStatus]);

    // Handlers
    const resetFilters = () => {
        setFilterType('All');
        setFilterLocation('All');
        setSearchQuery('');
        setFilterBHK('All');
        setPriceRange(100);
        setFilterStatus('All');
    };

    const formatPriceLabel = (val) => {
        if (val === 100) return '₹ 10 Cr+';
        const inLakhs = val * 10;
        if (inLakhs >= 100) {
            return `₹ ${(inLakhs / 100).toFixed(1)} Cr`;
        }
        return `₹ ${inLakhs} L`;
    };

    const onTypeChange = (type) => { // Helper for checkboxes
        setFilterType(filterType === type ? 'All' : type);
    };

    return (
        <div className="properties-page-container">
            {/* Header Search Section */}
            <div className="properties-search-header py-3 shadow-sm sticky-top bg-white border-bottom" style={{ zIndex: 1020 }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="input-group search-bar-group shadow-sm rounded-pill overflow-hidden border">
                                <select
                                    className="form-select border-0 bg-light"
                                    style={{ maxWidth: '150px' }}
                                    value={filterLocation}
                                    onChange={(e) => setFilterLocation(e.target.value)}
                                >
                                    <option value="All">All Cities</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                                <input
                                    type="text"
                                    className="form-control border-0 py-2"
                                    placeholder="Search for locality, landmark, project, or builder..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="btn btn-primary px-4" type="button">
                                    <i className="fas fa-search me-2"></i> Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="row g-4">
                    {/* Sidebar Filters */}
                    <div className="col-lg-3 d-none d-lg-block">
                        <div className="filter-sidebar card shadow-sm border-0 sticky-top" style={{ top: '100px', zIndex: 1 }}>
                            <div className="card-header bg-white border-bottom-0 pt-3 pb-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="fw-bold mb-0 text-secondary">Filter your Search</h5>
                                    <button
                                        className="btn btn-link text-secondary text-decoration-none p-0 small"
                                        onClick={resetFilters}
                                    >
                                        <i className="fas fa-redo-alt me-1"></i> Reset
                                    </button>
                                </div>
                            </div>
                            <div className="card-body scrollable-filters" style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }}>

                                {/* Property Type */}
                                <div className="mb-4">
                                    <label className="fw-bold text-secondary mb-2 small text-uppercase">Property Type</label>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="typeApartment"
                                            checked={filterType === 'Apartment'}
                                            onChange={() => onTypeChange('Apartment')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="typeApartment">Apartment</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="typeVilla"
                                            checked={filterType === 'Villa'}
                                            onChange={() => onTypeChange('Villa')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="typeVilla">Gated Community Villa</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="typeFloor"
                                            checked={filterType === 'Independent Floor'}
                                            onChange={() => onTypeChange('Independent Floor')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="typeFloor">Independent Floor</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="typeHouse"
                                            checked={filterType === 'Independent House'}
                                            onChange={() => onTypeChange('Independent House')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="typeHouse">Independent House</label>
                                    </div>
                                </div>

                                {/* Apartment Type (BHK) */}
                                <div className="mb-4">
                                    <label className="fw-bold text-secondary mb-2 small text-uppercase">Apartment Type</label>
                                    <div className="d-flex flex-wrap gap-2">
                                        {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map(bhk => (
                                            <button
                                                key={bhk}
                                                className={`btn btn-sm ${filterBHK === bhk ? 'btn-primary' : 'btn-outline-light text-dark border'}`}
                                                onClick={() => setFilterBHK(filterBHK === bhk ? 'All' : bhk)}
                                            >
                                                {bhk}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-4">
                                    <label className="fw-bold text-secondary mb-2 small text-uppercase">
                                        Max Price: <span className="text-primary">{formatPriceLabel(priceRange)}</span>
                                    </label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        min="0"
                                        max="100"
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(Number(e.target.value))}
                                    />
                                    <div className="d-flex justify-content-between mt-2">
                                        <div className="bg-light px-2 py-1 rounded small border">₹ 0</div>
                                        <div className="bg-light px-2 py-1 rounded small border">₹ 10 Cr+</div>
                                    </div>
                                </div>

                                {/* Property Status */}
                                <div className="mb-4">
                                    <label className="fw-bold text-secondary mb-2 small text-uppercase">Property Status</label>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id="statusAll"
                                            checked={filterStatus === 'All'}
                                            onChange={() => setFilterStatus('All')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="statusAll">All</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id="statusUnderConst"
                                            checked={filterStatus === 'Under Construction'}
                                            onChange={() => setFilterStatus('Under Construction')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="statusUnderConst">Under Construction</label>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="status"
                                            id="statusReady"
                                            checked={filterStatus === 'Ready'}
                                            onChange={() => setFilterStatus('Ready')}
                                        />
                                        <label className="form-check-label text-muted" htmlFor="statusReady">Ready</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Properties List */}
                    <div className="col-lg-9">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="text-secondary fw-normal">Showing <span className="fw-bold text-dark">{items.length}</span> Properties in <span className="fw-bold text-dark">{filterLocation === 'All' ? 'Bangalore' : filterLocation}</span></h5>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-list"></i> List</button>
                                <button className="btn btn-outline-secondary btn-sm"><i className="fas fa-map-marker-alt"></i> Map</button>
                            </div>
                        </div>

                        <div className="properties-list d-flex flex-column gap-4">
                            {items.length > 0 ? (
                                items.map((property) => (
                                    <PropertyCard key={property.id} property={property} />
                                ))
                            ) : (
                                <div className="text-center py-5">
                                    <div className="mb-3">
                                        <i className="fas fa-home fa-4x text-muted opacity-25"></i>
                                    </div>
                                    <h4 className="text-muted">No properties found matching your criteria.</h4>
                                    <button
                                        className="btn btn-outline-primary mt-3"
                                        onClick={resetFilters}
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesPage;
